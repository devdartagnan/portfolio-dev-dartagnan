import React from 'react'
import styles from './ProjectDescription.module.scss'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { FaReact } from 'react-icons/fa'
import { SiTypescript, SiJavascript } from 'react-icons/si'

interface Props {
  info: {
    id: string,
    data: string,
    cardDescription: string,
    titulo: string,
    tag: [
      string
    ],
    thumb: string,
    altImage: string,
    altPage: {
      contentImages: [
        string
      ],
      projectUrl: string,
      textoDescricao: string
    }
  }
}
export default function Description({ info }: Props) {
  const { i18n, t } = useTranslation();
  return (
    <aside className={styles['aside-description']}>
      <div className={styles['aside-description__body-info']}>
        <h3 className={styles['aside-description__title']}>{info.titulo}</h3>
        <p className={styles['aside-description__text']}>{info.cardDescription}</p>
        <h4 className={styles['aside-description__second-title']}>{t('portfolio.description.technology.title')}</h4>
        <div className={styles['aside-description__tags']}>
          {info.tag.includes('javascript') ? <SiJavascript/> : void (0)}
          {info.tag.includes('typescript') ? <SiTypescript /> : void (0)}
          {info.tag.includes('react') ? <FaReact /> : void (0)}
        </div>
      </div>
      <Link href={info.altPage.projectUrl} target='_blank'>
        <button className={styles['aside-description__button']} type='button' >{t("portfolio.description.button")}</button>
      </Link>
    </aside >
  )
}
