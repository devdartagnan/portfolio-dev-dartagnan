import React from 'react'
import styles from './ProjectDescription.module.scss'
import Link from 'next/link'

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
  return (
    <aside className={styles['aside-description']}>
      <div className={styles['aside-description__body-info']}>
        <h3 className={styles['aside-description__title']}>{info.titulo}</h3>
        <p className={styles['aside-description__text']}>{info.cardDescription}</p>
        <h4>Tecnologias</h4>
        <p>{info.tag}</p>
      </div>
      <Link href={info.altPage.projectUrl} target='_blank'>
        <button className={styles['aside-description__button']} type='button' >Projeto</button>
      </Link>
    </aside >
  )
}
