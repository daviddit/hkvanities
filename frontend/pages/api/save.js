const fs = require("fs").promises;
const path = require("path");
const events = require("events");
const cp = require("child_process");
const util = require("util");
const uuid = require('uuid').v4

const outDir = './static/out'
const poemsDir = './static/poems'

const plateToPath = (plate) => path.join(platesDir, `${plate}.jpg`)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const ret = await fn(req)
    res.status(200).json(ret)
  }
}

const fn = async (req) => {

  const video = req.body && req.body.poem.video
  const thumb = req.body && req.body.poem.thumb

  if (!video) throw new Error("Invalid input")
  if (!thumb) throw new Error("Invalid input")

  try {
    const oldVideo = path.join(outDir, path.basename(video))
    const oldThumb = path.join(outDir, path.basename(thumb))

    const dir = await fs.readdir(poemsDir)
	  
    // get next directory number 
    const id = parseInt(dir.sort((a,b) => (parseInt(a) > parseInt(b)) ? 1 : ((parseInt(b) > parseInt(a)) ? -1 : 0)).pop())+1
    //console.log(id)
	  
    const newDir =  path.join(poemsDir,id.toString())

    await fs.mkdir(newDir);

    const newVideo = path.join(newDir, path.basename(video))
    const newThumb = path.join(newDir, path.basename(thumb))

    await fs.copyFile(oldVideo, newVideo)
    await fs.copyFile(oldThumb, newThumb)

    await fs.unlink(oldVideo);
    await fs.unlink(oldThumb);

    return { id: id, slug: '/see/'+id, video: newVideo, thumb: newThumb }
  } 
   finally {}
}

