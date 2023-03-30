import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Styles from './Profile.module.scss'
import classNames from 'classnames'

interface Props {
  className?: string; // 👈️ marked optional
}

export default function PictureProfile({ className = ''} : Props) {
  return (
    <section className={classNames({
      [Styles.profile]: true,
      [className] : true
        })}>
      <Image src="/assets12.jpg" alt="" width={250} height={250} />
      <h2>Hi, and welcome to my portfolio</h2>
    </section>
  )
}
