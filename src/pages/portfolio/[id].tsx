import React from 'react'
import data from '../../api/data.json'
import Image from 'next/image'
import Link from 'next/link'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { FaReact } from 'react-icons/fa'
import { SiTypescript, SiJavascript } from 'react-icons/si'
import styles from './Ids.module.scss'

interface Props {
  id: string,
  cardDescription: string,
  titulo: string,
  tag: [string],
  thumb: string,
  altImage: string,
  altPage: {
    contentImages: [string],
    projectUrl: string,
    textoDescricao: string
  }
}

const paths = data.map((listOfData) => {
  return { params: { id: `${listOfData.id}` } }
})

export async function getStaticPaths() {
  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  }
}
export async function getStaticProps(context: any) {
  const id = context.params.id
  const pageDetails = data.find((element) => {
    return element.id === id ? true : false
  })

  return {
    props: {
      id: pageDetails?.id,
      cardDescription: pageDetails?.cardDescription,
      titulo: pageDetails?.titulo,
      tag: pageDetails?.tag,
      thumb: pageDetails?.thumb,
      altImage: pageDetails?.altImage,
      altPage: {
        contentImages: pageDetails?.altPage.contentImages,
        projectUrl: pageDetails?.altPage.projectUrl,
        textoDescricao: pageDetails?.altPage.textoDescricao
      }
    }
  }
}
export default function Details(props: Props) {
  return (
    <section className={styles.details}>
      <div className={styles['img-carrousel']} key={props.id}>
        {props.altPage.contentImages.map(img => {
          return (
            <Image
              alt=''
              height={0}
              key={img.indexOf(img)}
              src={img}
              unoptimized
              width={0}
            />
          )
        })}
        <div className={styles.buttons}>
          <RiArrowLeftSLine className={styles['button-top']} />
          <RiArrowRightSLine className={styles['button-bottom']} />
        </div>
      </div>
      <section className={styles["details-container"]}>
        <h2>{props.titulo}</h2>
        <p>Description: {props.altPage.textoDescricao}</p>
        <Link href={props.altPage.projectUrl} className={styles.deploy}>
          Visit the site
        </Link>
      </section>
      <div className={styles.info_tech}>
        <h2>
          Techology
        </h2>
        <div>
          {props.tag.includes('javascript') ? <SiJavascript /> : void (0)}
          {props.tag.includes('typescript') ? <SiTypescript /> : void (0)}
          {props.tag.includes('react') ? <FaReact /> : void (0)}
        </div>
      </div>
    </section>
  )
}

