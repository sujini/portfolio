import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import ProjectSummary from './projects/ProjectSummary';
class Project extends Component {
   
    render() {
        console.log(this.props);
        const {projects}=this.props;
        return(
            <div className="project-list section">
                {projects && projects.map(project=>{
                    return (
                        <Link to={'/project/'+project.id}  key={project.id}>
                        dd
                        </Link>
                    )
                })}
                
               
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state);
    return{
        projects:state.firestore.ordered.projects,
        auth:state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects',limit:3, orderBy:['createdAt','desc']}
    ])
)(Project);