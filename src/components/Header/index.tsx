import { IoMenuOutline } from 'react-icons/io5'
import { useState } from 'react'
import Link from 'next/link'
import SvgIcon from '@mui/material/SvgIcon'
import styles from './Header.module.scss'
import classNames from 'classnames';
import { useTheme } from 'next-themes';
import { LANGUAGES } from "./constants";
import { useTranslation } from 'react-i18next'

export default function Header() {
  const [display, setDisplay] = useState('display-none')
  const { setTheme, resolvedTheme } = useTheme()
  // const [overFlow, setOverFlow] = useState(false)
  function toggleNavMenu() {
    display === 'display-none' ? setDisplay('display-flex') : setDisplay('display-none')
  }
  const { i18n, t } = useTranslation();
  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };
  return (
    <header className={styles.header}>
      <IoMenuOutline size={'32px'} onClick={() => toggleNavMenu()} className={styles['menu-bar']} />
      <nav className={classNames({
        [styles[display]]: true,
        [styles.nav]: true
      })}>
        <ul className={styles.ul}>
          <li>
            <Link href="/" onClick={() => window.innerWidth > 768 ? void (0) : toggleNavMenu()}>{t("menu.about")}</Link>
          </li>
          <li>
            <Link href="/portfolio" onClick={() => window.innerWidth > 768 ? void (0) : toggleNavMenu()}>{t("menu.portfolio")}</Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => window.innerWidth > 768 ? void (0) : toggleNavMenu()}>{t("menu.contact")}</Link>
          </li>
          <li className={styles.line}></li>
          <li className={styles['container-social_midias']}>
            <Link href={''} className={styles.social_midias}>Linkedin</Link>
            <Link href={''} className={styles.social_midias}>Instagram</Link>
            <Link href={'https://github.com/devdartagnan'} className={styles.social_midias}>Github</Link>
          </li>
        </ul>
        <SvgIcon onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} className={styles.themeBtn}>
          <path d='M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z' />
        </SvgIcon>
        <select defaultValue={i18n.language} className={styles.lang} onChange={onChangeLang}>
          {LANGUAGES.map(({ code, label }) => (
            <option key={code} value={code} className={styles['select-options']}>
              {label}
            </option>
          ))}
        </select>
      </nav>
    </header>
  )
}
