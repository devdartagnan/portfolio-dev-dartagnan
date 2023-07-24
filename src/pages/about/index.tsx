import BioSectionex from './BioSection'
import InfoSection from './InfoSection'
import styles from './About.module.scss'
import PictureProfile from '@/components/Profile'
export default function About() {

  return (
    <>
      <h1 className={styles.h1}>Dev <br /> Dartagnan.</h1>
      <section className={styles.about}>
        <InfoSection />
        <BioSectionex />
        <PictureProfile />
      </section>
    </>
  )
}
