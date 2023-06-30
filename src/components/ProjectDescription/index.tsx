import React from 'react'
import styles from './ProjectDescription.module.scss'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { FaReact } from 'react-icons/fa'
import { SiTypescript, SiJavascript } from 'react-icons/si'
import { DiResponsive } from 'react-icons/di'
import { BiArrowToRight } from 'react-icons/bi'

interface Props {
  info: {
    id: string,
    data: string,
    cardDescription: {
      en: string,
      pt: string
    },
    titulo: {
      en: string,
      pt: string
    },
    tag: [
      string
    ],
    thumb: string,
    altImage: string
    altPage: {
      contentImages: [
        string
      ],
      projectUrl: string,
      repoUrl: string
    }
  }
}

export default function Description({ info }: Props) {
  const { i18n, t } = useTranslation();
  const tag = (tag: string) => { return info.tag.includes(tag) }
  function tags(el: React.ReactNode, check: string) {
    return tag(check) ? (
      <div>
        {el}
        <h1>{check}</h1>
      </div>
    ) : void (0)
  }

  return (
    <aside className={styles['aside-description']}>
      <div className={styles['aside-description__body-info']}>
        <h3 className={styles['aside-description__title']}>
          {i18n.language === 'en' ? info.titulo.en : info.titulo.pt}
        </h3>
        <p className={styles['aside-description__text']}>
          {i18n.language === 'en' ? info.cardDescription.en : info.cardDescription.pt}
        </p>
        <h4 className={styles['aside-description__second-title']}>
          {t('portfolio.description.technology.title')}
        </h4>
        <div className={styles['aside-description__tags']}>
          {tags(<SiJavascript />, 'javascript')}
          {tags(<SiTypescript />, 'typescript')}
          {tags(<FaReact />, 'react')}
          {tags(<DiResponsive />, 'responsive')}
        </div>
      </div>
      <div className={styles['button_div']}>
        <button
          className={styles['aside-description__button']}
          type='button' >
          <Link
            href={info.altPage.projectUrl}
            target='_blank'
            className={styles['aside-description__link']}
          >
            {t("portfolio.description.buttonLink")}
            <BiArrowToRight />
          </Link>
        </button>
        <button
          className={styles['aside-description__button']}
          type='button' >
          <Link
            href={info.altPage.repoUrl}
            target='_blank'
            className={styles['aside-description__link']}
          >
            {t("portfolio.description.buttonRepo")}
            <BiArrowToRight />
          </Link>
        </button>
      </div>
    </aside >
  )
}
