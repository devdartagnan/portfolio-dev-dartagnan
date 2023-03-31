import React from 'react'
import data from '../../api/data.json'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Portfolio.module.scss'

export default function Portfolio() {

  return (
    <section className={styles.container}>
      <select name="" id="">
        <option value="Todos">Todos</option>
        <option value="Javascript">Javascript</option>
        <option value="Typescript">Typescript</option>
        <option value="Sass">React</option>
      </select>
        <div className={styles.portfolio}>
          {data.map((data) => {
            return (
              <figure key={data.id} className={styles.figure}>
                <Link
                  className={styles['figure-link']}
                  href={`/portfolio/${data.id}`}>
                  <Image
                    alt={data.altImage}
                    blurDataURL={'none'}
                    height={0}
                    sizes="100vw"
                    src={data.thumb}
                    unoptimized
                    width={0}
                  />
                </Link>
                <div className={styles.description}>
                  <h3 className={styles['figure-title']}>{data.titulo}</h3>
                  <p className={styles['figure-subtitle']}>{data.cardDescription}</p>
                </div>
              </figure>
            )
          })}
        </div>
    </section>
  )
}
