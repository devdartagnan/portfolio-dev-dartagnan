import React from 'react'
import styles from './BioSection.module.scss'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { BiArrowToRight } from 'react-icons/bi'

export default function BioSectionex() {
  const { t } = useTranslation();
  return (
    <section className={styles.bio}>
      <div className={styles['biography-section']}>
        <h2> {t("home.about.title")}</h2>
        <p>{t("home.about.about")}</p>
      </div>
      <div className={styles.certificates}>
        <h1>{t("home.profile.certificates")}</h1>

        <ul className={styles['certificates-list']}>
          <li>
            <Link
              href={'https://cursos.alura.com.br/vitrinedev/devdartagnan'}
              className={styles['list-link']}
              target='_blank'>
              Alura
              <BiArrowToRight />
            </Link>
          </li>
        </ul>
      </div>
    </section >
  )
}
