import React from 'react'
import { StyledContainer } from './StyledContact'

export default function Contact() {
    return (
        <StyledContainer>
            <div className='header-contact'>
                <h1>Contact Me,</h1>
                <p>and send me offers, questions or anything</p>
            </div>
            <form className='form-contact'>
                <label htmlFor="name">
                    Name
                    <input className='input' type="text"  id='name'/>
                </label>
                <label htmlFor="email">
                    Email
                    <input className='input' type="text"  id='email'/>
                </label>
                <label htmlFor="message">
                    Message
                    <textarea className='textarea'  id='message'/>
                </label>
                <button>
                    Send me!
                </button>
            </form>
        </StyledContainer>
    )
}
