import React, { Component } from 'react';
import {TweenMax,Power2} from 'gsap';
import {Link,withRouter} from 'react-router-dom';
class Home extends Component {
    curIdx=0;
    beforeIndx=undefined;
    timer=undefined;
   
    

    handleMouseMove(e) {

        let x = parseInt((( e.clientX /document.body.clientWidth  ) * 30 - 15).toFixed(2));
        let y = parseInt((( e.clientY / document.body.clientHeight ) * 30 - 15).toFixed(2));

        let h2 = document.querySelector("li.active h2");
        TweenMax.to(h2, 0.3, {x:x*2,y:y*2});
      
        let h100 = document.querySelectorAll("li.active .h100 span");

        h100.forEach(function(item,i) {          
            TweenMax.to(item, i*0.2+0.2, {x:x,y:y});
        });

    }
 
    handleClick(e){
        e.preventDefault();
        clearInterval(this.timer);
        let path = e.target.parentNode.dataset.to; 

        this.pageOutAni(1000,"promise_V_").then(v=>{
          
            this.props.history.push(path);
          
        });
    }
    pageOutAni(_time,_v){  
        return new Promise(function(resolve) {            

            TweenMax.fromTo('.slide li span', _time/1000, {y:"0"},{y:"-100%",onComplete:()=>{
                resolve.call(null, _v);
    
            }});

        });
        
    }

    shuffle(ary) {
        var j, x, i;
        for (i = ary.length; i; i -= 1) {
            j = Math.floor(Math.random() * i);
            x = ary[i - 1];
            ary[i - 1] = ary[j];
            ary[j] = x;
        }
    }

    next(){
        let  Li = document.querySelectorAll(".slide li");


        if(this.beforeIndx!==undefined){
            let beforeLi = Li[this.beforeIndx],box = beforeLi.querySelectorAll("span"), text = beforeLi.querySelectorAll("h2 em");
            
            let len = text.length,ranAry =[];
            for(var i=0;i<len;i++){
                ranAry.push(i);
            }
            this.shuffle(ranAry);
            for(var j=0;j<len;j++){
                TweenMax.to(text[ranAry[j]],0.1,{opacity:0,delay:j*0.05})
            }
            
        
          
            TweenMax.fromTo(box, 0.8, {x:"0"},{x:"-100%",ease:Power2.easeInOut,onComplete:()=>{
                this.listInMotion(Li);
    
            }});
           


        }else{
            this.listInMotion(Li);
        }
        

        
    }
    listInMotion(Li){
        let curLi = Li[this.curIdx], box = curLi.querySelectorAll("span"), text = curLi.querySelectorAll("h2 em");
        Li.forEach(function(item) {
            item.classList.remove('active');
        });

        let len = text.length,ranAry =[];
        for(var i=0;i<len;i++){
            ranAry.push(i);
        }
        this.shuffle(ranAry);
        for(var j=0;j<len;j++){
            TweenMax.to(text[ranAry[j]],0.1,{opacity:1,delay:j*0.05})
        }
       
       
        curLi.classList.add('active');
        TweenMax.fromTo(box, 1, {x:"100%"},{x:"0%",ease:Power2.easeInOut,onComplete:()=>{
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
                           
                            <div className="l0 t0 w20 h20"><span style={{background:'#ccc url(/img/about_img1.jpg) no-repeat center',backgroundSize:'cover'}}></span></div>
                            <div className="l20 t20 w20 h20"><span style={{background:'#ccc url(/img/about_img2.jpg) no-repeat center',backgroundSize:'cover'}}></span></div>
                            <div className="l40 t0 w20 h20"><span style={{background:'#ccc url(/img/about_img3.jpg) no-repeat center',backgroundSize:'cover'}}></span></div>
                            <div className="l60 t0 w30 h100"><span style={{background:'#ccc url(/img/about_img4.jpg) no-repeat center',backgroundSize:'cover'}}></span><span style={{background:'url(/img/about_img4.jpg) no-repeat center',backgroundSize:'cover'}}></span><span style={{background:'url(/img/about_img4.jpg) no-repeat center',backgroundSize:'cover'}}></span></div>
                            <Link to="/about" onClick={this.handleClick.bind(this)}><h2 data-to="/about"><em>A</em><em>b</em><em>o</em><em>u</em><em>t</em></h2></Link>
                        </li> 
                        <li>
                            <div className="l0 t80 w20 h20"><span style={{background:'#ccc url(/img/project_img4.jpg) no-repeat center',backgroundSize:'cover'}}></span></div>
                            
                            <div className="l20 t0 w30 h100"><span style={{background:'#ccc url(/img/project_img1.jpg) no-repeat center',backgroundSize:'cover'}}></span><span style={{background:'url(/img/project_img1.jpg) no-repeat center',backgroundSize:'cover'}}></span><span style={{background:'url(/img/project_img1.jpg) no-repeat center',backgroundSize:'cover'}}></span></div>
                            <div className="l60 t20 w20 h20"><span style={{background:'#ccc url(/img/project_img2.jpg) no-repeat center',backgroundSize:'cover'}}></span></div>
                            <div className="l80 t40 w20 h20"><span style={{background:'#ccc url(/img/project_img3.jpg) no-repeat center',backgroundSize:'cover'}}></span></div>
                            <Link to="/project" onClick={this.handleClick.bind(this)}><h2 data-to="/project"><em>P</em><em>r</em><em>o</em><em>j</em><em>e</em><em>c</em><em>t</em></h2></Link>
                           
                        </li> 
                        <li>
                            
                            <div className="l10 t0 w20 h20"><span style={{background:'#ccc url(/img/github_img1.jpg) no-repeat center',backgroundSize:'cover'}}></span></div>
                            <div className="l30 t80 w20 h20"><span style={{background:'#ccc url(/img/github_img2.jpg) no-repeat center',backgroundSize:'cover'}}></span></div>
                            <div className="l60 t0 w30 h100"><span style={{background:'#ccc url(/img/github_img3.jpg) no-repeat center',backgroundSize:'cover'}}></span><span style={{background:'url(/img/github_img3.jpg) no-repeat center',backgroundSize:'cover'}}></span><span style={{background:'url(/img/github_img3.jpg) no-repeat center',backgroundSize:'cover'}}></span></div>
                           
                            <a href="http://github.com/sujini" target="_blank" rel="noopener noreferrer"><h2><em>g</em><em>i</em><em>t</em><em>h</em><em>u</em><em>b</em></h2></a>
                          
                        </li> 
                    </ul>

                </div>
            </div>
        

        );
    }
}

export default withRouter(Home);