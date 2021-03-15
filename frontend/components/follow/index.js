import Link from 'next/link'
import Button from '../components/button'
import Buttons from '../components/buttons'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const Follow = props => (
   <div style={{display: 'flex', justifyContent: 'center', border: '1px solid red' , margin: '0 auto'}} >
      <Button text="Instagram" href="https://www.instagram.com/hongkongvanities/"/>
      <Button text="Facebook" href="https://www.facebook.com/"  />
   </div>
)

export default Follow
