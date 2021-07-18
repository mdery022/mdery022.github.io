import styled from 'styled-components';
import Button from '../../common/button/Button';
import { useHistory } from 'react-router-dom';

/* Code from https://www.w3schools.com/howto/howto_css_hero_image.asp */

function HeroImage() {
    const history = useHistory();

    function handleClick() {
        history.push('/catalog');
    }

    return (
        <Hero>
            <HeroText>
                <h1>Photo Hire</h1>
                <br />
                <Button text="Browse Catalog >" handleClick={handleClick} white />
            </HeroText>
        </Hero>
    );
}

const Hero = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://cdn.pixabay.com/photo/2019/11/10/11/13/couple-4615557_960_720.jpg");
    height: 400px;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`;

const HeroText = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
`;
  
export default HeroImage;
  