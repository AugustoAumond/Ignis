import styled from 'styled-components'

import Menu from '../../components/menu/Menu';
import Logo from '../../components/logo/Logo';
import Text from '../../components/text/Text';
import Img from '../../components/img/Img';
import Button from '../../components/homepage/button/Button';

function HomePage() {

  return (
    <DivHomePage>
      <Menu/>

      <Logo/>

      <Text/>

      <Img/>

      <Button/>
    </DivHomePage>
  )
}

export default HomePage;

const DivHomePage = styled.div`
width: 375px;
margin: 0 auto;
border: solid 1px white;
height: 812px;
background-image: url('/bg_cinema.jpg');
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
`