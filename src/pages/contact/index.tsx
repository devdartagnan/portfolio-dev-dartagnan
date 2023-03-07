import React from 'react'
import { StyledContainer } from './StyledContact'

export default function Contact() {
    return (
        <StyledContainer>
            <div className='header-contact'>
                <h1>Contact Me,</h1>
                <p>and send me offers, questions or anything</p>
            </div>
            <form action="" className='form-contact'>
                <label htmlFor="name">
                    Name
                    <input className='input' type="text" />
                </label>
                <label htmlFor="email">
                    Email
                    <input className='input' type="text" />
                </label>
                <label htmlFor="reason">
                    Reason
                    <input className='input' type="text" />
                </label>
                <label htmlFor="text">
                    Message
                    <textarea className='textarea' />
                </label>
                <button>
                    Send me!
                </button>
            </form>
        </StyledContainer>
    )
}
