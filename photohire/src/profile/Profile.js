import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { profiles } from '../catalog/Catalog';
import styled from 'styled-components';
import { GrChat, GrCalendar } from 'react-icons/gr';

function Profile() {
    const { id } = useParams();
    const [profile, setProfile] = useState(null);
    const history = useHistory();

    useEffect(() => {
        profiles.forEach(p => {
            if (p.id === id) { 
                setProfile(p);
            } 
        });
    }, [id]);

    const reserve = (profileId) => () => {
        history.push('/reservation/' + profileId);
    }

    const openChat = (profileId) => () => {
        history.push('/chat/' + profileId);
    }

    return (
        profile &&
            <Content>
                <ProfileIntro>
                    <ProfilePicture src={profile.profilePicture} alt="" />
                    <ProfileInfo>
                        <h2>{profile.name}</h2>
                        <p>{profile.category}</p>
                    </ProfileInfo>
                    <ProfileActions>
                        <p>{profile.price}$/hour</p>
                        <ActionButton onClick={reserve(profile.id)}><GrCalendar/> Reserve</ActionButton>
                        <ActionButton onClick={openChat(profile.id)}><GrChat/> Chat</ActionButton>
                    </ProfileActions>
                </ProfileIntro>
                <p>{profile.longDescription}</p>
                <div>
                    {profile.portfolio.map(p => (
                        <GalleryItem key={p}>
                            <a rel="noreferrer" target="_blank" href={p}>
                                <img src={p} alt="" />
                            </a>
                        </GalleryItem>
                    ))}
                </div>
            </Content>
    )
}

const Content = styled.div`
    max-width: 1000px;
    width: 80%;
    margin: auto;
`;

const ProfilePicture = styled.img`
    width: 100px;
    height: 100px;
    border: 1px solid black;
    border-radius: 50%;
    overflow: hidden;
`;

const ProfileIntro = styled.div`
    display: flex;
`;

const ProfileInfo = styled.div`
    flex: 1;
    padding-left: 1em;

    h3 {
        margin: 0;
        cursor: pointer;
        text-decoration: underline;
    }

    p {
        margin-top: 0;
    }
`;

const ProfileActions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    p {
        margin: 0;
    }
`;

const ActionButton = styled.div`
    border: 1px solid #969696;
    color: #363636;
    padding: 0.25em 0.5em;
    margin-top: 0.25em;
    border-radius: 10px;
    cursor: pointer;
`;

const GalleryItem = styled.div`
    margin: 5px;
    border: 1px solid #ccc;
    float: left;
    width: 300px;
    max-width: 100%;

    .:hover {
        border: 1px solid #777;
    }

    img {
        width: 100%;
        height: auto;
    }
`;

export default Profile;