/* eslint-disable react/prop-types */
import { Title, BodyText } from '../typography'
import { Anchor, AnchorButton } from '../buttons'

function LoggedView ({ user, handleLogOut }) {
  if (user === null) return false
  return (
    <>
      <Title>Hola <strong>{user?.displayName}</strong>!</Title>
      <BodyText marginTop="1em">At <strong>Honeywell</strong>, we solve some of the most difficult challenges businesses face. Explore some of our most popular products.</BodyText>
      <BodyText marginTop="1em" marginBottom="2em">If you want to know more about us and our products, please visit us.</BodyText>
      <AnchorButton color="primary" marginBottom="1em" href='https://www.honeywell.com/' target='_blank'>Our website</AnchorButton>
      <Anchor fontSize=".8em" onClick={handleLogOut}>Log out</Anchor>
    </>
  )
}

export default LoggedView
