import React, { Component } from 'react';
import {NavLink,withRouter} from 'react-router-dom';

import {storage} from '../../config/fbConfig';
class ProjectSummary extends Component {
    state={
        imgUrl:''
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
  
    render() {
        const {project} = this.props;
        return (      
            <div className="card z-depth-0 project-summary">
                <div className="card-content">
                    <span className="card-title">{project.title}</span>
                    <p>{project.role[0]}</p>
                    <p className="grey-text">{project.period}</p>
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
