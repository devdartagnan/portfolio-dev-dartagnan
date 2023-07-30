import React from 'react'
import styles from './Dashboard.module.scss'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import { url } from 'pages/portfolio';

export default function Dashboard() {
  const [details, setDetails] = React.useState({
    id: '',
    data: '',
    cardDescription: {},
    titulo: {},
    tag: [],
    thumb: '',
    altImage: '',
    altPage: {}
  })

  const saveData = async (e: any) => {
    e.preventDefault()
    details.id = uuidv4().toString()
    details.data = new Date().toString()

    await axios.post(`${url}/api/handler`, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      data: JSON.stringify(details)
    })
      .then((response) => {
        return response
      }
      )
      .catch(function (error) {
        console.error(error);
      });
  }

  function handleEvent(e: any) {
    const name = e.target.name;
    const value = e.target.value;
    const alt = e.target.alt
    if (alt === 'altPage') {
      name === 'contentImages' ?
        setDetails((prev: any) => {
          return {
            ...prev, altPage: {
              ...prev.altPage,
              [name]: value.split(', ')
            }
          }
        })
        : setDetails((prev: any) => {
          return {
            ...prev, altPage: {
              ...prev.altPage,
              [name]: value
            }
          }
        })
    }
    else if (alt === 'cardDescription') {
      setDetails((prev: any) => {
        return {
          ...prev, cardDescription: {
            ...prev.cardDescription,
            [name]: value
          }
        }
      })
    }
    else if (alt === 'titulo') {
      setDetails((prev: any) => {
        return {
          ...prev, titulo: {
            ...prev.titulo,
            [name]: value
          }
        }
      })
    }
    else {
      name === 'tag' ?
        setDetails((prev: any) => {
          return { ...prev, [name]: value.split(', ') }
        })
        : setDetails((prev: any) => {
          return { ...prev, [name]: value }
        })
    }
  }

  return (
    <form className={styles.dashboard} onSubmit={saveData}>
      <div className={styles['input-group']}>
        <div className={`${styles.group} ${styles['single-group']}`}>
          <h5>Single input group</h5>
          <label htmlFor="tag">Tags (separated by a comma ', ')
            <input required aria-label='tag' name='tag' type="text" onChange={handleEvent} placeholder='e.g. responsive, javascript' />
          </label>
          <label htmlFor="altImage">Alt Image
            <input required aria-label='altImage' name='altImage' type="text" onChange={handleEvent} placeholder='Alternative name' />
          </label>
          <label htmlFor="thumb">Thumb (/images/*.webp)
            <input required aria-label='thumb' name='thumb' type="text" onChange={handleEvent} placeholder='Thumb url' />
          </label>
        </div>

        <div className={`${styles['altPage-group']} ${styles.group}`}>
          <h5>Alt page</h5>
          <label htmlFor="contentImages">Content Images (separated by a comma ', ')
            <input alt='altPage' required aria-label='contentImages' name='contentImages' type="text" onChange={handleEvent} placeholder='Multiples Urls for content' />
          </label>
          <label htmlFor="repoUrl">Repo Url
            <input alt='altPage' required aria-label='repoUrl' name='repoUrl' type="text" onChange={handleEvent} placeholder='Repository Url' />
          </label>
          <label htmlFor="projectUrl">Projec tUrl
            <input alt='altPage' required aria-label='projectUrl' name='projectUrl' type="text" onChange={handleEvent} placeholder='Page of project Url' />
          </label>
        </div>

        <div className={` ${styles.group} ${styles['cardDescription-group']}`}>
          <h5>Card description</h5>
          <label htmlFor="en">en
            <input alt='cardDescription' required aria-label='en' name='en' type="text" onChange={handleEvent} />
          </label>
          <label htmlFor="pt">pt
            <input alt='cardDescription' required aria-label='pt' name='pt' type="text" onChange={handleEvent} />
          </label>
        </div>

        <div className={`${styles.group} ${styles['title-group']}`}>
          <h5>Title</h5>
          <label htmlFor="repoUrl">en
            <input alt='titulo' required aria-label='en' name='en' type="text" onChange={handleEvent} />
          </label>
          <label htmlFor="name">pt
            <input alt='titulo' required aria-label='pt' name='pt' type="text" onChange={handleEvent} />
          </label>
        </div>
      </div>
      <button type='submit'>Submit</button>
    </form >
  )
}
