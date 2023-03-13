import React, { useEffect } from 'react'
import styled from 'styled-components';
import { colors } from '../colors';
import {
    BsArrowRightShort, BsArrowLeftShort, BsRepeat, BsShuffle,
    BsFillPauseCircleFill, BsFillRewindFill, BsFillFastForwardFill, BsFillPlayCircleFill, BsPauseFill, BsPlayFill, BsDot
} from "react-icons/bs";
import { HiOutlineHeart } from "react-icons/hi";
import { TbVolume, TbVolume2 } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { CgExpand } from "react-icons/cg";
import { GrStatusGood } from "react-icons/gr";
import { Bodytext2, Header2, Bodytext3, Bodytext1, Header3, Header22 } from '../typography';
import { MdKeyboardArrowRight, MdOutlinePlaylistAdd, MdOutlineAddCircleOutline, MdOutlineMenu } from "react-icons/md";
import { Button } from '../components';
import travis from '../assets/img/travis.jpeg';
import jcole from '../assets/img/jcole.png';
import { useState } from 'react';
import LinearProgress from '@mui/joy/LinearProgress';
import { baserUrl } from '../utils/api/authorize';
import axios from 'axios';
// import { MdOutlineClose } from "react-icons/md";


export const Home = ({ toggleNav }) => {


    const [isPlaying, setIsPlaying] = useState(false);

    const [tracks, setTracks] = useState()

    const token = localStorage.getItem("token")

    useEffect(() => {
        const getTracks = async () => {
            try {
                const response = await axios.get(`${baserUrl}/me/tracks`, {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                    },
                });
                setTracks(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        getTracks();
    }, [])

    const minutes = (secs) => {
        const mins = Math.floor((secs / 1000 / 60) % 60)
        const formatedMins = mins < 10 ? `0${mins}` : mins

        const seconds = Math.floor((secs / 1000) % 60)
        const formatedSecs = seconds < 10 ? `0${seconds}` : seconds

        return `${formatedMins}:${formatedSecs}`
    }


    console.log(tracks, "tracks");

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev)
    };

    const [isToggle, setIsAdding] = useState(false);

    const toggleAddMusic = () => {
        setIsAdding((prev) => !prev)
    };

                                            // =======================================================================
                                            // |                                                                     |
                                            // |                                                                     |
                                            // |                                                                     |
                                            // |                            Signed                                   |
                                            // |                          iPlayDaniel                                |
                                            // |                                                                     |
                                            // |                                                                     |
                                            // |                                                                     |
                                            // =======================================================================

    return (
        <HomeContainer>
            <Center>

                <Section1>
                    <Arrows>
                        <MenuIcon onClick={() => toggleNav(true)}>
                            <MdOutlineMenu size="27px" color="#767678" />
                        </MenuIcon>
                        <ArrowIcons>
                            <BsArrowLeftShort size="27px" color="#767678" />
                            <SmallSpace></SmallSpace>
                            <BsArrowRightShort size="27px" color="#767678" />
                        </ArrowIcons>

                    </Arrows>

                    <SearchBar>
                        <CiSearch size="24px" color="#767678" />
                        <SmallSpace></SmallSpace>
                        <SearchBarText>Search</SearchBarText>
                    </SearchBar>
                </Section1>

                {/* =============================== SECTION2 ========================= */}

                <SongWrapper>
                    <Section2>
                        <WhatsHot>What's hot</WhatsHot>
                        <Trending>
                            <TrendingText>Trending</TrendingText>
                            <More>More <MdKeyboardArrowRight /></More>
                        </Trending>
                    </Section2>

                    {/* =============================== SECTION3 ========================= */}

                    <Section3>
                        <SectionBox>
                            <BoxHeaderText>Artist</BoxHeaderText>
                            <BoxHeaderSubtext1>The Cavemen </BoxHeaderSubtext1>
                            <BoxHeaderSubtext2>Beautiful Rain</BoxHeaderSubtext2>

                            <ButtonSection>
                                <TwoButtons>
                                    <Button
                                        value={
                                            <TextLink>PLAY</TextLink>
                                        }
                                    />
                                    <Button
                                        value={
                                            <TextLink>FOLLOW</TextLink>
                                        } />
                                </TwoButtons>
                                <ButtonSectionText>
                                    <ButText>Monthly Listeners</ButText>
                                    <ButNumbers>32,092</ButNumbers>
                                </ButtonSectionText>
                            </ButtonSection>

                        </SectionBox>
                    </Section3>

                    <Section4>
                        <PlaylistHeader>
                            <PlaylistText>Songs</PlaylistText>
                            <ShowAll>Show All</ShowAll>
                        </PlaylistHeader>
                    </Section4>

                    <Section5>
                        <Section5Header>
                            <Class1>
                                <Track>#</Track>
                                <Title>TITLE</Title>
                            </Class1>
                            <Class2>
                                <Singer>ARTIST</Singer>
                            </Class2>
                            <Class3>
                                <Time>TIME</Time>
                                <Albumm>ALBUM</Albumm>
                            </Class3>
                        </Section5Header>

                        {tracks?.items?.map((track, i) =>
                            <Section55Header key={track?.id}>
                                <Class1>
                                    <AshNum>{i + 1}</AshNum>
                                    <SongTitle>{track?.track?.name.split("").slice(0, 15)}{track?.track?.name?.length > 15 ? "..." : ""}</SongTitle>
                                </Class1>
                                <Class2>
                                    <SongSinger>{track?.track?.artists?.map((artist) => `${artist?.name}${track?.track?.artists?.length > 1 ? ", " : ""}`)}</SongSinger>
                                </Class2>
                                <Class3>
                                    <SongTime>{minutes(track?.track?.duration_ms)}</SongTime>
                                    <SongAlbumm>{track?.track?.album?.name.split("").slice(0, 15)}{track?.track?.album?.length > 15 ? "..." : ""}</SongAlbumm>
                                </Class3>
                            </Section55Header>)}
                    </Section5>

                </SongWrapper>

                <Section6>
                    <MusicPlayer>
                        <TopSide>
                            <Like>
                                <Heart>
                                    <HiOutlineHeart size="20px" color="#aaa6b4" />
                                </Heart>
                                <Heart>
                                    <MdOutlinePlaylistAdd size="24px" color="#aaa6b4" />
                                </Heart>
                                <Heart>
                                    <CgExpand color="#aaa6b4" size="20px" />
                                </Heart>
                            </Like>

                            <AlbumArt>
                                <SongArt>
                                    <SongArtPicture></SongArtPicture>
                                    <SongArtText>
                                        <SongArtText1>Apparently</SongArtText1>
                                        <BsDot />
                                        <SongArtText2>J Cole</SongArtText2>
                                    </SongArtText>
                                </SongArt>

                                <PlayUlt>
                                    <button onClick={togglePlayPause}>
                                        {isPlaying ? <BsPauseFill size="30px" color="#221C33"/> : <BsPlayFill size="30px" color="#221C33"/>}
                                    </button>
                                </PlayUlt>
                            </AlbumArt>
                            

                            <Play>
                                <BsRepeat color="#aaa6b4" size="20px"/>
                                <BsFillRewindFill size="20px" color="#221C33"/>
                                <button onClick={togglePlayPause}>
                                    {isPlaying ? <BsFillPauseCircleFill size="30px" color="#221C33"/> : <BsFillPlayCircleFill size="30px" color="#221C33"/>}
                                </button>
                                <BsFillFastForwardFill size="20px" color="#221C33"/>
                                <BsShuffle color="#aaa6b4" size="20px"/>
                            </Play>
                            <Volume>
                                <TbVolume2 size="20px" color="#aaa6b4" />
                                <LinearProgress color="neutral" determinate value={50} thickness={2.5}/>
                                <TbVolume size="20px" color="#aaa6b4" />
                            </Volume>
                        </TopSide>
                        <DownSide>
                            <Timer>1:23</Timer>
                            <LinearProgress color="neutral" determinate value={25} thickness={2} />
                            <Timer>3:23</Timer>
                        </DownSide>
                    </MusicPlayer>
                </Section6>


            </Center>

            <RightSide>
                <Shortcut>
                    <ShortcutText>Shortcuts</ShortcutText>
                </Shortcut>

                <ShortcutButtons>
                    <FirstButton>
                        <Button value={<FirstButtonText>Chill Hits</FirstButtonText>} />
                        <Button value={<FirstButtonText>Hop</FirstButtonText>} />
                    </FirstButton>
                    <FirstButton>
                        <Button value={<FirstButtonText>Accoustic</FirstButtonText>} />
                        <Button value={<FirstButtonText>Indie Pop</FirstButtonText>} />
                    </FirstButton>
                    <FirstButton>
                        <Button value={<FirstButtonText>Piano Blues</FirstButtonText>} />
                        <Button value={<FirstButtonText>Jazz</FirstButtonText>} />
                    </FirstButton>
                </ShortcutButtons>

                <FavArtist>
                    <FavArtistText>Fav Artist</FavArtistText>

                    <FavArtistProfile>
                        <ArtistProfile>
                            <ArtProf>
                                <Prof></Prof>
                                <ArtSong>
                                    <ArtSongText>Taylor Swift</ArtSongText>
                                    <ArtSongTextLittle>196 songs in library</ArtSongTextLittle>
                                </ArtSong>
                            </ArtProf>
                            <ThreeDots>
                                <BsThreeDots />
                            </ThreeDots>
                        </ArtistProfile>
                        <ArtistProfile>
                            <ArtProf>
                                <Prof></Prof>
                                <ArtSong>
                                    <ArtSongText>Kanye West</ArtSongText>
                                    <ArtSongTextLittle>124 songs in library</ArtSongTextLittle>
                                </ArtSong>
                            </ArtProf>
                            <ThreeDots>
                                <BsThreeDots />
                            </ThreeDots>
                        </ArtistProfile>
                        <ArtistProfile>
                            <ArtProf>
                                <Prof></Prof>
                                <ArtSong>
                                    <ArtSongText>Drake</ArtSongText>
                                    <ArtSongTextLittle>50 songs in library</ArtSongTextLittle>
                                </ArtSong>
                            </ArtProf>
                            <ThreeDots>
                                <BsThreeDots />
                            </ThreeDots>
                        </ArtistProfile>
                    </FavArtistProfile>
                </FavArtist>

                <MusicCardCover>
                    <MusicCard>
                        <MusicCardBox>
                            <SecondCard></SecondCard>
                            <CardArtist>
                                <CardName>
                                    <CName>Apparently</CName>
                                    <CTag>J. Cole</CTag>
                                </CardName>
                                <CardIcon>
                                    <button onClick={toggleAddMusic}>
                                        {isToggle ? <GrStatusGood size="20px" /> : <MdOutlineAddCircleOutline size="20px" />}
                                    </button>
                                </CardIcon>
                            </CardArtist>

                        </MusicCardBox>

                    </MusicCard>

                </MusicCardCover>
            </RightSide>
        </HomeContainer>

    )
}

const HomeContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    height: 100vh;
    background-color: ${colors.background};
    position: relative;
    display: flex;
`;

const Center = styled.div`
    width: 75%;
    height: 100vh;
    background-color: ${colors.background};
    position: relative;
    
    @media(max-width: 1200px){
        width: 70%;
    }

    @media(max-width: 1100px){
        width: 100%;
    }

`;

const Section1 = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 20px;

    @media (max-width: 900px){
        padding-right: 22px;
    }
`;

const Arrows = styled.div`
    display: flex;
    padding: 0px 40px 0px 40px;

    @media (max-width: 900px){
        padding-left: 20px;
        padding-right: 15px;
    }

`;

const MenuIcon = styled.div`
    display: none;

    @media (max-width: 700px){
        display: block;
    }

    @media (max-width: 900px){
        svg{
            width: 24px;
            height: 24px;
        }
    }

`;

const ArrowIcons = styled.div`
    display: flex;

    @media (max-width: 700px){
        display: none;
    }
`;

const SmallSpace = styled.div`
    width: 20px;
`;

const SearchBar = styled.div`
    width: 80%;
    background-color: white;
    padding: 12px 0px 12px 22px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    padding-left: 22px;


    @media (max-width: 700px){
        padding: 10px 0px 10px 20px;
    }

    @media (max-width: 540px){
        svg{
            width: 19px;
            height: 19px;
        }
    }

    @media (max-width: 350px){
       width: 90%;
    }


`;

