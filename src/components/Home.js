import React, { Component } from 'react';
import {TweenMax} from 'gsap';
import {Link,withRouter} from 'react-router-dom';
class Home extends Component {
    curIdx=0;
    beforeIndx=undefined;
    timer=undefined;

    handleMouseMove(e) {

        var x = ( e.clientX /document.body.clientWidth  ) * 40 - 20;
        var y = ( e.clientY / document.body.clientHeight ) * 40 - 20;

        let h2= document.querySelectorAll("li.active h2 em");
        h2.forEach(function(item,i) {
            item.style.transform = "translate("+x+"px,"+y+"px)";
        });

    }
 
    async handleClick(e){
        e.preventDefault();
        clearInterval(this.timer);
        let path = e.target.parentNode.dataset.to; 
        console.log(e.target.parentNode);

        this.pageOutAni(1000,"promise_V_").then(v=>{
            console.log(v,this.props.history)
            this.props.history.push(path);
          
        });
    }
    pageOutAni(_time,_v){  
        return new Promise(function(resolve) {            

            TweenMax.fromTo('.slide li span', 0.8, {y:"0"},{y:"-100%",onComplete:()=>{
                resolve.call(null, _v);
    
            }});

        });
        
    }



    next(){
        let  Li = document.querySelectorAll(".slide li");
       

        if(this.beforeIndx!==undefined){
            let beforeLi = Li[this.beforeIndx],box = beforeLi.querySelectorAll("span");
            TweenMax.fromTo(box, 0.8, {x:"0"},{x:"100%",onComplete:()=>{
                this.listInMotion(Li);
    
            }});
           


        }else{
            this.listInMotion(Li);
        }
        

        
    }
    listInMotion(Li){
        let curLi = Li[this.curIdx], box = curLi.querySelectorAll("span");
        Li.forEach(function(item) {
            item.classList.remove('active');
        });
       
        curLi.classList.add('active');
        TweenMax.fromTo(box, 1, {x:"-100%"},{x:"0%",onComplete:()=>{
            this.beforeIndx=this.curIdx;
            this.curIdx=this.curIdx>=2?0:this.curIdx+1;

        }});
    }
    componentDidMount(){
        console.log("home");
        this.next();
        this.timer=setInterval(()=>{
            this.next();
        },5000)

    }
    componentWillUnmount() {
        console.log('home','componentWillUnmount');
        clearInterval(this.timer);
    };
    render() {
     
        return (      
            <div className="container home">
                <div className="slide"  onMouseMove={this.handleMouseMove.bind(this)}>
                    <ul>
                       <li className="">
                           
                            <div className="l0 t0 w20 h20"><span style={{background:'url(/img/about_img1.jpg) no-repeat center',backgroundSize:'cover'}}></span></div>
                            <div className="l20 t20 w20 h20"><span style={{background:'url(/img/about_img2.jpg) no-repeat center',backgroundSize:'cover'}}></span></div>
                            <div className="l40 t0 w20 h20"><span style={{background:'url(/img/about_img3.jpg) no-repeat center',backgroundSize:'cover'}}></span></div>
                            <div className="l60 t0 w30 h100"><span style={{background:'url(/img/about_img4.jpg) no-repeat center',backgroundSize:'cover'}}></span></div>
                            <Link to="/about" onClick={this.handleClick.bind(this)}><h2 data-to="/about"><em>A</em><em>b</em><em>o</em><em>u</em><em>t</em></h2></Link>
                        </li> 
                        <li>
                            <div className="l10 t0 w30 h100"><span style={{background:'url(/img/project_img1.jpg) no-repeat center',backgroundSize:'cover'}}></span></div>
                            <div className="l40 t0 w20 h20"><span style={{background:'url(/img/project_img2.jpg) no-repeat center',backgroundSize:'cover'}}></span></div>
                            <div className="l70 t80 w20 h20"><span style={{background:'url(/img/project_img3.jpg) no-repeat center',backgroundSize:'cover'}}></span></div>
                            <Link to="/project" onClick={this.handleClick.bind(this)}><h2 data-to="/project"><em>P</em><em>r</em><em>o</em><em>j</em><em>e</em><em>c</em><em>t</em></h2></Link>
                           
                        </li> 
                        <li>
                            
                            <div className="l10 t0 w20 h20"><span style={{background:'url(/img/github_img1.jpg) no-repeat center',backgroundSize:'cover'}}></span></div>
                            <div className="l30 t80 w20 h20"><span style={{background:'url(/img/github_img2.jpg) no-repeat center',backgroundSize:'cover'}}></span></div>
                            <div className="l60 t0 w30 h100"><span style={{background:'url(/img/github_img3.jpg) no-repeat center',backgroundSize:'cover'}}></span></div>
                            <a href="http://github.com/sujini" target="_blank"><h2><em>g</em><em>i</em><em>t</em><em>h</em><em>u</em><em>b</em></h2></a>
                          
                        </li> 
                    </ul>

                </div>
            </div>
        

        );
    }
}

export default withRouter(Home);