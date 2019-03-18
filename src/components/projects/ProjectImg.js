import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import {storage} from '../../config/fbConfig';
class ProjectImg extends Component {
    state={
        imgUrl:''
    }
   
    componentDidMount(){
        let storageRef = storage.ref(this.props.imgPath);
        storageRef.getDownloadURL().then(url=> {
            
            this.setState({
                imgUrl:url
            })
          });
        
        
  
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
       
       
    }
  
    render() {
        const {imgUrl} = this.state;
        return (      
            <div className="swiper-slide"><img src={imgUrl} alt="" /></div>
        

        );
    }
}

export default withRouter(ProjectImg);
