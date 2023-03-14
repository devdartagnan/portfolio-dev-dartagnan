import React from 'react'
import { BsFillBriefcaseFill, BsFillPersonFill } from 'react-icons/bs'
import { HiLocationMarker, HiSpeakerphone } from 'react-icons/hi'
import { FaReact, FaHtml5, FaSass, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiJavascript } from 'react-icons/si'
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
                        <BsFillBriefcaseFill className='svg' />
                        <p className='title'>Role</p>
                        <p className='subtitle'>Front-end Developer</p>
                    </div>
                    <div className='tags-cards'>
                        <HiLocationMarker className='svg' />
                        <p className='title'>Location</p>
                        <p className='subtitle'>Lisbon - Portugal</p>
                    </div>
                    <div className='tags-cards'>
                        <BsFillPersonFill className='svg' />
                        <p className='title'>Age</p>
                        <p className='subtitle'>31</p>
                    </div>
                    <div className='tags-cards'>
                        <HiSpeakerphone className='svg' />
                        <p className='title'>Languages</p>
                        <p className='subtitle'>Portuguese / English</p>
                    </div>
                </StyledTags>
                <StyledTech>
                    <h2>
                        Skills
                    </h2>
                    <section className='skills'>
                        <div className='skill-item hovertext' data-hover="6 / 10">
                            <FaReact className='item__icon' />
                            <div className='skill-item__trackBar'>
                                <span className='level level__react'></span>
                            </div>
                        </div>
                        <div className='skill-item hovertext' data-hover="8 / 10">
                            <FaHtml5 className='item__icon' />
                            <div className='skill-item__trackBar'>
                                <span className='level level__html '></span>
                            </div>
                        </div>
                        <div className='skill-item hovertext' data-hover="7 / 10">
                            <FaSass className='item__icon' />
                            <div className='skill-item__trackBar'>
                                <span className='level level__sass' ></span>
                            </div>
                        </div>
                        <div className='skill-item hovertext' data-hover="3.5  / 10">
                            <SiTypescript className='item__icon' />
                            <div className='skill-item__trackBar'>
                                <span className='level level__typescript'></span>
                            </div>
                        </div>
                        <div className='skill-item hovertext' data-hover="4 / 10">
                            <FaGitAlt className='item__icon' />
                            <div className='skill-item__trackBar'>
                                <span className='level level__git'></span>
                            </div>
                        </div>
                        <div className='skill-item hovertext' data-hover="6.5 / 10">
                            <SiJavascript className='item__icon' />
                            <div className='skill-item__trackBar'>
                                <span className='level level__javascript'></span>
                            </div>
                        </div>
                    </section>
                </StyledTech>
            </StyledDiv>
        </>
    )
}
