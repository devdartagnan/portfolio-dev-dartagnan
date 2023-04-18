import React, { useContext } from 'react'
import Link from 'next/link'
import { FaReact } from 'react-icons/fa'
import { SiTypescript, SiJavascript } from 'react-icons/si'
import styles from './Ids.module.scss'
import { useRouter } from 'next/router'
import { IoMdArrowBack } from 'react-icons/io'
import ResponsiveCarousel from "../../components/Carousel";

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
  const project: Props = data.find((element: Props) => {
    return element.id === id ? true : false
  })

  return (
    <>
      <IoMdArrowBack className={styles['go-back']} onClick={() => router.push('/portfolio')} />
      <section className={styles.details} >
        <div className={styles['img-carrousel']} key={project.id}>
          <ResponsiveCarousel items={project} />
        </div>
        <section className={styles["details-container"]}>
          <h2>{project.titulo}</h2>
          <p>Description: {project.altPage.textoDescricao}</p>
          <Link href={project.altPage.projectUrl} className={styles.deploy} target='_blank'>
            Visit the site
          </Link>
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
        </section>
      </section >
    </>
  )
}

