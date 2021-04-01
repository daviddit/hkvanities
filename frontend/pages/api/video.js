const fs = require("fs").promises;
const path = require("path");
const events = require("events");
const cp = require("child_process");
const util = require("util");
const uuid = require('uuid').v4

/*
const tmpDir = process.env.TMP_DIR
const outDir = process.env.OUT_DIR
*/
const tmpDir = './tmp'
const outDir = './static/out'
const poemsDir = './static/poems'
const platesDir = './static/plates/thumbnails'
const portrait = './static/img/portrait.jpg'
const plateToPath = (plate) => path.join(platesDir, `${plate}.jpg`)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const ret = await fn(req)
    res.status(200).json(ret)
  }
}

const fn = async (req) => {
  const plates = req.body && req.body.plates
  if (!(plates instanceof Array)) throw new Error("Invalid input")
  const imgs = []
  for (const plate of plates) {
    const path = plateToPath(plate)
    await fs.stat(path)
    imgs.push(path)
  }
  const [thumb, outPath, clean] = await jpgsToMp4(imgs)
  try {
    //const publicName = `${plates.map((x) => x.replace(/\W/g, '-')).join('+')}`
    //console.log(0,publicName)

    //const publicNameVideo = publicName+".mp4"
    //const publicNameThumb = publicName+".jpg"

    const publicPathVideo = path.join(outDir, "temp.mp4")
    const publicPathThumb = path.join(outDir, "temp.jpg")

    //console.log(1,poemsDir)

    const dir = await fs.readdir(poemsDir)

    // get next directory number 
    const id = parseInt(dir.sort((a,b) => (parseInt(a) > parseInt(b)) ? 1 : ((parseInt(b) > parseInt(a)) ? -1 : 0)).pop())+1
    //console.log(id)
	  
    const newDir =  path.join(poemsDir,id.toString())

    //console.log(4,newDir)

    await fs.mkdir(newDir);

    //console.log(5,newDir)

    const newVideo = path.join(newDir, 'YourPoem.mp4')
    const newThumb = path.join(newDir, 'YourPoem.jpg')

    //await fs.copyFile(outPath, publicPathVideo)
    //await fs.copyFile(thumb, publicPathThumb)
	  //
    //console.log(6,newVideo)
    //console.log(7,newThumb)

    await fs.copyFile(outPath, newVideo)
    await fs.copyFile(thumb, newThumb)

    //console.log(8,"return")

    //return { url: `/static/out/${publicNameVideo}`, thumb: `/static/out/${publicNameThumb}` }
    return { id: id, slug: '/poem/'+id, video: '/'+newVideo, thumb: '/'+newThumb }
  } finally {
    await clean()
  }
}

const jpgsToMp4 = async (imgs, opts) => {

  const fps = opts && opts.fps ? opts.fps : 1;
  let u = uuid();
  const outDir = path.join(tmpDir, u)
  const outFile = path.join(outDir, u+".mp4");

  try {
    await fs.mkdir(outDir);
  } catch (err) {
    if (!err || err.code != "EEXIST") {
      throw err;
    }
  }
  try {
    let i = 1;

    const thumb = path.join(outDir, `${i}.jpg`)

    for (const img of imgs) {
	  try {
	      //console.log(i , img , " => ", path.join(outDir, `${i}.jpg`))
	      fs.copyFile(img, path.join(outDir, `${i}.jpg`))
	  } catch (err) {
	      throw err;
	}
      i++;
    }

	  try {
    	      fs.copyFile(portrait, path.join(outDir, `${i}.jpg`))
      	      i++;
    	      fs.copyFile(portrait, path.join(outDir, `${i}.jpg`))
	  } catch (err) {
	      throw err;
	}


//    sspawn(
//      "ffmpeg",
//      [
//        "-y",
//        "-framerate",
//        fps.toString(),
//        "-pattern_type",
//        "glob",
//        "-i",
//        path.join(outDir, "*.jpg"),
//        "-c:v",
//        "libx264",
//        "-pix_fmt",
//        "yuvj422p",
//        outFile,
//      ],
//      {
//        stdio: 'inherit',
//      }
//    )
	  //ffmpeg -r:v 1 -y -pattern_type glob -i "*.jpg" -r:v 30 -codec:v libx264 -preset veryslow -pix_fmt yuv420p -crf 28 -an -movflags +faststart prova8.mp4

    await sspawn(
      "ffmpeg",
      [
        "-y",
        "-r:v",
        "0.75",
        "-pattern_type",
        "glob",
        "-i",
        path.join(outDir, "*.jpg"),
        "-r:v",
        "30",
        "-codec:v",
        "libx264",
        "-preset",
        "veryslow",
        "-pix_fmt",
        "yuv420p",
        "-crf",
        "28",
        "-an",
        "-movflags",
        "+faststart",
        outFile,
      ],
      {
        stdio: 'inherit',
      }
    )

    await sspawn("sleep", ["1"], {})
    const clean = async () => {
	    let i = 1;

	    for (const img of imgs) {

	      //console.log(i , " delete ", path.join(outDir, `${i}.jpg`))

	      await fs.unlink(path.join(outDir, `${i}.jpg`));
	      i++;
	    }

      await fs.unlink(path.join(outDir, `${i}.jpg`)); // portrait
      i++;
      await fs.unlink(path.join(outDir, `${i}.jpg`)); // portrait

      await fs.unlink(outFile)
      //console.log(" delete outfile:", outFile)
      await fs.rmdir(outDir)
      //console.log(" delete outdir:", outDir)
    }
    return [thumb, outFile, clean];
  } finally {}
};

const sspawn = (...args) => new Promise((res, rej) => {
  //console.log('spawn:',args)
  const c = cp.spawn(...args)
  c.on('error', (err) => {
    rej(err)
  })
  c.on('exit', () => {
    res()
  })
})
