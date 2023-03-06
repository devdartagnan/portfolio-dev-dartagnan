import React from 'react'
import { BsFillBriefcaseFill, BsFillPersonFill } from 'react-icons/bs'
import { HiLocationMarker, HiSpeakerphone } from 'react-icons/hi'
import PictureProfile from '@/components/Profile'
import styled from 'styled-components'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    subsets: ['latin'],
})

const StyledTags = styled.section`
    display: flex;
    flex-direction: column;
    margin: 65px 0 45px 0;
    .tags-cards{
        display: flex;
        flex-direction: column;
        font-size: 15px;
        font-weight: 400;
        gap: 8px;
        margin-bottom: 28px;
        svg{
            color: ${({ theme }) => theme.colors.text};
            opacity: 0.8;
            font-size: 30px;
        }
        .subtitle{
            color: ${({ theme }) => theme.colors.text};
            opacity: 0.6;
    }
}
`
const StyledTech = styled.section`
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-bottom: 45px;
    h2{
        font-family: ${roboto.style.fontFamily};
    }
    .tech-item{
        display: flex;
        flex-direction: column;
        gap: 2px;

        .tech-item__trackBar{
            background-color: ${({ theme }) => theme.colors.primary};
            border-radius: 5px;
            display: flex;
            height: 7px;
            opacity: 0.8;
            width: 100%;

            span{
                background-color: ${({ theme }) => theme.colors.text};
                border-radius: 5px 0px 0px 5px;
                width: 80%;
            }
            .trackBar__Javascript{
                width: 60%;
            }
            .trackBar__Typescript{
                width: 35%;
            }
            .trackBar__htmlCss{
                width: 80%;
            }
        }
    }
`


export default function InfoSection() {
    return (
        <>
            <h1>Dev <br /> Dartagnan.</h1>
            <PictureProfile />
            <StyledTags>
                <div className='tags-cards'>
                    <BsFillBriefcaseFill />
                    <p className='subtitle'>Role</p>
                    <p>Front-end Developer</p>
                </div>
                <div className='tags-cards'>
                    <HiLocationMarker />
                    <p className='subtitle'>Location</p>
                    <p>Lisbon - Portugal</p>
                </div>
                <div className='tags-cards'>
                    <BsFillPersonFill />
                    <p className='subtitle'>Age</p>
                    <p>31</p>
                </div>
                <div className='tags-cards'>
                    <HiSpeakerphone />
                    <p className='subtitle'>Languages</p>
                    <p>Portuguese / English</p>
                </div>
            </StyledTags>
            <StyledTech>
                <h2>
                    Tech
                </h2>
                <div className='tech-item'>
                    <p className='tech-item__title'>Html/Css</p>
                    <div className='tech-item__trackBar'>
                        <span className='trackBar__htmlCss'>
                        </span>
                    </div>
                </div>
                <div className='tech-item'>
                    <p className='tech-item__title'>Javascript</p>
                    <div className='tech-item__trackBar'>
                        <span className='trackBar__Javascript'>
                        </span>
                    </div>
                </div>
                <div className='tech-item'>
                    <p className='tech-item__title'>Typescript</p>
                    <div className='tech-item__trackBar'>
                        <span className='trackBar__Typescript'>
                        </span>
                    </div>
                </div>
            </StyledTech>
        </>
    )
}
