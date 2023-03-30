import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Styles from './Profile.module.scss'

export default function PictureProfile() {
    return (
        <section className={Styles.profile}>
            <Image src="/assets12.jpg" alt="" width={250} height={250} />
            <h2>Hi, and welcome to my portfolio</h2>
        </section>
    )
}
