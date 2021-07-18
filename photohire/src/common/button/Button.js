import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

function Button(props) {
    const { t } = useTranslation();
    let StyledButton = ButtonDiv;

    if (props.white) {
        StyledButton = WhiteButtonDiv;
    }

    return (
        <StyledButton onClick={props.handleClick}>
            {t(props.text)}
        </StyledButton>
    )
}

const WhiteButtonDiv = styled.div`
    cursor: pointer;
    color: white;
    border: 2px solid white;
    padding: 0.75em;
    border-radius: 10px;
    font-weight: 700;
    width: fit-content;
    margin: 0 auto;
`;

const ButtonDiv = styled.div`
    cursor: pointer;
    background-color: white;
    color: black;
    border: 2px solid black;
    padding: 0.75em;
    border-radius: 10px;
    font-weight: 600;
    width: fit-content;
    margin: 0 auto;
`;

export default Button; 