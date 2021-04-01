import React from 'react'
import Loading from '../components/loading'
import WebMetadata from '../webmetadata'

export default function Welcome() {

	return ( <>
		  <WebMetadata/>
		  <Loading time="2500" />
		</> ) 

}

