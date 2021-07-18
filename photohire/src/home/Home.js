import HeroImage from './HeroImage/HeroImage';
import styled from 'styled-components';
import Button from '../common/button/Button';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
    const history = useHistory();
    const { t } = useTranslation();

    function handleClick() {
        history.push('/catalog');
    }

    return (
        <div>
            <HeroImage />
            <Content>
                <Row>
                    <p>{t("find-best")}</p>
                    <img src="https://cdn.pixabay.com/photo/2016/02/19/11/37/lens-1209823_960_720.jpg" alt="" />
                </Row>
                <Row>
                    <img src="https://cdn.pixabay.com/photo/2015/05/31/13/04/magazine-791653_960_720.jpg" alt="" />
                    <p>{t("huge-catalog")}</p>
                </Row>
                <Row>
                    <p>{t("easily-chat")}</p>
                    <img src="https://cdn.pixabay.com/photo/2015/06/08/15/14/cell-phone-801946_960_720.jpg" alt="" />
                </Row>
                <Row>
                    <Button text="browse-catalog" handleClick={handleClick}/>
                </Row>
            </Content>
        </div>
    );
}

const Content = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 2em;
`;

const Row = styled.div`
    display: flex;
    padding: 2em 0;
    width: 100%;
    align-items: center;
    justify-content: center;

    p {
        flex: 1;
        text-align: center;
        font-size: 1.2em;
        padding: 0 2em;
    }

    img {
        width: 45%;
    }
`;

export default Home;
  