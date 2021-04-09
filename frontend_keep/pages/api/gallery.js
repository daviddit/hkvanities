const fs = require('fs').promises
const recursive = require("recursive-readdir");
const path = require('path')

//const outDir = process.env.OUT_DIR
//const outDir = './static/out'
const url = '/static/gallery'

export default async function gallery(req, res) {

const outDir = req.query.id ? path.join('./static/gallery',req.query.id) :  './static/gallery' // one id : all results

await recursive(outDir, function (err, poems) {
  res.json({
    poems: poems
      .filter((g) => g.endsWith('.mp4'))
      .map((g) => ({
        id: g.split('/')[2], //  /static/gallery/[id]/file.mp4
        //video: `${encodeURIComponent(g)}`,
        slug: '/see/'+g.split('/')[2],
        video: '/'+g,
        thumb: '/'+g.split('.')[0]+".jpg",
        text: path.basename(g,".mp4").split('+').join(' '),
      })),
   });
})

}
