import Link from 'next/link'
import Button from '../button'
import { FollowButtons, FollowButton } from './styles'
//import Buttons from '../buttons'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const Follow = props => (
   <FollowButtons>
      <FollowButton href="https://www.instagram.com/hongkongvanities/"><InstagramIcon/> Instagram</FollowButton>
      <FollowButton href="https://www.facebook.com/"><FacebookIcon/> Facebook</FollowButton>
   </FollowButtons>
)

export default Follow
