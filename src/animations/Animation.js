import {TweenMax} from 'gsap';



export default {

    openPreLoad(_callback){
        TweenMax.set('#header-light',{y:-65});
        TweenMax.to('#open_preload .center_line',0.6,{height:window.innerHeight,ease:"Cubic.easeOut",onComplete:function(){
            TweenMax.to('#open_preload .left .text',0.8,{x:-30,ease:"Cubic.easeOut"});
            TweenMax.to('#open_preload .right .text',0.8,{x:30,ease:"Cubic.easeOut",onComplete:function(){

                TweenMax.to('#open_preload .center_line',0,{delay:1.2,autoAlpha:0});
                TweenMax.to('#open_preload .text',0.4,{delay:1.4,autoAlpha:0,ease:"Cubic.easeOut"});
                TweenMax.to('#open_preload .left .bg',1.4,{delay:1.1,x:document.body.clientWidth/2+1,ease:"Power3.easeInOut"});
                TweenMax.to('#open_preload .right .bg',1.4,{delay:1.1,x:document.body.clientWidth/2+1,ease:"Power3.easeInOut",onComplete:function(){
                   
                    document.getElementById("open_preload").remove();
                    if(_callback)_callback();



                }
                });
            }});
        }});
    },
    pagePreLoad(_time,_v){  
        return new Promise(function(resolve) {

            document.querySelector('#preload').style.display='block';
            TweenMax.set('#preload',{x:-window.innerWidth,autoAlpha:1});
            TweenMax.set('#preload .container',{autoAlpha:0});
            TweenMax.set('#preload .loader img',{transformOrigin: "center center",rotation:0});
            TweenMax.to('#preload',_time/1000,{x:0,ease:"Quart.easeInOut",onComplete:function() {        
                    resolve.call(null, _v);
                    TweenMax.to('#preload .container',0.2,{autoAlpha:1});
                    TweenMax.to('#preload .loader  img',2,{rotation:360,repeat: -1, yoyo:false,repeatDelay: 0,ease:"Linear.easeNone"});
                    //TweenMax.to('#preload',0.8,{autoAlpha:'#fff'});
                }
            });

        });
        
    },
    
    hideLoad(_callback){

        TweenMax.to('#preload',0.5,{delay:0.5,autoAlpha:0,onComplete:function(){
            TweenMax.killTweensOf('#preload .loader  img');
            if(_callback)_callback();
        }});
    }
};
