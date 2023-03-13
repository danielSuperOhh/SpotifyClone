import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { colors } from '../colors';
import { Bodytext1, Header3 } from '../typography';
import { Bodytext2 } from '../typography';
import img from '../assets/img/logo.png';
import { BiHomeCircle, BiChart } from "react-icons/bi";
import { RiCompass3Line } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { CgCalendarDates } from "react-icons/cg";
import { TbTicket } from "react-icons/tb";

import { BiLogOutCircle } from "react-icons/bi";

import { HiOutlineHeart, HiOutlineUserGroup, HiOutlineStar } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import axios from 'axios';
import { baserUrl } from '../utils/api/authorize';
import { useState, useEffect } from 'react';


export const Navigation = ({ isNav, toggleNav }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState()

    const token = localStorage.getItem("token")

    useEffect(() => {
        const getProfile = async () => {
            try {
                const response = await axios.get(`${baserUrl}/me`, {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                    },
                });
                setUser(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        getProfile();
    }, [token])

    const logout = () => {
        localStorage.clear()
        navigate("/")
    }


    console.log(user, "user");

    return (
        <NavContainer isNav={isNav}>
            <Space>
                <Nothing>
                </Nothing>
                <CloseIcon onClick={() => toggleNav(false)}>
                    <MdOutlineClose size="21px" color="#767678" />
                </CloseIcon>
            </Space>

            <Navheader>
                <Imagediv>
                    <img style={{ width: 54, height: 30 }} src={img} alt="" />
                </Imagediv>
                <NavheaderText><span>Bee</span>Music</NavheaderText>

            </Navheader>

            <Navlinks>
                <NavLinkContainer onClick={() => navigate("/home")}>
                    <BiHomeCircle size="21px" color="#767678" />
                    <NavLinkText>Home</NavLinkText>
                </NavLinkContainer>
                <NavLinkContainer>
                    <BiChart size="21px" color="#767678" />
                    <NavLinkText>Trends</NavLinkText>
                </NavLinkContainer>
                <NavLinkContainer>
                    <RiCompass3Line size="21px" color="#767678" />
                    <NavLinkText>Feed</NavLinkText>
                </NavLinkContainer>

                <NavText>Discover</NavText>

                <NavLinkContainer>
                    <RxDashboard size="21px" color="#767678" />
                    <NavLinkText>New and Notable</NavLinkText>
                </NavLinkContainer>
                <NavLinkContainer>
                    <CgCalendarDates size="21px" color="#767678" />
                    <NavLinkText>Release Calender</NavLinkText>
                </NavLinkContainer>
                <NavLinkContainer>
                    <TbTicket size="21px" color="#767678" />
                    <NavLinkText>Events</NavLinkText>
                </NavLinkContainer>

                <NavText>Your Collection</NavText>

                <NavLinkContainer>
                    <HiOutlineHeart size="21px" color="#767678" />
                    <NavLinkText>Favourite Songs</NavLinkText>
                </NavLinkContainer>
                <NavLinkContainer >
                    <HiOutlineUserGroup size="21px" color="#767678" />
                    <NavLinkText>Artist</NavLinkText>
                </NavLinkContainer>
                <NavLinkContainer >
                    <HiOutlineStar size="21px" color="#767678" />
                    <NavLinkText>Albums</NavLinkText>
                </NavLinkContainer>
                <NavLinkContainer onClick={logout} >
                    <BiLogOutCircle size="21px" color="#767678" />
                    <NavLinkText>Logout</NavLinkText>
                </NavLinkContainer>

            </Navlinks>

            <Profile>
                <FaUserCircle size="30" color="#221C33" />
                <ProfileText>
                    <ProfText>{user?.display_name}</ProfText>
                </ProfileText>
            </Profile>

        </NavContainer>
    )
}

const NavContainer = styled.section`
    width: 256px;
    height: 100vh;
    background-color: ${colors.sidebar} ;
    position: sticky;
    top: 0;
    flex: 0 0 256px;
    padding-left: 15px;

    @media(max-width: 1000px){
        width: 100px;
        flex: 0 0 100px;
    }


    @media(max-width: 700px){
        position: fixed;
        z-index: 3;
        flex:0;
        overflow: hidden;
        transition: 0.2s ease-in-out;
        padding-left: 0px;
        width: ${({ isNav }) => isNav ? "256px" : "0"};
    }
    
    @media(max-height: 1000px){
        height: 100vh;
    }

`;

const Space = styled.section`
    width: 100%;
    padding: 10px 0px 10px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 50px;
`;

const Nothing = styled.div`
    align-items: center;
    justify-content: center;
`;

const CloseIcon = styled.div`
    display: none;
    align-items: right;

    @media (max-width: 700px){
        display: flex;
        
        svg{
            
            margin-left: 200px;
            width: 30px;
            height: 30px;
        }
    }
`;


const Navheader = styled.section`
    width: 100%;
    display: flex;
    padding-bottom: 10px;
`;

const Imagediv = styled.section`
    margin-left: 0;
    padding-left: 0;

    /* @media(max-width: 1000px){
        img{
            width: 65px;
            height: 65px;
        }
    } */

`;

const NavheaderText = styled(Header3)`
    padding-top: 3px;
    font-weight: 700;

    span{
        color: ${colors.logoColor};
    }

    @media(max-width: 1000px){
        display: none;
    }

    @media(max-width: 700px){
        display: flex;
    }


`;

const Navlinks = styled.div`

    @media (max-width: 700px){
        padding-left: 15px;
        align-items: center;
        justify-content: center;
    }
`;

// const LogoutButton = styled.div`
//     width: 80%;
//     display: flex;
//     align-items: center;
//     margin-top: 3px;
//     height: 40px;
//     padding-left: 21px;
//     bottom: 0;
// `;

const NavLinkContainer = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    margin-top: 3px;
    height: 40px;
    padding-left: 21px;

    :hover{
        width: 80%;
        background-color: ${colors.mainBlack};
        height: 40px;
        border-radius: 7px;
    }

    :hover p{
        color: white;
    }

    :hover svg{
        color: white !important;
    }

    @media (max-width: 700px){
        align-items: center;

        svg{
            width: 19px;
            height: 18px;
        }
    }
`;

const NavLinkText = styled(Bodytext2)`
    color: ${colors.linkTexts};
    margin-top: 2px;
    margin-left: 10px;
    font-weight: 500;
    cursor: pointer;

    @media (max-width: 700px){
        font-size: .8rem;
    }

    @media(max-width: 1000px){
        display: none;
    }

    @media(max-width: 700px){
        display: flex;
    }


`;

const NavText = styled(Bodytext1)`
    color: ${colors.grayText};
    margin-top: 25px;
    margin-left: 21px;

    @media (max-width: 700px){
        margin-top: 15px;
    }

    @media (max-width: 830px){
        visibility: hidden;
        margin-top: 0px;
    }

    @media(max-width: 1000px){
        visibility: hidden;
        margin-top: 14px;
    }

`;

const Profile = styled.div`
    width: 100%;
    padding: 20px 0px 20px 21px;
    position: absolute;
    bottom: 0;
    border-top: 1px solid #e7e6e9;
    display: flex;
    text-align: center;
    align-items: center;

    @media (max-width: 700px){
        padding-left: 30px;
    }
`;

const ProfileText = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-right: 40px;

    @media(max-width: 1000px){
        display: none;
    }

    @media (max-width: 700px){
        display: flex;

        svg{
            display: none;
        }
    }


`;

const ProfText = styled(Bodytext2)`
    color: ${colors.mainBlackHover};
    margin-left: 10px;
    margin-top: 3px;
    font-weight: 600;
`;
