import { useRouter } from 'next/router'
import styled from 'styled-components'
import Poems from '../../components/poems'
import Poem from '../../components/poem'
import PublishControls from '../../components/publish-controls'
import {PoemContainer , ButtonsContainer } from '../../components/poems/styles'
import { hostname } from '../../config.js'
//import Control from '../../components/control'
import { ControlsContainer } from '../../components/control/styles'
import { device } from '../../lib/device'


export default function SeeId({ ...props }){
  const [poem, setPoem] = React.useState(props.pageProps.poem)
  const [totalPoems, setTotalPoems] = React.useState(props.pageProps.totalPoems)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  if(!poem) { 
	  const router = useRouter()
	  router.push('/see/')
	  return (<></>) 
  }

  const currentPage = poem.id +'/'+ totalPoems

  const rand = '/see/' + Math.floor(Math.random() * Math.floor(totalPoems))

  const prev = '/see/' + Math.max(parseInt(poem.id) - 1, 0)
  const next = '/see/' +  Math.min(parseInt(poem.id) + 1, totalPoems)

  const prevPrev = '/see/' + Math.max(parseInt(poem.id) - 5, 0)
  const nextNext = '/see/' +  Math.min(parseInt(poem.id) + 5, totalPoems)

  const handleMouseEnter = () => {}
  const handleMouseOut = () => {}

  //const hostname = typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : '';

  const url = hostname + poem.slug;


  return (
  <>
    <PoemContainer>
      {error && (
        <ErrorText>
          {error}
        </ErrorText>
      )}
      { !error && !poem && ( 'Loading...')}
      {( poem && <Poem poem={poem} autoPlay handleMouseEnter={handleMouseEnter} handleMouseOut={handleMouseOut} />)}
    </PoemContainer>
      <ControlsContainer>
        <Control href={prevPrev}>&#8647;</Control>
        <Control href={prev}>&larr;</Control>
        <Control href={rand}>{currentPage}</Control>
        <Control href={next}>&rarr;</Control>
        <Control href={nextNext}>&#8649;</Control>
      </ControlsContainer>
    <ButtonsContainer>
	  { poem && <PublishControls controls="false" autoPlay="true" noSave noBack url={url} text={poem.text} video={poem.video} thumb={poem.thumb} /> }
    </ButtonsContainer>
  </>
  )

}

export const Control = styled.a`
  border: 0;
  border-radius: 1rem;
  width: 15rem;
  height: 5rem;
  font-size: 2rem;
  text-align: center;
  line-height: 1rem;
  text-transform: uppercase;
  letter-spacing: .6px;
  margin: 0 1rem;
  cursor: pointer;
  color: black;
  background: none;

  @media ${device.laptop} {
  font-size: 4rem;
  }

  &:active{
    border: 0;
  }

  &:hover{
    color: hsl(46, 100%, 50%);
  }
`


/*
export async function getStaticPaths() {
import fs from 'fs'

  const fileNames2 = fs.readdirSync("static/poems")
  const fileNames = []

  return {
     paths: fileNames.map(dir => {
                return {
                        params: {
                                id: dir
                        }
                }
        })
    ,
    fallback: false
  }


}
*/


const getMaxPoems = async (id) => {

  const fs = require('fs').promises
  const url = './static/gallery'

  const dir = await fs.readdir(url)

  return parseInt(dir.sort((a,b) => (parseInt(a) > parseInt(b)) ? 1 : ((parseInt(b) > parseInt(a)) ? -1 : 0)).pop())
}


const fetchPoem = async (id) => {

const fs = require('fs').promises
const path = require('path')
const url = './static/gallery'
const outDir = path.join(url,id)

  try {

   const files = await fs.readdir(outDir)

   const poem = files.filter((g) => g.endsWith('.mp4'))
      .map((g) => ({
        id: id, //  /static/gallery/[id]/file.mp4
        //video: `${encodeURIComponent(g)}`,
        slug: '/see/'+id,
        video: '/'+outDir+'/'+g,
        thumb: '/'+outDir+'/'+g.split('.')[0]+".jpg",
        text: path.basename(g,".mp4").split('+').join(' '),
      }))

  return poem[0]

   } catch (e) {
	  return null
   }
}

export async function getServerSideProps({ params }) {
  const poem = await fetchPoem(params.id)
  const totalPoems = await getMaxPoems()

  if(!poem)
  {
	 //return { notFound: true, }
	 return { 
		 redirect: { 
		   destination: '/',
		   permanent: false,
	         },
	 }
  }

  return {
    props: {
      poem, totalPoems
    }
  }
}

/*
export async function getStaticProps({ params }) {
  const poem = await fetchPoem(params.id)

  return {
    props: {
      poem
    }
  }
}
*/



const ErrorText = styled.p`
  color: red;
`

