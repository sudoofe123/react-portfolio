import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import './singleproject.scss';
import {projectData} from '../data/Data'
import { useParams } from "react-router-dom";
import Projects from '../components/projects/Projects';
import {RiTimer2Line} from 'react-icons/ri';
import {AiOutlineLink} from 'react-icons/ai';
import Footer from '../components/footer/Footer';
console.log(projectData);

const SingleProject = () => {
  const {id}=useParams();
  const project=projectData.find((project)=>project.id===id);

  if (!project) {
    return <div>Project not found</div>;
  }

  const  currentDate = new Date();
  const year = currentDate.getFullYear();
 const month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
  const day = currentDate.getDate();
const getDate=`${day}-${month}-${year}`;

  return (
    <>
    <div className='singleProjectContainer'>
  
     <h1>Project Ui</h1>
     <div className='header'>
     <div className='time'>
     <RiTimer2Line className='icon'/>
     <span>{getDate}</span>
     </div>
     <div className='title'>
      <AiOutlineLink className='icon'/>
      <span>Ui/Frontend</span>
      </div>
      </div>
  
          <div id={project.id}> 
            <div className='single_project'>

              <div className="left">
               <h2>About Project</h2>
               <p>{`Name:${project.projectTitle}`}</p>
               <p>{`services:${project.Services}`}</p>
               <p>{`Website:${project.website}`}</p>
               <h2>Objective</h2>
               <p>{project.objective}</p>
              </div>
              <div className="right">
             <h2>Challenge</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloremque repellat rem asperiores sit maxime, eius et possimus voluptas, ratione tempore. Eligendi impedit, in deleniti animi fugit voluptatum, excepturi dolor sapiente pariatur minima sit! Ratione quidem quibusdam, est animi voluptates unde quos blanditiis sed ut fugiat ipsum eum error dolore minima sapiente ab voluptas magni odio rem magnam voluptatem optio quaerat. Vel voluptas soluta illum deserunt quo consequuntur, modi tempora ipsa in repudiandae error molestias. Quisquam maxime minus, consequatur sed consectetur dignissimos dolore facilis necessitatibus voluptas molestias repellat quae excepturi, nostrum sapiente debitis tenetur harum a esse velit ut obcaecati. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam dolore assumenda dolorem suscipit beatae aperiam mollitia quas consectetur labore. Officiis excepturi veritatis, aperiam molestiae facere ut odit quae delectus sed nulla non! Hic eligendi sed cupiditate voluptatem ducimus dicta, quaerat pariatur temporibus vitae! Vitae nostrum eum distinctio delectus natus debitis?</p>
              </div>
            </div>
            </div>

    </div>
    <Footer></Footer>
   </>
  )
}

export default SingleProject