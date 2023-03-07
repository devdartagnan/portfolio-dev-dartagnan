import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.main`
    display: grid;
    place-items: center;
    margin: 24px 0;
    padding: 0 ${({ theme }) => theme.fontSizes.medium};
    .header-contact{
        margin: 24px 0 60px 0;
        p{
            margin-top: 8px;
            color: ${({ theme }) => theme.colors.text};
            opacity: 0.6;
        }
    }
    .form-contact{
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 16px;
        height: calc(100vh - 40px);
    
        label{
            align-items: center;
            display: flex;
            flex-direction: column;
            gap: 8px;
            text-align: left;
            width: calc(100vw - 48px);
        }
        .textarea{
            height: 80px;
            padding: 12px 0 0 12px;
            width: 80%;
        }
        .input{
            height: 36px;
            padding-left: 12px;
            width: 80%;
        }
        button{
            height: 36px;
            margin-top: 24px;
            width: 86px;
        }
    }
`

export default function Contact() {
    return (
        <StyledContainer>
            <div className='header-contact'>
                <h1>Contact</h1>
                <p>send me anything, offers, questions</p>
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
