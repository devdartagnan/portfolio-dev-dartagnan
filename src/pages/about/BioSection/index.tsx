import React from 'react'
import Styles from './BioSection.module.scss'
import { useTranslation } from 'react-i18next'

export default function BioSectionex() {
  const { t } = useTranslation();
  return (
    <section className={Styles.bio}>
      <div className={Styles['biography-section']}>
        <h2> {t("home.about.title")}</h2>
        <p>{t("home.about.about")}</p>
      </div>
      <div className={Styles['biography-section']}>
        <h2>Needs</h2>
        <ul>
          <li>Be ready for holiday family gathering as well as for light dinner during the day.</li>
          <li>Find balance between feeling good about herself, being able to maintain her lifestyle, while contributing with the world</li>
          <li>Wise choices of the brands and respect to environment and sustainability is fundamental for her.</li>
        </ul>
      </div>
    </section>
  )
}
