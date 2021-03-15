import React from 'react'
import Link from 'next/link'

import Composer from '../components/composer'
import Plates from '../components/plates'

export default function Create() {
  const [plateSize, setPlateSize] = React.useState('M')
  const [showText, setShowText] = React.useState(false)

  const handlePlateSize = (size) => {
    setPlateSize(size)
  }

  const handleShowText= () => {
    setShowText(!showText)
  }

 return (
    <div>
      <Composer showText={showText} size={plateSize} handlePlateSize={handlePlateSize}  handleShowText={handleShowText} />
      <Plates size={plateSize} showText={showText} />
    </div>
)
}
