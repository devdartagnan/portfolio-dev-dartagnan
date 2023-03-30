import React from 'react'
import { BsFillBriefcaseFill, BsFillPersonFill } from 'react-icons/bs'
import { HiLocationMarker, HiSpeakerphone } from 'react-icons/hi'
import { FaReact, FaHtml5, FaSass, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiJavascript } from 'react-icons/si'
import PictureProfile from '@/components/Profile'
import styles from './InfoSelection.module.scss'
import classNames from 'classnames'

export default function InfoSection() {
    return (
        <>
            <h1 className={styles.h1}>Dev <br /> Dartagnan.</h1>
            <PictureProfile />
            <div className={styles.div_card}>
                <div className={styles.tags}>
                    <div className={styles['tags-cards']}>
                        <BsFillBriefcaseFill className={styles.svg} />
                        <p className={styles.title}>Role</p>
                        <p className={styles.subtitle}>Front-end Developer</p>
                    </div>
                    <div className={styles['tags-cards']}>
                        <HiLocationMarker className={styles.svg} />
                        <p className={styles.title}>Location</p>
                        <p className={styles.subtitle}>Lisbon - Portugal</p>
                    </div>
                    <div className={styles['tags-cards']}>
                        <BsFillPersonFill className={styles.svg} />
                        <p className={styles.title}>Age</p>
                        <p className={styles.subtitle}>31</p>
                    </div>
                    <div className={styles['tags-cards']}>
                        <HiSpeakerphone className={styles.svg} />
                        <p className={styles.title}>Languages</p>
                        <p className={styles.subtitle}>Portuguese / English</p>
                    </div>
                </div>
                <div className={styles.tech}>
                    <h2>
                        Skills
                    </h2>
                    <section className={styles.skills}>
                        <div className={classNames({
                                  [styles['skill-item']]: true,
                                  [styles.hovertext]:true
                                })} data-hover="6 / 10">
                            <FaReact className={styles.item__icon} />
                            <div className={styles['skill-item__trackBar']}>
                                <span className={classNames({
                                  [styles.level]: true,
                                  [styles.level__react]:true
                                })}></span>
                            </div>
                        </div>
                        <div className={classNames({
                                  [styles['skill-item']]: true,
                                  [styles.hovertext]:true
                                })} data-hover="8 / 10">
                            <FaHtml5 className={styles.item__icon} />
                            <div className={styles['skill-item__trackBar']}>
                                <span className={classNames({
                                  [styles.level]: true,
                                  [styles.level__html]:true
                                })}></span>
                            </div>
                        </div>
                        <div className={classNames({
                                  [styles['skill-item']]: true,
                                  [styles.hovertext]:true
                                })} data-hover="7 / 10">
                            <FaSass className={styles.item__icon} />
                            <div className={styles['skill-item__trackBar']}>
                                <span className={classNames({
                                  [styles.level]: true,
                                  [styles.level__sass]:true
                                })}></span>
                            </div>
                        </div>
                        <div className={classNames({
                                  [styles['skill-item']]: true,
                                  [styles.hovertext]:true
                                })} data-hover="3.5  / 10">
                            <SiTypescript className={styles.item__icon} />
                            <div className={styles['skill-item__trackBar']}>
                                <span className={classNames({
                                  [styles.level]: true,
                                  [styles.level__typescript]:true
                                })}></span>
                            </div>
                        </div>
                        <div className={classNames({
                                  [styles['skill-item']]: true,
                                  [styles.hovertext]:true
                                })} data-hover="4 / 10">
                            <FaGitAlt className={styles.item__icon} />
                            <div className={styles['skill-item__trackBar']}>
                                <span className={classNames({
                                  [styles.level]: true,
                                  [styles.level__git]:true
                                })}></span>
                            </div>
                        </div>
                        <div className={classNames({
                                  [styles['skill-item']]: true,
                                  [styles.hovertext]:true
                                })} data-hover="6.5 / 10">
                            <SiJavascript className={styles.item__icon} />
                            <div className={styles['skill-item__trackBar']}>
                                <span className={classNames({
                                  [styles.level]: true,
                                  [styles.level__javascript]:true
                                })}></span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
