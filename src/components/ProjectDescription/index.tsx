import React from 'react'
import styles from './ProjectDescription.module.scss'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { FaReact } from 'react-icons/fa'
import { SiTypescript, SiJavascript } from 'react-icons/si'
import { DiResponsive } from 'react-icons/di'

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
  const { t } = useTranslation();
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
        <h3 className={styles['aside-description__title']}>{info.titulo}</h3>
        <p className={styles['aside-description__text']}>{info.cardDescription}</p>
        <h4 className={styles['aside-description__second-title']}>{t('portfolio.description.technology.title')}</h4>
        <div className={styles['aside-description__tags']}>
          {tags(<SiJavascript />, 'javascript')}
          {tags(<SiTypescript />, 'typescript')}
          {tags(<FaReact />, 'react')}
          {tags(<DiResponsive />, 'responsive')}
        </div>
      </div>
      <button
        className={styles['aside-description__button']}
        type='button' >
        <Link
          href={info.altPage.projectUrl}
          target='_blank'
          className={styles['aside-description__link']}
        >
          {t("portfolio.description.button")}
        </Link>
      </button>
    </aside >
  )
}
