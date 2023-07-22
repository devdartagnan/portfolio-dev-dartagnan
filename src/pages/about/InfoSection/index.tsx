import React from 'react'
import { FaReact, FaHtml5, FaSass, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiJavascript } from 'react-icons/si'
import styles from './InfoSelection.module.scss'
import classNames from 'classnames'

export default function InfoSection() {
  return (
    <aside>
      <div>
        <h1 className={styles.h1}>Dev <br /> Dartagnan.</h1>
      </div>
      <div className={styles.div_card}>
        <section className={styles.tech}>
          <h2>
            Skills
          </h2>
          <div className={styles.skills}>
            <div className={classNames({
              [styles['skill-item']]: true,
              [styles.hovertext]: true
            })} data-hover="7.5 / 10">
              <FaReact className={styles.item__icon} />
              <div className={styles['skill-item__trackBar']}>
                <span className={classNames({
                  [styles.level]: true,
                  [styles.level__react]: true
                })}></span>
              </div>
            </div>
            <div className={classNames({
              [styles['skill-item']]: true,
              [styles.hovertext]: true
            })} data-hover="8 / 10">
              <FaHtml5 className={styles.item__icon} />
              <div className={styles['skill-item__trackBar']}>
                <span className={classNames({
                  [styles.level]: true,
                  [styles.level__html]: true
                })}></span>
              </div>
            </div>
            <div className={classNames({
              [styles['skill-item']]: true,
              [styles.hovertext]: true
            })} data-hover="7 / 10">
              <FaSass className={styles.item__icon} />
              <div className={styles['skill-item__trackBar']}>
                <span className={classNames({
                  [styles.level]: true,
                  [styles.level__sass]: true
                })}></span>
              </div>
            </div>
            <div className={classNames({
              [styles['skill-item']]: true,
              [styles.hovertext]: true
            })} data-hover="5  / 10">
              <SiTypescript className={styles.item__icon} />
              <div className={styles['skill-item__trackBar']}>
                <span className={classNames({
                  [styles.level]: true,
                  [styles.level__typescript]: true
                })}></span>
              </div>
            </div>
            <div className={classNames({
              [styles['skill-item']]: true,
              [styles.hovertext]: true
            })} data-hover="6 / 10">
              <FaGitAlt className={styles.item__icon} />
              <div className={styles['skill-item__trackBar']}>
                <span className={classNames({
                  [styles.level]: true,
                  [styles.level__git]: true
                })}></span>
              </div>
            </div>
            <div className={classNames({
              [styles['skill-item']]: true,
              [styles.hovertext]: true
            })} data-hover="7.5 / 10">
              <SiJavascript className={styles.item__icon} />
              <div className={styles['skill-item__trackBar']}>
                <span className={classNames({
                  [styles.level]: true,
                  [styles.level__javascript]: true
                })}></span>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.frameworks}>
          <h4>Frameworks / Tools</h4>
          <ul className={styles['frameworks-list']}>
            <li className={styles['frameworks-items']}>Nextjs</li>
            <li className={styles['frameworks-items']}>ViteJs</li>
            <li className={styles['frameworks-items']}>MUI</li>
            <li className={styles['frameworks-items']}>Bootstrap</li>
          </ul>
        </section>
      </div>
    </aside>
  )
}
