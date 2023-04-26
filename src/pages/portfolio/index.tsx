import React, { useState, useEffect, useRef } from "react";
import styles from './Portfolio.module.scss'
import Description from '@/components/ProjectDescription'
import { ImageList, ImageListItem, ImageListImage } from "@rmwc/image-list";
import { useTranslation } from 'react-i18next'
import Link from "next/link";
import Image from 'next/image'

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

  const { t } = useTranslation();
  const lastWidth = parseInt(useLastSeen(updateLastSeen))
  return (
    <section className={styles.container}>
      <div className={styles['filter-inputs']}>
        <select name="" id="" onChange={(value) => {
          setFilterValue(value.target.value)
        }}>
          <option value="*">{t("portfolio.filter")}</option>
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
              return /*lastWidth <= 768 ? */(
              //   <ImageListItem key={item.id} className={styles['gallery-item']}>
              //     <Link className={styles['gallery-a']} href={`/portfolio/${item.id}`}>
              //       <Image
              //         priority={true}
              //         width={100}
              //         height={100}
              //         src={item.thumb}
              //         alt={item.altImage}
              //         className={styles['gallery-content']}
              //         onClick={
              //           () => { setActualObject(item) }
              //         }
              //       />
              //     </Link>
              //   </ImageListItem>
              // ) : (
                <ImageListItem key={item.id} className={styles['gallery-item']}>
                  <Image
                    priority={true}
                    width={100}
                    height={100}
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
    </section >
  )
}
