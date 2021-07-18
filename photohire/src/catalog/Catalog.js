import styled from 'styled-components';
import { GrChat, GrCalendar } from 'react-icons/gr';
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

export const profiles = [
    {
        id: "0",
        name: "Name 1",
        category: "Category 1",
        shortDescription: "Short description",
        price: 20,
        portfolio: ["https://cdn.pixabay.com/photo/2014/11/13/17/04/heart-529607_960_720.jpg", "https://cdn.pixabay.com/photo/2016/06/29/04/39/bride-1486004_960_720.jpg", "https://cdn.pixabay.com/photo/2014/09/13/04/59/couple-443600_960_720.jpg", "https://cdn.pixabay.com/photo/2015/03/30/12/35/sunset-698501_960_720.jpg", "https://cdn.pixabay.com/photo/2016/06/29/04/39/wedding-dresses-1486005_960_720.jpg", "https://cdn.pixabay.com/photo/2016/04/26/22/31/bride-1355473_960_720.jpg"],
        profilePicture: "",
        longDescription: "Long Description"
    },
    {
        id: "1",
        name: "Name 2",
        category: "Category 2",
        shortDescription: "Short description",
        price: 20,
        portfolio: [],
        profilePicture: "",
        longDescription: "Long Description"
    },
    {
        id: "2",
        name: "Name 3",
        category: "Category 3",
        shortDescription: "Short description",
        price: 20,
        portfolio: [],
        profilePicture: "",
        longDescription: "Long Description"
    },
    {
        id: "3",
        name: "Name 4",
        category: "Category 4",
        shortDescription: "Short description",
        price: 20,
        portfolio: [""],
        profilePicture: "",
        longDescription: "Long Description"
    },
    {
        id: "4",
        name: "Name 5",
        category: "Category 5",
        shortDescription: "Short description",
        price: 20,
        portfolio: [],
        profilePicture: "",
        longDescription: "Long Description"
    }
];

const categories = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"];

function Catalog() {
    const updateCategories = (category) => () => {
        let newCategories = [...chosenCategories];
        const index = newCategories.indexOf(category);

        if (index > -1) {
            console.log("here " + index);
            newCategories.splice(index, 1);
        } else {
            newCategories.push(category);
        }

        console.log(newCategories);

        setChosenCategories(newCategories);
    }

    const openProfile = (profileId) => () => {
        history.push('/profile/' + profileId);
    }

    const reserve = (profileId) => () => {
        history.push('/reservation/' + profileId);
    }

    const openChat = (profileId) => () => {
        history.push('/chat/' + profileId);
    }

    const [chosenCategories, setChosenCategories] = useState([]);
    const history = useHistory();

    return (
        <Content>
            <Label>Categories: </Label>
            {categories.map(c => (
                <div key={c.replace(" ", "-")}>
                    <input 
                        type="checkbox"
                        id={c.replace(" ", "-")}
                        name={c.replace(" ", "-")}
                        value={c.replace(" ", "-")}
                        onClick={updateCategories(c)} />
                    <label>{c}</label>
                </div>
            ))}

            <br />

            {profiles
                .filter(p => chosenCategories.length <= 0 || chosenCategories.includes(p.category)) 
                .map(p => (
                    <div key={p.id}>
                        <Seperator />
                        <ProfileCard>
                            <DisplayImage image={p.portfolio[0]} />
                            <ProfileInfo>
                                <h3 onClick={openProfile(p.id)}>{p.name}</h3>
                                <p>{p.category}</p>
                                <p>{p.shortDescription}</p>
                            </ProfileInfo>
                            <ProfileActions>
                                <p>{p.price}$/hour</p>
                                <ActionButton onClick={reserve(p.id)}><GrCalendar/> Reserve</ActionButton>
                                <ActionButton onClick={openChat(p.id)}><GrChat/> Chat</ActionButton>
                            </ProfileActions>
                        </ProfileCard>
                    </div>
                ))}
        </Content>
    );
}

function DisplayImage(props) {
    return (
        <DisplayImg {...props} />
    )
};

const Content = styled.div`
    max-width: 1000px;
    width: 80%;
    margin: 0 auto;
`;

const Seperator = styled.div`
    border-top: 1px solid #dbdbdb;
    heigth: 1px;
    width: 100%;
`;

const ProfileCard = styled.div`
    margin: 4em 2em;
    display: flex;
`;

const DisplayImg = styled.div`
    width: 25%;
    max-width: 200px;
    overflow: hidden;
    background-image: url(${props => props.image});

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
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

const Label = styled.p`
    margin: 1em 0 0;
    font-weight: 500;
`;

export default Catalog;