import React from 'react'
import { BsFillBriefcaseFill, BsFillPersonFill } from 'react-icons/bs'
import { HiLocationMarker, HiSpeakerphone } from 'react-icons/hi'
import PictureProfile from '@/components/Profile'
import { StyledTags, StyledTech, StyledH1, StyledDiv } from './StyledInfoSelection'

export default function InfoSection() {
    return (
        <>
            <StyledH1>Dev <br /> Dartagnan.</StyledH1>
            <PictureProfile />
            <StyledDiv>
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
            </StyledDiv>
        </>
    )
}
