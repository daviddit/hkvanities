import { StyledLoading, StyledLoadingHeader } from './styles'
import { useRouter } from 'next/router'
import Link from 'next/link'
//import Shimmer from '../shimmer'

export default function Loading({time}) {

const router = useRouter()

React.useEffect(() => {

router.prefetch('/home');
router.prefetch('/see');

//setTimeout(() => { router.push('/home') }, time)

}, [])

	return ( <StyledLoading> 
			<StyledLoadingHeader><Link href="/home">(HKVANIT1ES)</Link></StyledLoadingHeader>
		</StyledLoading> ) 

}

//<Shimmer/>
