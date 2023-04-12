import React from 'react'
import Styles from './BioSection.module.scss'


export default function BioSectionex() {
  return (
    <section className={Styles.bio}>
      <div className={Styles['biography-section']}>
        <h2>About</h2>
        <p>
          My name is Leonardo and I'm a passionate front-end developer with a keen eye for design. Although I don't have any work experience yet, I have been honing my skills by working on various personal projects.
          One of the things that I love about front-end development is how it allows me to blend my interests in art and games. I see web development as a form of digital art that can be used to create engaging and immersive experiences for users. I strive to create designs that are not only visually appealing but also functional and easy to use.
          When I'm not coding, I can usually be found exploring the latest video games or attending local art exhibitions. I find that both of these hobbies inspire me to think creatively and approach my work from different angles.
          Thank you for taking the time to check out my portfolio, and I hope you enjoy exploring my projects as much as I enjoyed creating them
        </p>
      </div>
      <div className={Styles['biography-section']}>
        <h2>Needs</h2>
        <ul>
          <li>Be ready for holiday family gathering as well as for light dinner during the day.</li>
          <li>Find balance between feeling good about herself, being able to maintain her lifestyle, while contributing with the world</li>
          <li>Wise choices of the brands and respect to environment and sustainability is fundamental for her.</li>
        </ul>
      </div>
      <div className='biography-section'>
        <h2>Pain points</h2>
        <p>
          Alma need to find flexible solution that can help her to optimize her time while dedicating herself to her carreer, kids and making sure to maintain a health lifestyle.
        </p>
      </div>
    </section>
  )
}
