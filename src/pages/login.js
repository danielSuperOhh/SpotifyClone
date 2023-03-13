import React, { useEffect } from 'react'
import { loginUrl } from '../utils/api/authorize'
import styled from 'styled-components';
import { LinkText } from '../typography';
import { Header2 } from '../typography';
import { Bodytext1 } from '../typography';
import { colors } from '../colors';
import { Button } from '../components';
import img from '../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';


export const Login = () => {

    const navigate = useNavigate()

    const hash = window.location.hash
        .substring(1)
        .split("&")
        .reduce(function (initial, item) {
            if (item) {
                var parts = item.split("=");
                initial[parts[0]] = decodeURIComponent(parts[1]);
            }
            return initial;
        }, {});



    useEffect(() => {
        let _token = hash.access_token;
        if (_token) {
            // Set token
            window.localStorage.setItem("token", _token);
            navigate("/home")
        }
    }, [hash.access_token, navigate])

    return (
        <Container>
            <Infobox>
                <Imagediv>
                    <img src={img} alt="" />
                </Imagediv>

                <H2>Welcome To <span>Bee</span>Music</H2>
                <P>to continue login with your spotify account</P>
            </Infobox>
            <Button
                value={
                    <TextLink href={loginUrl}>Login to Spotify</TextLink>
                } />
        </Container>
    )
}


const Infobox = styled.section`
    text-align: center;
    padding: 20px;
    background-color: ${colors.background};
    /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
    border-radius: 15px;
    margin-bottom: 25px;

    span{
        color: ${colors.logoColor};
    }
`;


const Imagediv = styled.section`
    padding-bottom: 10px;
    background-size: 90px;
`;

const H2 = styled(Header2)`
    color: ${colors.mainBlack};
    width: 100%;
`;

const P = styled(Bodytext1)`
    color: ${colors.linkTexts};
    padding-top: 10px;
`;

const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: ${colors.background};
`;

const TextLink = styled(LinkText)`
    color: ${colors.whiteText};
    text-transform: uppercase;
    letter-spacing: 1px;
`;