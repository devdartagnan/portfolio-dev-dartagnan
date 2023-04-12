import React, { useState } from "react";
import styles from './Portfolio.module.scss'
import { CgDisplayGrid, CgDisplayFullwidth } from 'react-icons/cg'
import Description from '@/components/ProjectDescription'
import { ImageList, ImageListItem, ImageListImage } from "@rmwc/image-list";
import { MdOutlineArrowBackIosNew } from 'react-icons/md'

export interface Data {
  data: [{
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
  }]
}

export async function getServerSideProps() {
  const res = await fetch(`https://devdartagnan.github.io/api/data.json`)
  const data = await res.json()

  return { props: { data } }
}

export default function Portfolio({ data }: Data) {
  const dataInicial = data[0]
  const [actualObject, setActualObject] = useState(dataInicial)

  return (
    <section className={styles.container}>
      <div className={styles['filter-inputs']}>
        <select name="" id="">
          <option value="Todos">Todos</option>
          <option value="Javascript">Javascript</option>
          <option value="Typescript">Typescript</option>
          <option value="Sass">React</option>
        </select>
        <div className={styles.displayIcons}>
          <input type="checkbox" name="" id="" className={styles['displayIcons__checkbox']} />
          <CgDisplayGrid className={styles.displayGrid} onClick={() => { }} />
          <CgDisplayFullwidth className={styles.displayFull} />
        </div>
      </div>
      <div className={styles.portfolio}>
        <Description info={actualObject} />
        <div
          className={styles.gallery}
          id="gallery"
        >
          <div className={styles.arrows}>
            <MdOutlineArrowBackIosNew
              className={styles['arrow-up']}
            />
            <MdOutlineArrowBackIosNew
              className={styles['arrow-down']}
            />
          </div>
          <ImageList
            masonry
          >
            {data.map((item) => {
              return (
                <ImageListItem key={item.id} className={styles['gallery-item']}>
                  <ImageListImage
                    src={item.thumb}
                    alt={item.altImage}
                    className={styles['gallery-content']}
                    onClick={
                      () => { setActualObject(item) }
                    }
                  />
                </ImageListItem>
              )
            })}
          </ImageList>
        </div>
      </div>
    </section>
  )
}
