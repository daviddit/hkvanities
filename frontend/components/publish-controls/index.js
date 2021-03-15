import React, { Component } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Share from '../share'
import axios from 'axios'
import fileDownload from 'js-file-download'

import { StyledControls, StyledControl } from './styles'

const PublishControls = ({url, text , video , thumb, noShare, noSave, noBack}) => {

  const router = useRouter()
  //const plates = (router.query.plates || '').split(',')

  const handleDownload = (url,filename) => {
	   axios.get(url, {
	    responseType: 'blob',
	  })
	  .then((res) => {
	    fileDownload(res.data, filename)
	  })
  }

  //const handleBack = () => { router.back() }
  const handleBack= () => {

	  if(router.query.plates)
	  {
		  router.push({
			  pathname: '/create',
			  //query: { plates: plates.map((p) => p.text).join(',') },
			  query: { plates: router.query.plates },
		  })
	  }
	  else
	  {
		  router.back()
	  }
  }



 const savePoem = async (poem) => {
  const res = await fetch('/api/save', {
    method: 'POST',
    body: JSON.stringify({ poem }),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const body = await res.json()

  if (!res.ok) {
    throw new Error('Failed to save poem')
  }

  body.slug && router.push(body.slug)

  return body
}



  const handleSave = () => {

	savePoem({video,thumb})

  }

//	console.log("noShare",noShare)


   if(router.query.plates) // just generated, have to save it first before sharing
   {
	   noSave = false;
	   noBack = false;
	   noShare = true;
   }

//	console.log("noShare",noShare)


return (
  <StyledControls>
    { video && <StyledControl onClick={() => {handleDownload(video, video.split('/').reverse()[0])}} >Download</StyledControl> }
    { noShare ? '' : '' }
    { noSave  ? (<Share text={text} url={url} thumb={thumb} />) : (<StyledControl button onClick={handleSave}>Save</StyledControl>) }
    { noBack  ? '' : (<StyledControl button onClick={handleBack}>Back</StyledControl>) }
  </StyledControls>
)
}

PublishControls.defaultProps = {
    noSave: true,
    noBack: true,
    noShare: false,
}

export default PublishControls
