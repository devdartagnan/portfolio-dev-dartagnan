import styled from 'styled-components'
import { devices } from '../../../styles/breakPoints'

export const StyledDiv = styled.div`
    @media ${devices.tablet}{
    grid-column: 1;
    grid-row: 1;
}
`
export const StyledH1 = styled.h1`
    font-size: 56px;
    font-weight: 500;
    grid-column: 1;
    grid-row: 1;
`

export const StyledTags = styled.div`
    display: grid;
    margin: 65px 0 45px 0;
    
    .tags-cards{
        display: flex;
        flex-direction: column;
        font-size: 15px;
        font-weight: 400;
        gap: 8px;
        margin-bottom: 28px;
        svg{
            font-size: 30px;
        }
        .title{
            font-weight: 600;
    }
        .subtitle{
            color: ${({ theme }) => theme.palette.textColor.textOpacity06} !important;
        }
    
}
@media ${devices.tablet}{
    grid-column: 1;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 140px auto;
    grid-row: 2;
    margin:76px auto 76px 20%;
}
@media ${devices.laptop}{
    gap: 16px;
    margin: 176px auto auto auto;
    .tags-cards{
        margin-bottom: 0;
    }
}
`
export const StyledTech = styled.section`
    border-bottom: 1px solid ${({ theme }) => theme.palette.colors.primary};
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 36px;
    padding-bottom: 45px;

    h2{
        margin-top: 24px;
    }
    .skills{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        
        .skill-item{
            display: flex;
            flex-direction: column;
            font-family: 'Roboto', sans-serif;
            gap: 16px;
            width: 35%;

            .item__icon{
                font-size: 48px;
            }
            .skill-item__trackBar{
            background-color: ${({ theme }) => theme.palette.textColor.borderOpacity01};
            border-radius: 5px;
            display: flex;
            height: 7px;
            margin-bottom: 24px;
            opacity: 0.8;
            width: 100%;

            .level{
                background-color: ${({ theme }) => theme.palette.textColor.text};
                border-radius: 5px 0px 0px 5px;
                width: 80%;
            }
            .level__javascript{
                width: 65%;
            }
            .level__typescript{
                width: 35%;
            }
            .level__html{
                width: 80%;
            }
            .level__sass{
                width: 70%;
            }
            .level__react{
                width: 60%;
            }
            .level__git{
                width: 40%;
            }
            
        }
        }
        .hovertext {
            position: relative;
        }
        
        .hovertext:before {
            border-radius: 5px;
            content: attr(data-hover);
            background-color: ${({theme}) => theme.palette.colors.primary};
            color: ${({theme}) => theme.palette.textColor.text};
            left: 0;
            opacity: 0;
            padding: 5px 0;
            position: absolute;
            text-align: center;
            transition: opacity 300ms ease-in-out;
            top: 80%;
            visibility: hidden;
            width: 80px;
            z-index: 1;
        }
        
        .hovertext:hover:before {
            opacity: 1;
            visibility: visible;
        }

    }
    @media ${devices.mobileL}{
        .skills{
            margin-right: 10%;
        }
    }

    @media ${devices.laptop}{
        border-bottom: none;
        margin-right: auto;
        padding-top: 48px;
        .skills{
            display: grid;
            gap: 24px;
            grid-template-columns: 1fr 1fr 1fr;
            justify-content: space-between;
            
            .skill-item{
                width: 85%;
            }
        }
    }
`
export default StyledTags