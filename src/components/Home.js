import React, { Component } from 'react';
import {TweenMax} from 'gsap';
class Home extends Component {
    curIdx=0;
    beforeIndx=undefined;
   
    next(){
        let  Li = document.querySelectorAll(".slide li");
       

        if(this.beforeIndx!==undefined){
            let beforeLi = Li[this.beforeIndx],box = beforeLi.querySelectorAll("span");
            TweenMax.fromTo(box, 1, {x:"0"},{x:"100%",onComplete:()=>{
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
        console.log(this.curIdx)
      
       
        curLi.classList.add('active');
        TweenMax.fromTo(box, 1, {x:"-100%"},{x:"0%",onComplete:()=>{
            this.beforeIndx=this.curIdx;
            this.curIdx=this.curIdx>=2?0:this.curIdx+1;

        }});
    }
    componentDidMount(){
        console.log("home");
        this.next();
        setInterval(()=>{
            this.next();
        },5000)
        
        
           
       

    }
    render() {
     
        return (      
            <div className="container home">
                <div className="slide">
                    <ul>
                       <li className="">
                           <h2>About</h2>
                            <div className="l10 t0 w20 h20"><span></span></div>
                            <div className="l30 t20 w20 h20"><span></span></div>
                            <div className="l50 t0 w20 h20"><span></span></div>
                            <div className="l70 t0 w30 h100"><span></span></div>
                        </li> 
                        <li>
                           <h2>Project</h2>
                            <div className="l10 t0 w30 h100"><span></span></div>
                            <div className="l40 t0 w20 h20"><span></span></div>
                            <div className="l70 t80 w20 h20"><span></span></div>
                            <div className="l70 t80 w20 h20"><span></span></div>
                        </li> 
                        <li>
                           <h2>Github</h2>
                            
                            <div className="l10 t0 w20 h20"><span></span></div>
                            <div className="l30 t80 w20 h20"><span></span></div>
                            <div className="l60 t0 w30 h100"><span></span></div>
                        </li> 
                    </ul>

                </div>
            </div>
        

        );
    }
}

export default Home;