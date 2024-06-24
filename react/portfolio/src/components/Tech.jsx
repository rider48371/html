import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {textVariant} from '../utils/motion'
import {BallCanvas} from './canvas'
import {technologies} from '../constants'

const Tech = () => {
  return (
    <motion.section 
    variants={textVariant()}
    initial="hidden"
    whileInView="show" 
    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    viewport={{once: true, amount: 0.25}}
    >
      <span className="hash-span" id="tech"></span>
      <motion.div variants="textVariant()">
        <p className={styles.sectionSubText}>
          What I have done so far
        </p>
        <h2 className={styles.sectionHeadText}>Tech Stack</h2>
      </motion.div>
      <div className="w-full flex">
        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following technologies I have used in my projects
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon}/>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default Tech