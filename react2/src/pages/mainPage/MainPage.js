import { Header } from "../../components/header/Header";
// import { Services } from "../../components/services/Services";
import './MainPage.css'
import bubble1 from './images/Group10.svg'
import plants1 from './images/Mask group.png'

function MainPage (){
    return(
        <div className="MainIn">
            <Header/>
            {/* <Services services='services from main page'/> */}

            <div className="MainInside">
            <h1>Summer Plants</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <img src={bubble1} className='bubble1'/>
            <img src={plants1} className='plants1'/>
            </div>
        </div>
    )
}

export default MainPage;