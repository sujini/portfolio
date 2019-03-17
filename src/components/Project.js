import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import ProjectSummary from './projects/ProjectSummary';
class Project extends Component {
   
    render() { 
        const {projects}=this.props;
        return(
            <div className="container project">
                <div className="inner">
                {projects && projects.map(project=>{
                    return (
                        <Link to={'/project/'+project.id}  key={project.id}>
                            <ProjectSummary project={project}/>
                        </Link>
                    )
                })}
                </div>
               
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        projects:state.firestore.ordered.projects
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects',orderBy:['period','desc']}
    ])
)(Project);