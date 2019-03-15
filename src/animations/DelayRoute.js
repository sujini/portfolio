import React, { Component } from 'react';
import {Route,Switch,withRouter} from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Project from '../components/Project';
import {TweenMax} from 'gsap';

class DelayRoute extends Component {    
   
    state={
        shouldRender:this.props.isOpened
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props.isOpened!==nextProps.isOpened);
      
      
        if(this.props.isOpened===nextProps.isOpened){
            this.setState({ shouldRender: false })
        }else{
            this.setState({ shouldRender: true })
        }

    }
 
  
    pageAni(_time,_v){  
        return new Promise(function(resolve) {

            TweenMax.to('.container',0.6,{height:0,minHeight:0,ease:"Cubic.easeOut",onComplete:function() {        
                    resolve.call(null, _v);
                    document.getElementsByClassName('container')[0].removeAttribute('style')
                   
                }
            });

        });
        
    }
   
    shouldComponentUpdate(nextProps, nextState){
       
        return nextState.shouldRender;

    }
    componentDidMount(){
        

        
  
    }

    render() {
        if(this.state.shouldRender){
            return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />           
                <Route path="/project/:id" component={Project} />         
            </Switch>
            )
        }else{
            return null
        }





    }

};
export default withRouter(DelayRoute);