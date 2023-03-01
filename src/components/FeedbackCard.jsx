
import {quotes} from '../assets'

const FeedbackCard = ({content, name, title, img, index }) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
    
        <img src={quotes} className="w-[42.6px] h-[27.6px] object-contain"/>
        <p className='font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10'>{content}</p>
        <div className='flex flex-row'>
            <img src={img} className='w-[48px] h-[48px] rounded-full'/>
            <div className='flex flex-col ml-4'>
                <h4 className='font-poppins text-[20px] text-white'>{name}</h4>
                <p className='font-poppins text-[10px] text-white'>{title}</p>
            </div>
            
        </div>
        
    </div>
  )
}

export default FeedbackCard