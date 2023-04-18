import React from 'react'
import styles from './Contact.module.scss'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation();
  return (
    <main className={styles.main}>
      <div className={styles['header-contact']}>
        <h1>{t("contact.title")}</h1>
        <p>{t("contact.subTitle")}</p>
      </div>
      <form className={styles['form-contact']}>
        <label htmlFor="name">
          {t("contact.label.name")}
          <input className={styles.input} type="text" id='name' />
        </label>
        <label htmlFor="email">
          {t("contact.label.email")}
          <input className={styles.input} type="text" id='email' />
        </label>
        <label htmlFor="message">
          {t("contact.label.message")}
          <textarea className={styles.textarea} id='message' />
        </label>
        <button>
          {t("contact.button")}
        </button>
      </form>
    </main>
  )
}
