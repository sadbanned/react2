import cotalog from './CotalogInfo.module.css'


export const Cotalog = () => {
    return(
        <ul className='cotalog'>
            <li className={cotalog.links}>House plants</li>
            <li className={cotalog.links}>Outdoor plants</li>
            <li className={cotalog.links}>Exotic plants</li>
            <li className={cotalog.links}>Flower plants</li>
        </ul>
    )
}

export default Cotalog