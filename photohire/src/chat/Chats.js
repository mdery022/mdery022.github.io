import { useHistory } from "react-router";
import styled from "styled-components";
import Button from "../common/button/Button";

function Chats() {
    const history = useHistory();

    const handleClick = () => {
        history.push('/catalog');
    }

    return (
        <Content>
            <p>Looks like you don't have any messages :(</p>
            <Button text="Find new photographers >" handleClick={handleClick} />
        </Content>
    );
}

const Content = styled.div`
    p {
        text-align: center;
        margin: 5em 0;
    }
`;

export default Chats