const SearchBarText = styled(Bodytext2)`
    color: ${colors.grayText};
    
    @media (max-width: 540px){
        font-size: .8rem;
    }
`;

// =============================== SECTION2 =========================

const SongWrapper = styled.div`
    width: 100%;
    max-height: calc(100vh - 100px);
    overflow-y: scroll;
    padding-bottom: 100px;

    @media(max-width: 540px){
        padding-bottom: 50px;
    }

    @media(max-width: 440px){
        padding-bottom: 50px;
    }
`;

const Section2 = styled.div`
    width: 100%;
    padding: 5px 0px 15px 30px;
`;

const WhatsHot = styled(Bodytext2)`
    color: ${colors.grayText};
`;

const Trending = styled.div`
    width: 100%;
    padding-top: 5px;
    display: flex;
    padding-right: 20px;
    justify-content: space-between;
`;

const TrendingText = styled(Header2)`
    color: ${colors.mainBlack};
    font-weight: 700;

    @media (max-width: 700px){
        font-size: 1.5625rem;
    }

`;

const More = styled(Bodytext3)`
    color: ${colors.grayText};
    display: flex;
    align-items: center;

    @media (max-width: 700px){
        font-size: 0.8125rem;
    }

`;

// =============================== SECTION3 =========================

const Section3 = styled.div`
    width: 100%;
    height: 210px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 700px){
        height: 190px;
    }
`;

