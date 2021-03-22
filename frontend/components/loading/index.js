import { StyledLoading, StyledLoadingHeader } from './styles'
import { useRouter } from 'next/router'
//import Shimmer from '../shimmer'

export default function Loading({time}) {

const router = useRouter()

React.useEffect(() => {

router.prefetch('/home');
router.prefetch('/see');

setTimeout(() => { router.push('/home') }, time)

}, [])

	return ( <StyledLoading> 
			<StyledLoadingHeader>(HKVANIT1ES)</StyledLoadingHeader>
		</StyledLoading> ) 

}


//<Shimmer/>
