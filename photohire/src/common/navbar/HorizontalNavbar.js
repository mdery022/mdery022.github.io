import styled from 'styled-components';
import { AiFillCamera } from 'react-icons/ai';
import { GrChat, GrCatalogOption, GrCalendar } from 'react-icons/gr';
import { useHistory } from 'react-router-dom';
import { BiHelpCircle } from 'react-icons/bi';
import i18n from '../../i18n';

function HorizontalNavbar() {
  const history = useHistory();

  const goTo = (route) => () => {
    history.push(route);
  }

  const changeLanguage = (lng) => () => {
    i18n.changeLanguage(lng);
  }

  return (
    <Navbar className="HorizontalNavbar">
      <AiFillCamera onClick={goTo('/')} className="medium-icon" />
      <Title onClick={goTo('/')}>Photo Hire</Title>
      <LinkBlock>
        <p onClick={changeLanguage('en')}>En</p>
        <p onClick={changeLanguage('fr')}>Fr</p>
        <BiHelpCircle onClick={goTo('/chat/' + 0)} className="medium-icon" />
        <GrChat onClick={goTo('/chat')} className="medium-icon" />
        <GrCalendar onClick={goTo('/reservations')} className="medium-icon" />
        <GrCatalogOption onClick={goTo('/catalog')} className="medium-icon" />
      </LinkBlock>
    </Navbar>
  );
}

const Navbar = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0.5em;
`;

const Title = styled.p`
  font-size: 25px;
  cursor: pointer;
`;

const LinkBlock = styled.div`
  flex: 1;
  text-align: right;

  * {
    margin-left: 10px;
    cursor: pointer;
  }

  p {
    margin: 0;
    margin-left: 10px;
    display: inline-block;
  }
`;

export default HorizontalNavbar;
