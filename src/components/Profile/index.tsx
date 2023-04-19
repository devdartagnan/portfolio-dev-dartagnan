import React from 'react'
import Image from 'next/image'
import styles from './Profile.module.scss'
import classNames from 'classnames'
import InfoProfile from './InfoProfile'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { BiArrowToRight } from 'react-icons/bi'

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
      <div className={styles.certificates}>
        <h1>{t("home.profile.certificates")}</h1>
        <ul className={styles['certificates-list']}>
          <li>
            <Link href={'https://cursos.alura.com.br/vitrinedev/devdartagnan'} className={styles['list-link']} target='_blank'>Alura<BiArrowToRight /></Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
