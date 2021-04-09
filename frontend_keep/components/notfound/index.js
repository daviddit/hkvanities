import { StyledNotFound, StyledNotFoundHeader } from './styles'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function NotFound() {

const router = useRouter()

React.useEffect(() => {

router.prefetch('/home');

setTimeout(() => { router.push('/home') }, 1500)

}, [])


	return ( 
  <StyledNotFound>
     <Link href="/"><StyledNotFoundHeader>(404)</StyledNotFoundHeader></Link>
  </StyledNotFound>
		) 

}
