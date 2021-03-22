import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Composer from '../components/composer'
import Plates from '../components/plates'
import { v4 as uuid } from 'uuid'

export default function Create() {
  const [plateSize, setPlateSize] = React.useState('M')
  const [showText, setShowText] = React.useState(false)
  const router = useRouter()

  const handlePlateSize = (size) => {
    setPlateSize(size)
  }

  const handleShowText = () => {
    setShowText(!showText)
  }

   const handlePlates  = (item) => {

   if(!item.value)
   {
     item.type = "plate"
     item.value = item 
   }

      setPlates([
        ...plates,
        {
          id: uuid(),
          ...item.value,
        }
      ])
   }

  let pp = []
  if(router.query.plates)
  {
	const pla = router.query.plates.split(',');
	pla.map((p) => { pp = [...pp, { id: uuid(), type: "plates" , text: p, image: "/static/plates/"+p+".jpg", thumbnail: "/static/plates/thumbnails/"+p+".jpg" }]  })
	//router.query.plates.split(',').map((p) => { pp = [...pp,{ id: uuid(), value: p}]  })
  }
  const [plates, setPlates] = React.useState(pp)

 return (
    <div>
      <Composer showText={showText} size={plateSize} handlePlateSize={handlePlateSize} plates={plates} setPlates={setPlates} handleShowText={handleShowText} handlePlates={handlePlates} />
      <Plates size={plateSize} showText={showText} handlePlates={handlePlates} />
    </div>
)
}
