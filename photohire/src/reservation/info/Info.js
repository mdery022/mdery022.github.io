import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { profiles } from '../../catalog/Catalog'; 
import styled from 'styled-components';
import ReactTooltip from "react-tooltip";
import { GrCircleInformation } from 'react-icons/gr';
import { useTranslation } from "react-i18next";

function Info () {
    const { id } = useParams();
    const [profile, setProfile] = useState(null);
    const { t } = useTranslation();

    useEffect(() => {
        profiles.forEach(p => {
            if (p.id === id) { 
                setProfile(p);
            } 
        });
    }, [id]);

    const calculateTotal = (e) => {
        document.getElementById('total').innerHTML = e.target.value * profile.price;
    }

    return (
        profile &&
            <Form method="get" action="/reservation/complete">
                <ReactTooltip />
                <Title>{t("make-reservation")}</Title>

                <Header>{t("reservation-details")}</Header>
                <Row>
                    <Label>{t("photographer")}: <GrCircleInformation data-tip="The chosen photographer. To change your choice, go back to the catalog." /> </Label>
                    <Input>
                        <p>{profile.name}</p>
                    </Input>
                </Row>
                <Row>
                    <Label>{t("rate")}: <GrCircleInformation data-tip="The price set by the photographer." /> </Label>
                    <Input>
                        <p>{profile.price} $/hour</p>
                    </Input>
                </Row>
                <Row>
                    <Label>{t("date")}: <GrCircleInformation data-tip="Date of the event." /> </Label>
                    <Input>
                        <input type="date" required />
                    </Input>
                </Row>
                <Row>
                    <Label>{t("time")}: <GrCircleInformation data-tip="The time at which the event will start." /> </Label>
                    <Input>
                        <input type="time" required />
                    </Input>
                </Row>
                <Row>
                    <Label>{t("duration")}: <GrCircleInformation data-tip="How long the event will last." /></Label>
                    <Input>
                        <input type="number" onChange={calculateTotal} required />
                    </Input>
                </Row>
                <Row>
                    <Label>{t("total")}: </Label>
                    <Input>
                        <p><span id="total">--</span> $</p>
                    </Input>
                </Row>

                <Header>{t("personal-information")}</Header>
                <Row>
                    <Label>{t("name")}: </Label>
                    <Input>
                        <input type="text" required />
                    </Input>
                </Row>
                <Row>
                    <Label>{t("email")}: </Label>
                    <Input>
                        <input type="email" required />
                    </Input>
                </Row>
                <Row>
                    <Label>{t("phone-number")}: </Label>
                    <Input>
                        <input type="tel" required />
                    </Input>
                </Row>
                <Row>
                    <Submit type="submit" value={t("reserve")} />
                </Row>
            </Form>
    );
}

const Form = styled.form`
    max-width: 1000px;
    width: 80%;
    margin: 0 auto;
`;

const Title = styled.h1`
    text-align: center;
`;

const Header = styled.h2`
    margin: 0.5em 0 0;
`;

const Row = styled.div`
    display: flex;
    padding: 0.5em;
`;

const Label = styled.p`
    margin: 0.2em 0 0;
    width: 30%;
`;

const Input = styled.div`
    * {
        margin: 0.2em 0 0 0.5em;
    }
`;

const Submit = styled.input`
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

export default Info;