import React from "react";
import header from './Header.module.css'
import { Cotalog } from '../../components/header/CotalogInfo'
import { Header } from '../../components/header/Header'

class CotalogWin extends React.Component{
    constructor(props){
        super(props);
        this.state = ({statusMenu: false})
        this.Cotalog = this.Cotalog.bind(this)
        
        
    }

    Cotalog(){
        this.setState({statusMenu: !this.state.statusMenu})
    }
    render(){
        return((
            <div>
                {this.state.statusMenu === true ? <Cotalog/>: ''}
                <button className={header.on_links} onClick={this.Cotalog}>Cotalog</button>            </div>
        ))
    }
}

export default CotalogWin