const SectionBox = styled.div`
    width: 93%;
    height: 100%;
    border-radius: 15px;
    background: linear-gradient(to right, rgba(245, 246, 252), rgba(117, 19, 93, 0.73)), url(${travis});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 35px 20px 20px 20px;
    box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18)
`;

const BoxHeaderText = styled(Bodytext2)`
    color: ${colors.grayText};
    padding-bottom: 15px;

    @media (max-width: 700px){
        font-size: 0.8125rem;
    }

`;

const BoxHeaderSubtext1 = styled(Header2)`
    color: ${colors.mainBlack};
    font-weight: 700;

    @media (max-width: 700px){
        font-size: 1.5625rem;
    }

`;

const BoxHeaderSubtext2 = styled(Header2)`
    color: ${colors.mainBlack};
    margin-top: 10px;
    font-weight: 700;

    @media (max-width: 700px){
        font-size: 1.5625rem;
    }

`;

const ButtonSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const TwoButtons = styled.div`
    padding-top: 30px;

    button{
        margin-right: 15px;
        padding: 10px 30px;
        background-color: transparent;
        border: 1.5px solid #14101e;
        &:hover{
            background-color: ${colors.mainBlackHover};
        }

        :hover p{
            color: ${colors.whiteText};
        }
    }

    @media (max-width: 700px){
        padding-top: 10px;

        button{
            padding: 8px 25px;
        }
    }

    @media (max-width: 540px){
        button{
            padding: 6px 19px;
        }
    }


`;

const TextLink = styled(Bodytext2)`
    color: ${colors.mainBlack};
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700px;

    @media(max-width: 540px){
        font-size: .7rem;
    }

    @media(max-width: 380px){
        font-size: .6rem;
    }
`;

const ButtonSectionText = styled.div`
    padding-top: 30px;

    @media (max-width: 700px){
        padding-top: 10px;
    }

    @media(max-width: 380px){
        display: none;
    }

`;

const ButText = styled(Bodytext2)`
    color: ${colors.whiteText};
    letter-spacing: 1px;

    @media (max-width: 540px){
        font-size: .67rem;
    }
`;

const ButNumbers = styled(Bodytext2)`
    color: ${colors.whiteText};
    letter-spacing: 1px;
    margin-top: 2px;
    font-weight: 600;
    text-align: right;

    @media (max-width: 540px){
        font-size: .67rem;
    }
`;

// ============================ SECTION 4============================
const Section4 = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px 0px 15px 30px;
    background-color: ${colors.background};

    @media(max-width: 700px){
        padding-top: 15px;
        padding-bottom: 5px;
    }

`;


const PlaylistHeader = styled.div`
    width: 100%;
    padding-top: 5px;
    display: flex;
    padding-right: 20px;
    justify-content: space-between;

    @media(max-width: 700px){
        padding-top: 2px;
    }
`;

const PlaylistText = styled(Header2)`
    color: ${colors.mainBlack};
    font-weight: 700;

    @media (max-width: 700px){
        font-size: 1.5625rem;
    }

    @media(max-width: 440px){
        font-size: 1.2rem;
    }
`;

const ShowAll = styled(Bodytext3)`
    color: ${colors.grayText};
    display: flex;
    align-items: center;
    font-weight: 600;

    @media (max-width: 700px){
        font-size: 0.8125rem;
    }

    @media(max-width: 440px){
        font-size: .7rem;
    }
`;

/* ================================ SECTION5 ===================== */
const Section5 = styled.div`
    width: 100%;
`;


const Section5Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 30px 15px 30px;
    /* height: 40px; */
    position: sticky;
    top: 0;
    background-color: ${colors.background};

    @media(max-width: 600px){
        padding-left: 20px;
        padding-right: 15px;
    }   
`;

