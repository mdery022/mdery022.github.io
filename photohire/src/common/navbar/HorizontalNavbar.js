import styled from 'styled-components';
import { AiFillCamera } from 'react-icons/ai';
import { GrChat, GrCatalogOption, GrCalendar } from 'react-icons/gr';
import { useHistory } from 'react-router-dom';

function HorizontalNavbar() {
  const history = useHistory();

  const goTo = (route) => () => {
    history.push(route);
  }

  return (
    <Navbar className="HorizontalNavbar">
      <AiFillCamera onClick={goTo('/')} className="medium-icon" />
      <Title onClick={goTo('/')}>Photo Hire</Title>
      <LinkBlock>
        <GrChat onClick={goTo('/chat')} className="medium-icon" />
        <GrCalendar onClick={goTo('/')} className="medium-icon" />
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
`;

export default HorizontalNavbar;
