import styled from 'styled-components';

function Button(props) {
    let StyledButton = ButtonDiv;

    if (props.white) {
        StyledButton = WhiteButtonDiv;
    }

    return (
        <StyledButton onClick={props.handleClick}>
            {props.text}
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
    margin: auto;
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
    margin: auto;
`;

export default Button; 