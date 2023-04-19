import React from 'react'
import styles from './InfoProfile.module.scss'
import { BsFillBriefcaseFill, BsFillPersonFill } from 'react-icons/bs'
import { HiLocationMarker, HiSpeakerphone } from 'react-icons/hi'
import { useTranslation } from 'react-i18next';

export default function InfoProfile() {
  const { t } = useTranslation();
  return (
      <div className={styles.tags}>
        <div className={styles['tags-cards']}>
          <BsFillBriefcaseFill className={styles.svg} />
          <p className={styles.title}>{t("home.profile.info.role.title")}</p>
          <p className={styles.subtitle}>{t("home.profile.info.role.info")}</p>
        </div>
        <div className={styles['tags-cards']}>
          <HiLocationMarker className={styles.svg} />
          <p className={styles.title}>{t("home.profile.info.location.title")}</p>
          <p className={styles.subtitle}>{t("home.profile.info.location.info")}</p>
        </div>
        <div className={styles['tags-cards']}>
          <BsFillPersonFill className={styles.svg} />
          <p className={styles.title}>{t("home.profile.info.age.title")}</p>
          <p className={styles.subtitle}>{t("home.profile.info.age.info")}</p>
        </div>
        <div className={styles['tags-cards']}>
          <HiSpeakerphone className={styles.svg} />
          <p className={styles.title}>{t("home.profile.info.languages.title")}</p>
          <p className={styles.subtitle}>{t("home.profile.info.languages.info")}</p>
        </div>
      </div>
  )
}
