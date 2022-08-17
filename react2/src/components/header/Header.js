import header from './Header.module.css'
import logo from './images/Frame16.svg'

export const Header = () => {
    return(
        <ul className='header'>
            <img src={logo} className='logo'/>
            {/* <li className={header.links}>Cotalog</li> */}
            <li className={header.links}>Decorates</li>
            <li className={header.links}>Plants</li>
            <button className={header.but}>Sign up</button>
        </ul>
    )
}