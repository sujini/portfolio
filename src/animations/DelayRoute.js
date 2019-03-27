import React, { Component } from 'react';
import {Route,Switch,withRouter} from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Project from '../components/Project';
import ProjectDetails from '../components/projects/ProjectDetails';
import {TweenMax} from 'gsap';

class DelayRoute extends Component {    
   
    state={
        shouldRender:this.props.isOpened
    }
    imgAry={
        about:['/img/about_img1.jpg','/img/about_img2.jpg','/img/about_img3.jpg','/img/about_img4.jpg'],
        project:['/img/project_img1.jpg','/img/project_img2.jpg','/img/project_img3.jpg'],
        github:['/img/github_img1.jpg','/img/github_img2.jpg','/img/github_img3.jpg','/img/github_img4.jpg']
    };
    componentWillReceiveProps(nextProps) {
        console.log(this.props.isOpened,nextProps.isOpened);
        
        /*
      
        if(this.props.isOpened===nextProps.isOpened){
            this.setState({ shouldRender: false })
        }else{
            this.setState({ shouldRender: true })
        }*/
        this.setState({ shouldRender: true })
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
    
    imgLoad(){
        
        Object.keys(this.imgAry).map(key => {
        
            let ary = this.imgAry[key];
            console.log(ary)
            for(let i =9;i<ary.length;i++){
                var img = new Image();
                img.onload =function(){                   
                    console.log('image loaded');                   
                    
                };
                img.src = ary[i];
            }
            
            return ary;
    
        })

       


    }
    componentDidMount(){
       
        if(this.props.location.pathname==='/'){
            this.imgLoad();

        }
        

        
  
    }

    render() {
        if(this.state.shouldRender){
    
            return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />      
                <Route exact path="/project" component={Project} />         
                <Route exact path="/project/:id" component={ProjectDetails} />         
            </Switch>
            )
        }else{
            return null
        }





    }

};
export default withRouter(DelayRoute);