import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import ProjectImg from './ProjectImg';

import Swiper from 'react-id-swiper';
// Need to add Pagination, Navigation modules
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm'
 
const ProjectDetails = (props) =>{ 
    const params = {
        modules: [Pagination, Navigation],
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        spaceBetween: 0
      }
    
    const {project} = props;
    if(project){
        return(
        <div className="container project-details">
            <div className="inner">
            <div className="img-slide">
                <Swiper {...params}>
                    
                        {project.imgs && project.imgs.map((imgPath,i)=>{
                          
                            return(<ProjectImg key={i} imgPath={imgPath}/>)
                            
                        })}
                    
                </Swiper>
            </div>
            <table>
                <colgroup>
                    <col style={{width:'15%'}}></col>
                    <col style={{width:'35%'}}></col>
                    <col style={{width:'15%'}}></col>
                    <col style={{width:'35%'}}></col>
                </colgroup>
                <tbody>
                    <tr>
                        <th>프로젝트명</th>
                        <td colSpan="3">{project.title}</td>
                    </tr>
                    <tr>
                        <th>프로젝트명</th>
                        <td>{project.period}</td>
                        <th>인원(개발인원)</th>
                        <td>{project.member}명</td>
                    </tr>
                    <tr>
                        <th>주요 역할 및 담당</th>
                        <td colSpan="3">
                        {project.role && project.role.map((role,i)=>{
                            return (
                                <p key={i}>{role}</p>
                            )
                        })}
                        </td>
                    </tr>
                    <tr>
                        <th>성과 및 결과</th>
                        <td colSpan="3">{project.outcome}</td>
                    </tr>
                </tbody>
            </table>
            </div>
            
        </div>
        )
    }else{
        return(
            <div className="container center">
                <p>Loading project...</p>
            </div>
            
        )
    
    }
}

const mapStateToProps = (state, ownProps)=>{
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects?projects[id]:null;
    return{
        project:project,
        auth:state.firebase.auth

    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects'}
    ])
)(ProjectDetails);