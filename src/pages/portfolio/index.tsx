import React, { useState, useContext } from "react";
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import styles from './Portfolio.module.scss'
import useLastSeen, { updateLastSeen } from '../../functions/lastSeen'
import { ImageList, ImageListItem } from "@rmwc/image-list";
import Description from '@/components/ProjectDescription'

import Data from '../../types'

export const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://portfolio-dev-dartagnan-l3mukstj4-devdartagnan.vercel.app";

export async function getStaticProps() {
  const res = await fetch(`${url}/api/handler`)
  const data = await res.json()

  return {
    props: {
      data,
    },
  };
}

export default function Portfolio({ data }: any) {
  const { t } = useTranslation();
  const lastWidth = parseInt(useLastSeen(updateLastSeen))
  //
  const dataInicial = data?.at(0)
  const [actualObject, setActualObject] = useState<Data>(dataInicial)
  const [actualClass, setActualClass] = useState('gallery-unactive')
  const [filterValue, setFilterValue] = useState('*')
  const tagFilter = data?.filter((item: Data) => {
    return item.tag.find(value => value === filterValue ? item : false)
  })

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