const Section55Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 30px 15px 30px;

    :hover{
        display: flex;
        align-items: center;
        background-color: ${colors.whiteText};
        border-radius: 10px;
        box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.1);
        margin: 0px 15px 0px 15px;
    }

    :hover p{
        font-size: 14px;
    }

    @media(max-width: 600px){
        padding-left: 20px;
        padding-right: 15px;

        :hover p{
            font-size: 0.6rem;
        }
    }
`;

const Class1 = styled.div`
    display: flex;
    width: 25%;
`;

const Class2 = styled.div`
    width: 25%;
`;

const Class3 = styled.div`
    display: flex;
    width: 33%;
`;

const Track = styled(Bodytext1)`
    color: ${colors.grayText};
    padding-right: 25px;

    @media(max-width: 700px){
        font-size: 0.6rem;
    }

    @media (max-width:600px){
        font-size: 0.58rem;
    }

`;

const Title = styled(Bodytext1)`
    color: ${colors.grayText};

    @media (max-width:600px){
        font-size: 0.58rem;
    }
`;

const Singer = styled(Bodytext1)`
    color: ${colors.grayText};

    @media (max-width:600px){
        font-size: 0.58rem;
    }
`;

const Time = styled(Bodytext1)`
    color: ${colors.grayText};

    @media (max-width:600px){
        font-size: 0.58rem;
    }
`;

const Albumm = styled(Bodytext1)`
    color: ${colors.grayText};
    padding-left: 25px;

    @media (max-width:600px){
        font-size: 0.58rem;
    }
`;

const AshNum = styled(Bodytext2)`
    color: ${colors.grayText};
    padding-right: 25px;
    font-weight: bold;
    cursor: pointer;

    @media (max-width:600px){
        font-size: 0.64rem;
    }
`;

const SongTitle = styled(Bodytext2)`
    color: ${colors.grayText};
    font-weight: bold;
    cursor: pointer;

    @media (max-width:600px){
        font-size: 0.64rem;
    }
`;

const SongSinger = styled(Bodytext2)`
    color: ${colors.grayText};
    font-weight: bold;
    cursor: pointer;

    @media (max-width:600px){
        font-size: 0.64rem;
    }
`;

const SongTime = styled(Bodytext2)`
    color: ${colors.grayText};
    font-weight: bold;
    cursor: pointer;

    @media (max-width:600px){
        font-size: 0.64rem;
    }
`;

const SongAlbumm = styled(Bodytext2)`
    color: ${colors.grayText};
    padding-left: 25px;
    font-weight: bold;
    cursor: pointer;

    @media (max-width:600px){
        font-size: 0.64rem;
    }
`;


/* ============================= SECTION6 ===================== */
const Section6 = styled.div`
    width: 100%;
    position: absolute;
    bottom: 10px;
    height: 85px;
    display: flex;
    justify-content: center;

    @media(max-width: 540px){
        height: 70px;
        bottom: 0px;
    }

`;

const MusicPlayer = styled.div`
    width: 95%;
    height: 100%;
    background-color: ${colors.whiteText};
    border-radius: 10px;
    padding-top: 5px;

    @media(max-width: 540px){
        padding-top: 0px;
        width: 100%;
        border-radius: 0;
    }
`;

const TopSide = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;

    @media (max-width: 540px){
        height: 90%;
    }
`;

const AlbumArt = styled.div`
    height: 50%;
    width: 100%;
    display: none;

    @media(max-width: 540px){
        display: flex;
        justify-content: space-between;
    }

`;

const SongArt = styled.div`
    display: flex;
`;

const SongArtPicture = styled.div`
    width: 40px;
    height: 100%;
    background-color: pink;
    border-radius: 5px;
`;

const SongArtText = styled.div`
    display: flex;
    padding-left: 15px;
    padding-top: 5px;
    /* align-items: center; */
`;

const SongArtText1 = styled(Bodytext2)`
    color: ${colors.mainBlack};
    font-weight: bold;

    @media(max-width: 440px){
        font-size: .7rem;
    }
`;

const SongArtText2 = styled(Bodytext2)`
    color: ${colors.mainBlack};

    @media(max-width: 440px){
        font-size: .7rem;
    }

`;


const PlayUlt = styled.div`
    display: none;

    @media(max-width: 540px){
        display: flex;

        button{
            border: none;
            background: none;
        }
    }
`;

const Like = styled.div`
    width: 33%;
    display: flex;

    @media(max-width: 540px){
        width: 45%;
        display: none;
    }
`;

