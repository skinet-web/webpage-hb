import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, {layout} from '../style'

const CardDeal = ({buttonClick}) => {
  return (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
            Find a better card deal in few easy steps. 
            <br className='sm:block hidden'/>
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Arcu tortor, purus in mattis at sed integer faucibus. 
            Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>
            <Button buttonClick={buttonClick} styles='mt-10'/>

        </div>
        <div className={`flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`}>
            <img src={card} className='h-[100%] w-[100%]'/>
            
        </div>
       
    </section>
  )
}

export default CardDeal