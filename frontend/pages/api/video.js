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
const platesDir = './static/plates/thumbnails'
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
    //const publicName = `${plates.map((x) => x.replace(/\W/g, '-')).join('+')}.mp4`
    const publicName = `${plates.map((x) => x.replace(/\W/g, '-')).join('+')}`

    const publicNameVideo = publicName+".mp4"
    const publicNameThumb = publicName+".jpg"

    const publicPathVideo = path.join(outDir, publicNameVideo)
    const publicPathThumb = path.join(outDir, publicNameThumb)

    await fs.copyFile(outPath, publicPathVideo)
    await fs.copyFile(thumb, publicPathThumb)

    return { url: `/static/out/${publicNameVideo}`, thumb: `/static/out/${publicNameThumb}` }
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
	      console.log(i , img , " => ", path.join(outDir, `${i}.jpg`))
	      fs.copyFile(img, path.join(outDir, `${i}.jpg`))
	  } catch (err) {
	      throw err;
	}
      i++;
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
    sspawn(
      "ffmpeg",
      [
        "-r",
        "1",
        "-y",
        "-framerate",
        "30",
        //fps.toString(),
        "-pattern_type",
        "glob",
        "-i",
        path.join(outDir, "*.jpg"),
        "-c:v",
        "libx264",
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

	      console.log(i , " delete ", path.join(outDir, `${i}.jpg`))

	      await fs.unlink(path.join(outDir, `${i}.jpg`));
	      i++;
	    }
      await fs.unlink(outFile)
      await fs.rmdir(outDir)
    }
    return [thumb, outFile, clean];
  } finally {}
};

const sspawn = (...args) => new Promise((res, rej) => {
  const c = cp.spawn(...args)
  c.on('error', (err) => {
    rej(err)
  })
  c.on('exit', () => {
    res()
  })
})
