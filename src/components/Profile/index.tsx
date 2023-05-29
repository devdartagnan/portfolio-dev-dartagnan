import React from 'react'
import Image from 'next/image'
import styles from './Profile.module.scss'
import classNames from 'classnames'
import InfoProfile from './InfoProfile'
import { useTranslation } from 'react-i18next'


interface Props {
  className?: string; // 👈️ marked optional
}

export default function PictureProfile({ className = '' }: Props) {
  const { t } = useTranslation();
  return (
    <section className={classNames({
      [styles.profile]: true,
      [className]: true
    })}>
      <Image src="/assets12.jpg" alt="" width={250} height={250} />
      <h2>{t("home.profile.title")}</h2>
      <InfoProfile />
    </section>
  )
}
