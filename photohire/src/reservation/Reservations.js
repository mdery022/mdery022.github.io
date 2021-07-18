import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import styled from "styled-components";
import Button from "../common/button/Button";

function Chats() {
    const history = useHistory();
    const { t } = useTranslation();

    const handleClick = () => {
        history.push('/catalog');
    }

    return (
        <Content>
            <h1>{t("reservations")}</h1>
            <p>{t("no-reservations")}</p>
            <Button text="browse-catalog" handleClick={handleClick} />
        </Content>
    );
}

const Content = styled.div`
    p {
        text-align: center;
    }
`;

export default Chats