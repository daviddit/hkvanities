import Link from 'next/link'
import Button from '../button'
import { FollowButtons, FollowButton } from './styles'

const Follow = props => (
   <FollowButtons>
      <FollowButton href="https://www.instagram.com/hongkongvanities/">Instagram</FollowButton>
      <FollowButton href="https://www.facebook.com/HKVanities/">Facebook</FollowButton>
   </FollowButtons>
)

export default Follow
