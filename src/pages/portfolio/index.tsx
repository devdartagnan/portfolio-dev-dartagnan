import React, { useState, useEffect } from "react";
import styles from './Portfolio.module.scss'
import Description from '@/components/ProjectDescription'
import { ImageList, ImageListItem, ImageListImage } from "@rmwc/image-list";

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
  const [filterValue, setFilterValue] = useState('*')
  const tagFilter = data.filter((item) => {
    return item.tag.find(value => value === filterValue ? item : false)
  })
  const [width, setWidth] = useState(window.innerWidth)
  console.log(width)
  return (
    <section className={styles.container}>
      <div className={styles['filter-inputs']}>
        <select name="" id="" onChange={(value) => {
          setFilterValue(value.target.value)
        }}>
          <option value="*">Todos</option>
          <option value="javascript">Javascript</option>
          <option value="typescript">Typescript</option>
          <option value="react">React</option>
        </select>
      </div>
      <div className={styles.portfolio}>
        <Description info={actualObject} />
        <div
          className={styles.gallery}
          id="gallery"
        >
          <ImageList
            masonry
          >
            {tagFilter.map((item) => {
              return (
                <a className={styles['gallery-a']} href={width <= 768 ? `/portfolio/${item.id}`: ''}>
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
                </a>
              )
            })}
          </ImageList>
        </div>
      </div>
    </section >
  )
}
