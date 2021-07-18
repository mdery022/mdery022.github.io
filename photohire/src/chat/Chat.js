import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { profiles } from '../catalog/Catalog';
import styled from 'styled-components';
import { BsChatDots } from 'react-icons/bs';

function Chat() {
    const { id } = useParams();
    const [profile, setProfile] = useState(null);
    const [messages, setMessages] = useState([{id:0, sender:0, content: "As there is no backend, the messages will not be saved upon closing or reloading this window."}]);

    useEffect(() => {
        profiles.forEach(p => {
            if (p.id === id) { 
                setProfile(p);
            } 
        });
    }, [id]);

    const sendChat = () => {
        const text = document.getElementById('text').value;

        if (text) {
            const newMessages = [...messages];
            newMessages.push({id:messages.length,sender:1,content:text});
            setMessages(newMessages);
        }

        document.getElementById('text').value = '';
    };

    const page = document.getElementById('page');

    if (page) {
        page.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                document.getElementById("sendMessageButton")?.click();
            }
        });
    }

    return (
        <Page id="page">
            {profile &&
                <Content>
                    <h2>{profile.name}</h2>
                    <Messages>
                        {messages.map(m => (
                            <Message key={m.id}>
                                <MessageContent sender={m.sender}>{m.content}</MessageContent>
                            </Message>
                        ))}
                    </Messages>
                    <TypingDiv>
                        <TypingInput autoComplete="off" type="text" id="text" />
                        <SendIconDiv id="sendMessageButton" onClick={sendChat}>
                            <SendIcon />
                        </SendIconDiv>
                    </TypingDiv>
                </Content>}
        </Page>
    )
}

const Page = styled.div`
    flex: 1;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const Messages = styled.div`
    flex: 1;
`;

const Message = styled.div`
    clear: both;
`;

const MessageContent = styled.div`
    color: ${props => props.sender === 1 ? 'black' : 'white'};
    background-color: ${props => props.sender === 1 ? '#dbdbdb' : '#212121'};
    max-width: 70%;
    padding: 1em;
    margin: 1em;
    border-radius: 10px;
    float: ${props => props.sender === 1 ? 'right' : 'left'};
`;

const TypingDiv = styled.div`
    background-color: #dbdbdb;
    padding: 0.5em;
    display: flex;
`;

const TypingInput = styled.input`
    font-size: 1.2em;
    padding: 0.25em;
    border: none;
    border-radius: 10px;
    flex: 1;
`;

const SendIcon = styled(BsChatDots)`
    height: 25px;
    width: 25px;
`;

const SendIconDiv = styled.div`
    padding-left: 0.5em;    

    * {
        cursor: pointer!important;
    }
`;

export default Chat;