import React from 'react'
import { Data } from './index'
import Image from 'next/image'
import Link from 'next/link'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { FaReact } from 'react-icons/fa'
import { SiTypescript, SiJavascript } from 'react-icons/si'
import styles from './Ids.module.scss'
import { useRouter } from 'next/router'



interface Props {
  id: string,
  data: string,
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

export async function getServerSideProps() {
  const res = await fetch(`https://devdartagnan.github.io/api/data.json`)
  const data = await res.json()


  return { props: { data } }
}

export default function Details({ data }: any) {
  const router = useRouter()
  const id = router.query.id
  const project = data.find((element: Props) => {
    return element.id === id ? true : false
  })

  return (
    <section className={styles.details} >
      <div className={styles['img-carrousel']} key={project.id}>
        {project.altPage.contentImages.map((img: string) => {
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
        <h2>{project.titulo}</h2>
        <p>Description: {project.altPage.textoDescricao}</p>
        <Link href={project.altPage.projectUrl} className={styles.deploy}>
          Visit the site
        </Link>
      </section>
      <div className={styles.info_tech}>
        <h2>
          Techology
        </h2>
        <div>
          {project.tag.includes('javascript') ? <SiJavascript /> : void (0)}
          {project.tag.includes('typescript') ? <SiTypescript /> : void (0)}
          {project.tag.includes('react') ? <FaReact /> : void (0)}
        </div>
      </div>
    </section >
  )
}

