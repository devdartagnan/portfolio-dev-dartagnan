import React from 'react'
import styles from './Ids.module.scss'
import { useRouter } from 'next/router'
import { IoMdArrowBack } from 'react-icons/io'
import ResponsiveCarousel from "../../components/Carousel";
import Description from '@/components/ProjectDescription'

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
        <section>
          <Description info={project}/>
        </section>
      </section >
    </>
  )
}

