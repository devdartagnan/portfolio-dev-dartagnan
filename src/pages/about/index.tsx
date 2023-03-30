import BioSectionex from './BioSection'
import InfoSection from './InfoSection'
import styles from './About.module.scss'

export default function About() {

  return (
    <section className={styles.about}>
      <InfoSection />
      <BioSectionex />
    </section>
  )
}
