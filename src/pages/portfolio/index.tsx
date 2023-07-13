import React, { useState, useEffect, useRef } from "react";
import styles from './Portfolio.module.scss'
import Description from '@/components/ProjectDescription'
import { ImageList, ImageListItem } from "@rmwc/image-list";
import { useTranslation } from 'react-i18next'
import Image from 'next/image'

export interface Data {
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
  altImage: string,
  altPage: {
    contentImages: [
      string
    ],
    projectUrl: string,
    repoUrl: string
  }
}

function updateLastSeen() {
  const lastWidth: string = window.innerWidth.toString()
  return lastWidth;
}

function useLastSeen(prop: any) {
  const [lastSeen, setLastSeen] = useState('');
  const retrieved = useRef(false); //To get around strict mode running the hook twice
  useEffect(() => {
    if (retrieved.current) return;
    retrieved.current = true;
    setLastSeen(prop());
  }, []);

  return lastSeen;
}

export default function Portfolio() {
  const data = require('../../api/data.json')
  const dataInicial = data[0]
  const [actualObject, setActualObject] = useState(dataInicial)
  const [actualClass, setActualClass] = useState('gallery-unactive')
  const [filterValue, setFilterValue] = useState('*')
  const tagFilter = data.filter((item: Data) => {
    return item.tag.find(value => value === filterValue ? item : false)
  })

  const { t } = useTranslation();
  const lastWidth = parseInt(useLastSeen(updateLastSeen))
  return (
    <section className={styles.container}>
      <div className={styles['filter-inputs']}>
        <select aria-label="Tecnology" onChange={(value) => {
          setFilterValue(value.target.value)
        }}>
          <option value="*">{t("portfolio.filter")}</option>
          <option value="javascript">Javascript</option>
          <option value="typescript">Typescript</option>
          <option value="react">React</option>
        </select>
      </div>
      <div className={styles.portfolio}>
        {lastWidth >= 1024 ? <Description info={actualObject} /> : void (0)}
        <div
          className={styles.gallery}
          id="gallery"
        >
          <ImageList
            masonry
          >
            {tagFilter.map((item: Data) => {
              return (
                <ImageListItem key={item.id} className={styles['gallery-item']}>
                  <Image
                    priority
                    height={250}
                    width={350}
                    src={item.thumb}
                    alt={item.altImage}
                    className={styles['gallery-content']}
                    onClick={
                      () => {
                        setActualObject(item)
                        lastWidth <= 1024 ? setActualClass('gallery-active') : void (0)
                      }
                    }
                  />
                  {actualObject.id === item.id ? <figcaption
                    className={styles[`${actualClass}`]}
                    onClick={
                      () => {
                        setActualClass('gallery-unactive')
                      }
                    }
                  >
                    <Description info={actualObject} />
                  </figcaption>
                    : void (0)}
                </ImageListItem>
              )
            })}
          </ImageList>
        </div>
      </div>
    </section >
  )
}
