import React, { Component } from 'react';
import {NavLink,withRouter} from 'react-router-dom';

class Navbar extends Component {
    state={
        subNaviOn:false
    }
    handleClick = (e) =>{
        e.preventDefault();
        this.setState({subNaviOn:!this.state.subNaviOn});

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
       
        this.setState({subNaviOn:false});
       
    }
    render() {
     
        return (      
            <nav className="nav-wrapper">
                <div className="nav-inner">
                    <h1 className="center"><img src="./img/title.png" alt="나의 영어사춘기"/></h1>
                    <ul className="right hide-on-med-and-down">
                        <li exact="true" className={this.getNavLinkClass("/")}><NavLink exact activeClassName="active" to="/"><img src="./img/btn_home.png" alt="home"/></NavLink></li>
                        <li className={this.getNavLinkClass("/about")}><NavLink className={this.state.subNaviOn?'on':''} activeClassName="active"  to="/about"><img src="./img/btn_homework.png" alt="about"/></NavLink></li>
                        <li className={this.getNavLinkClass("/project")}><NavLink className={this.state.subNaviOn?'on':''} activeClassName="active"  to="/project"><img src="./img/btn_homework.png" alt="project"/></NavLink></li>
                    </ul>
                    
                </div>
            </nav>
        

        );
    }
}

export default withRouter(Navbar);