import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import {storage} from '../../config/fbConfig';
class ProjectSummary extends Component {
    state={
        imgUrl:'',
        isHover:false
    }
   
    componentDidMount(){
        if(this.props.project.imgs){
        let storageRef = storage.ref(this.props.project.imgs[0]);
        storageRef.getDownloadURL().then(url=> {
            this.setState({
                imgUrl:url
            })
          });
        }
        
        
  
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
       
       
    }
    hoverOn(e){
        e.preventDefault();
        this.setState({
            isHover:true
        })

    }
    hoverOff(e){
        e.preventDefault();
        this.setState({
            isHover:false
        })

    }
    render() {
        const {project} = this.props;
        return (      
            <div className={`card project-summary ${this.state.isHover ? "hover" : ""}`} 
            onMouseEnter={this.hoverOn.bind(this)} 
            onMouseLeave={this.hoverOff.bind(this)}>
                <div className="card-content">
                    <span className="card-title">{project.title}</span>
                    <p>{project.role[0]}</p>
                    <p className="period">{project.period}</p>
                    <span className="more-view"><em>더보기</em></span>
                </div>
                <div className="card-img">
                    {project.imgs?<img src={this.state.imgUrl} alt=""/>:null
                    } 
                            
                </div>
            </div>
        

        );
    }
}

export default withRouter(ProjectSummary);
