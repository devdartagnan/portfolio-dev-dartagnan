import { IoMenuOutline } from 'react-icons/io5'
import styled from 'styled-components'
import { darkTheme } from "../../styles/themes/darkTheme";
import { defaultTheme } from "../../styles/themes/defaultTheme";
import { useLocalStorage } from "usehooks-ts";
import { useState } from 'react'
import Link from 'next/link'
import SvgIcon from '@mui/material/SvgIcon'


const StyledHeader = styled.header`
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
        .display-grid{
          display: grid;
        }
    `

const StyledNavMenu = styled.nav`
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
              opacity: 0.8;
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
          p{
            background-color: ${props => props.theme.colors.text};
            height: 2px;
            margin: 1rem 0;
            opacity: 0.6;
            width: 50%;
          }
        }li{
          &:last-child{
          padding-bottom: 16px;
        }
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
              .checkmark {
                background-color: ${props => props.theme.colors.text};
                color: ${props => props.theme.colors.text};
                height: 32px;
                left: 50%;
                right: 50%;
                position: absolute;
                top: 0;
                width: 32px;
        }
        }
    `


export default function Header() {
  const [display, setDisplay] = useState('display-none')


  const [theme, setTheme] = useLocalStorage("theme_dart", defaultTheme);

  const toggleTheme = () => {
    setTheme(theme.title === 'default' ? darkTheme : defaultTheme);
  };

  function toggleNavMenu() {
    display === 'display-none' ? setDisplay('display-grid') : setDisplay('display-none')
  }

  return (
    <StyledHeader>
      <IoMenuOutline size={'32px'} onClick={() => toggleNavMenu()} />
      <StyledNavMenu className={display}>
        <ul>
          <li>
              <Link href="/" onClick={() => toggleNavMenu()}>ABOUT</Link>
          </li>
          <li>
              <Link href="/portfolio"  onClick={() => toggleNavMenu()}>PORTFOLIO</Link>
          </li>
          <li>
              <Link href="/contact"  onClick={() => toggleNavMenu()}>CONTACT</Link>
          </li>
          <p></p>
          <div className='container-social_midias'>
            <Link href={''} className='social_midias'>Linkedin</Link>
            <Link href={''} className='social_midias'>Instagram</Link>
            <Link href={''} className='social_midias'>Github</Link>
          </div>
        </ul>
        <SvgIcon onClick={toggleTheme} className='themeBtn'>
          <path d='M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z' />
        </SvgIcon>
      </StyledNavMenu>
    </StyledHeader>
  )
}
