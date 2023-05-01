import React, { useState } from 'react'
import styles from './Contact.module.scss'
import { useTranslation } from 'react-i18next'
import emsiljs from '@emailjs/browser'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [labelClass, setlabelClass] = useState('')

  const sendEmail = (e: any) => {
    e.preventDefault()
    if (isValidEmail(e.target.email.value)) {
      emsiljs.sendForm('service_k4o7at4', 'template_0z7nnaw', e.target, '35r3-OdbxdB1F7wGq')
        .then((result) => {
          alert(`Message Sent, We will get back to you shortly, ${result.text}`);
          setEmail('')
          setMessage('')
          setName('')
        },
          (error) => {
            alert(`An error occurred, Please try again ${error.text}`);
          });
      setlabelClass('off')
    } else {
      setlabelClass('red')
    }
  }

  function isValidEmail(ref: string) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(ref);
  }
  const { t } = useTranslation();
  return (
    <main className={styles.main}>
      <div className={styles['header-contact']}>
        <h1>{t("contact.title")}</h1>
        <p>{t("contact.subTitle")}</p>
      </div>
      <form
        className={styles['form-contact']}
        onSubmit={sendEmail}
      >
        <label htmlFor="name">
          {t("contact.label.name")}
          <input
            className={styles.input}
            type="text"
            id='name'
            name='name'
            value={name}
            onChange={(type) => { setName(type.target.value) }}
          />
        </label>
        <label htmlFor="email" className={styles[`${labelClass}`]}>
          {t("contact.label.email")}
          <input
            className={styles.input}
            type="text"
            id='email'
            name='email'
            value={email}
            onChange={(type) => {
              setEmail(type.target.value)
            }}
          />
        </label>
        <label htmlFor="message">
          {t("contact.label.message")}
          <textarea
            className={styles.textarea}
            id='message'
            name='message'
            value={message}
            onChange={(type) => { setMessage(type.target.value) }}
          />
        </label>
        <button type='submit'>
          {t("contact.button")}
        </button>
      </form>
    </main >
  )
}
