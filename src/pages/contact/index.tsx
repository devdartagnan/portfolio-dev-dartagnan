import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.main`
    margin: 24px 0;
    padding: 0 ${({ theme }) => theme.fontSizes.medium};
    .form-contact{
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 16px;
        height: calc(100vh - 40px);
        justify-content: center;
        margin-top: -60px;
        label{
            align-items: center;
            display: flex;
            flex-direction: column;
            gap: 8px;
            text-align: center;
            width: 100%;
        }
        .textarea{
            height: 80px;
            padding: 12px 0 0 12px;
            width: 60%;
        }
        .input{
            height: 36px;
            padding-left: 12px;
            width: 60%;
        }
        button{
            height: 36px;
            width: 86px;
        }
    }
`

export default function Contact() {
    return (
        <StyledContainer>
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
