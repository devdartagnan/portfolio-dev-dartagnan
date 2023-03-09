import styled from 'styled-components'
import { devices } from '../../styles/breakPoints'

export const StyledContainer = styled.main`
    display: grid;
    place-items: center;
    margin: 24px 0;
    padding: 0 ${({ theme }) => theme.fontSizes.medium};
    .header-contact{
        margin: 24px 0 60px 0;
        h1{
            font-weight: 400;
        }
        p{
            color: ${({ theme }) => theme.colors.textOpacity06};
            font-weight: 300;
            margin-top: 8px;
        }
    }
    .form-contact{
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 24px;
        height: calc(100vh - 40px);
    
        label{
            align-items: center;
            color: ${({ theme }) => theme.colors.textOpacity06};
            display: flex;
            flex-direction: column;
            font-weight: 500;
            gap: 16px;
            text-align: left;
            width: calc(100vw - 48px);
        }
        .textarea{
            border: none;
            border-radius: 4px;
            height: 80px;
            padding: 12px 0 0 12px;
            width: 80%;
        }
        .input{
            border: none;
            border-radius: 4px;
            height: 36px;
            padding-left: 12px;
            width: 80%;
        }
        button{
            background-color: ${({ theme }) => theme.colors.textOpacity06};
            border: none;
            border-radius: 4px;
            color: ${({ theme }) => theme.colors.primary};
            height: 36px;
            margin-top: 24px;
            width: 86px;
        }
        button:hover{
            background-color: radial-gradient(ellipse at top, ${({ theme }) => theme.colors.hover}, transparent),            
                            radial-gradient(ellipse at bottom, ${({ theme }) => theme.colors.hover}, transparent);;
        }
    }
    @media ${devices.tablet}{
        display: grid;
        grid-template-columns: 40% auto;
        max-width: 1660px;
        margin: auto ;
        .header-contact{
            align-self: flex-start;
            h1{
                font-size: 36px;
                margin-top: 24px;
            }
            p{
                font-size: ${({ theme }) => theme.fontSizes.small};
            }
        }
        .form-contact{
            margin-top: 48px;
            width: 100%;
            label{
                width: 100%;
            }.textarea{
                font-size: 16px;
            height: 160px;
            padding: 12px 0 0 12px;
            text-transform: capitalize;
            width:50%;
        }
        .input{
            font-size:16px;
            height: 36px;
            padding-left: 12px;
            width: 50%;
        }
        }
    }
    @media ${devices.laptop}{
        .header-contact{
            align-self: flex-start;
            h1{
                font-size: 56px;
            }
            p{
                font-size: ${({ theme }) => theme.fontSizes.medium};
            }
        }
    }
`



export default StyledContainer