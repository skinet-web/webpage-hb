import {clients} from '../constants'
import styles from '../style'

const Clients = () => {
  return (
    <section  className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
            {clients.map((clients) => (
                <div key={clients.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
                    <img src={clients.logo} alt='logo' className='sm:w-[192px] w-[120px] object-contain clients p-3 '/>
                </div>
        ))}
        </div>
        
    </section>
  )
}

export default Clients