const Heart = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${colors.background};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;

    @media (max-width:600px){
        width: 24px;
        height: 24px;

        svg{
            width: 19px;
            height: 19px;
        }
    }
`;

const Play = styled.div`
    width: 33%;
    display: flex;
    align-items: center;
    margin-left: -20px;

    button{
        border: none;
        background: none;
    }

    svg{
        margin-right: 15px;
    }

    @media (max-width:600px){
        svg{
            width: 25px;
            height: 25px;
        }

        button svg{
            width: 30px;
            height: 30px;
        }
    }

    @media (max-width:540px){
        display: none;
        width: 55%;

        svg{
            width: 14px;
            height: 14px;
        }
    }

`;

const Volume = styled.div`
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 540px){
        width: 20%;
        display: none;

        svg{
            width: 15px;
            height: 15px;
        }
    }
`;

const DownSide = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;

    @media (max-width: 540px){
        padding-left: 22px;
        padding-right: 22px;
    }
`;

const Timer = styled(Bodytext2)`
    color: ${colors.grayText};
    padding-left: 10px;
    padding-right: 10px;

    @media(max-width: 600px){
        font-size: .7rem;
    }

    @media(max-width: 540px){
        display: none;
    }

`;


/* ============================= RIGHT SIDE ============================= */
const RightSide = styled.div`
    width: 25%;
    height: 100vh;
    background-color: ${colors.background};
    position: relative;

    @media(max-width: 1200px){
        width: 30%;
    }

    @media(max-width: 1100px){
        display: none;
    }
`;

const Shortcut = styled.div`
    width: 100%;
    padding: 30px 0px 12px 22px;
    display: flex;
    align-items: center;
    padding-left: 22px;
`;

const ShortcutText = styled(Header22)`
    color: ${colors.mainBlack};
    font-weight: bold;
`;

const ShortcutButtons = styled.div`
    width: 100%;
    height: auto;
    /* background-color: pink; */
`;

const FirstButton = styled.div`
    padding-left: 22px;
    padding-bottom: 15px;
    display: flex;

    button{
        margin-right: 15px;
        padding: 10px 18px;
        background-color: ${colors.whiteText};

        &:hover{
            background-color: ${colors.mainBlackHover};
        }

        :hover p{
            color: ${colors.whiteText};
        }
    }
`;

const FirstButtonText = styled(Bodytext2)`
    color: ${colors.mainBlack};
    font-weight: bold;
`;

const FavArtist = styled.div`
    width: 100%;
    height: 200px;
    /* background-color: palegoldenrod; */
    padding-left: 22px;
    padding-top: 15px;
`;

const FavArtistText = styled(Header3)`
    color: ${colors.mainBlack};
    font-weight: bold;
    padding-bottom: 13px;
`;

const FavArtistProfile = styled.div`
    width: 100%;
`;

const ArtistProfile = styled.div`
    width: 90%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    cursor: pointer;

    :hover{
        box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.1);
    }
`;

const ArtProf = styled.div`
    display: flex;
    align-items: center;
`;

const Prof = styled.div`
    width: 35px;
    height: 35px;
    background-color: red;
    border-radius: 50%;
`;


const ArtSong = styled.div`
    padding-left: 15px;
`;

const ArtSongText = styled(Bodytext2)`
    color: ${colors.mainBlack};
    font-weight: bold;
`;

const ArtSongTextLittle = styled(Bodytext1)`
    color: ${colors.grayText};
`;

const ThreeDots = styled.div`
    cursor: pointer;
`;

const MusicCardCover = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    background-color: ${colors.background};
`;

const MusicCard = styled.div`
    width: 100%;
    padding-left: 22px;
    padding-top: 20px;
    height: auto;
    display: flex;
    align-items: center;
`;

const MusicCardBox = styled.div`
    width: 90%;
    height: auto;
    background-color: ${colors.whiteText};
    border-radius: 10px;
    padding: 15px;
`;

const SecondCard = styled.div`
    width: 100%;
    height: 157px;
    border-radius: 10px;
    background: url(${jcole});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const CardArtist = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 30px 0px 0px 0px;
`;

const CardName = styled.div`

`;

const CName = styled(Bodytext3)`
    color: ${colors.linkText};
    font-weight: bold;
`;

const CTag = styled(Bodytext2)`
    color: ${colors.grayText};
    font-weight: bold;
`;

const CardIcon = styled.div`

    button{
        border: none;
        background: none;
    }
`;