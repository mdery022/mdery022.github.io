import { useTranslation } from 'react-i18next';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import styled from 'styled-components';

function Complete() {
    const { t } = useTranslation();

    return (
        <Content>
            <AiOutlineCheckCircle className="big-icon" />
            <p>{t("reservation-complete")}</p>
            <p>{t("see-reservations")}</p>
        </Content>
    );
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 300px;
    margin: 0 auto;
    margin-top: 5em;

    p {
        text-align: center;
        margin: 0.5em 0 0;
    }
`;

export default Complete;