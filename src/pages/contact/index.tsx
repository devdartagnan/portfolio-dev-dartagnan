import React from 'react'
import styles from './Contact.module.scss'

export default function Contact() {
    return (
        <main className={styles.main}>
            <div className={styles['header-contact']}>
                <h1>Contact Me,</h1>
                <p>and send me offers, questions or anything</p>
            </div>
              <form className={styles['form-contact']}>
                <label htmlFor="name">
                    Name
                    <input className={styles.input} type="text"  id='name'/>
                </label>
                <label htmlFor="email">
                    Email
                    <input className={styles.input} type="text"  id='email'/>
                </label>
                <label htmlFor="message">
                    Message
                    <textarea className={styles.textarea}  id='message'/>
                </label>
                <button>
                    Send me!
                </button>
            </form>
        </main>
    )
}
