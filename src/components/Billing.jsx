import React from 'react'
import { bill, apple, google } from '../assets'
import styles, {layout} from '../style'

const Billing = () => {
  return (
    <section id="product" className={`${layout.sectionReverse} mt-5 sm:mt-0`}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="bill" className='w-[100%] h-[100%] relative'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>Easily control your billing & invoicing.</h2>
        <br className='sm:block hidden'/>
        <p className={`${styles.paragraph} max-w-[470px] `}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices 
        ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer 
        platea placerat.</p>
        <div className='flex flex-row mt-10'>
            <img src={apple} className=' hover:cursor-pointer'/>
            <img src={google} className=' hover:cursor-pointer'/>
        </div>
      
      </div>
    </section>
  )
}

export default Billing