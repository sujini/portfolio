import React, { Component } from 'react';
import {NavLink,withRouter} from 'react-router-dom';

class Navbar extends Component {
    state={
        naviOn:false
    }
    handleClick = (e) =>{
        e.preventDefault();
        this.setState({naviOn:!this.state.naviOn});

    }
    getNavLinkClass = (path) => {
        let bool;
        if(path==='/'){
            bool = (this.props.location.pathname===path);
        }else{
            bool = (this.props.location.pathname.indexOf(path)!==-1);
        }
        return bool?'active':'';
    }
    componentDidMount(){
        

        
  
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
       
        this.setState({naviOn:false});
       
    }
    render() {
        const naviOn = this.state.naviOn?'active':'';
     
        return (      
            <nav className={`nav-wrapper ${naviOn}`}>
                <div className="nav-inner">
                    <div className="menu-list">                    
                        <h1 className="center">sujini</h1>
                        <ul className="">
                            <li><NavLink exact activeClassName="active" to="/">home</NavLink></li>
                            <li><NavLink activeClassName="active"  to="/about">about</NavLink></li>
                            <li><NavLink activeClassName="active"  to="/project">project</NavLink></li>
                            <li><a href="https://github.com/sujini" target="_blank" rel="noopener noreferrer">github</a></li>
                        </ul>
                    </div>
                    <a href="/" onClick={this.handleClick}className="btn-menu">
                        <span><em>M  C</em></span>
                        <span><em>E  L</em></span>
                        <span><em>N  S</em></span>
                        <span><em>U  E</em></span>
                        
                    </a>
                    
                </div>
            </nav>
        

        );
    }
}

export default withRouter(Navbar);