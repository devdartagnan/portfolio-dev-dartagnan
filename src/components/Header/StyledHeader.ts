import { devices } from '../../styles/breakPoints'
import styled from 'styled-components'

export const StyledHeader = styled.header`
    display:grid;
    height: auto;
    margin: 16px 0 auto 0;
    place-items: center;
    padding: 0 24px;
    position: relative;
    width: 100%;

    .display-none{
            display: none;
        }
    .display-flex{
            display: grid;
    }
    @media ${devices.tablet}{
        margin: 0;
        // display with oposites values for responsive
        .display-none{
            display: flex;
        }
        .display-flex{
            display: none;
        }
        .menu-bar{
            display: none;
        }
    }
        
    `

export const StyledNavMenu = styled.nav`
        align-items: center;
        background-color:  ${props => props.theme.colors.secundary};
        font-size: ${({ theme }) => theme.fontSizes.large};
        gap:16px;
        height: calc(100vh - 40px);
        padding: 32px 0;
        position: absolute;
        text-align: center;
        top: 40px;
        width: 100%;
        z-index: 1;
          
            .container-social_midias{
                display: flex;
                flex-direction: column;
                gap: 8px;
                
            .social_midias{
                font-size: ${({ theme }) => theme.fontSizes.small};
                color: ${({ theme }) => theme.colors.textOpacity06};
                text-transform: uppercase;
            }
        }
        ul{
            align-self: baseline;
            display: flex;
            flex-direction: column;
            font-size:  28px;
            gap: 24px;
            list-style: none;
            margin-bottom: 16px;
            .line{
                background-color: ${props => props.theme.colors.text};
                height: 2px;
                margin: 1rem 0;
                opacity: 0.6;
                width: 50%;
            }
        }li:hover{
            color: #f5a1a1;
        }
        .themeBtn{
            align-self: flex-end;
            cursor: pointer;
            height: 30px;
            justify-self: center;
            margin-bottom: 80px;
            position: relative;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            width: 40px;
        }
@media ${devices.tablet}{
    background-color:transparent;
    height: fit-content;
    margin-bottom: 24px;
    padding: 0;
    position: relative;
    top:24px;
    
    width: fit-content;
    ul{
        align-items: center;
        flex-direction: row;
        font-size: 16px;
        
        .container-social_midias{
            align-items: center;
            flex-direction: row;
            gap: 16px;
            .social_midias{
                font-size: 12px;
                opacity: 0.8;
                text-transform: uppercase;
                }
                .social_midias:hover{
            color: #f5a1a1;
        }
    }
}
    .themeBtn{
        align-self: center;
        margin-bottom: 10px;
        margin-left:  ${({ theme }) => theme.fontSizes.small};
}.themeBtn:hover{
            color: #f5a1a1;
}
}
    `