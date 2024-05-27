import React from "react";
import { useState } from "react";
import "./projects.scss";
import { Link } from "react-router-dom";
import { projectData } from "../../data/Data";

const Projects = () => {
  // const { id, projectTitle, Services, objective, website, challenge } = props;
  //  const [searchTerm, setSearchTerm]=useState("");
  const [filteredItems, setFilteredItems] = useState(projectData);
  //const [items, setItems] = useState(projectData);

  let inputHandler = (e) => {
    // setSearchTerm(e.target.value);
    // filteredItems.map((itm)=>(
    //   if(e.target.value!==itm.projectTitle)
    //   return (<h2>not found</h2>)
    // ))

    // if(e.target.value!== filteredItems.projectTitle){

    //  }

    setFilteredItems(
      projectData.filter((item) =>
        item.projectTitle.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    //  let lowerCase=e.target.value.toLowerCase();
  };

  //  const removeItem = (id) => {
  //   const newItem = filteredItems.filter((data2) => data2.id !== id);
  //   setRenderData(newItem);
  // };
  //removeItem={() => removeItem(id)}
  return (
    <>
      <h1 style={{  fontSize: "3rem",
          fontWeight: "700",
          color:"#cacaca",textAlign:"center", paddingTop:"1rem", }} id="project">
         Projects
      </h1>
      {/* <p style={{ textAlign: "center", margin: "0" }}>
        Search projects by title or filter by category
      </p> */}
      <div className="search">
        <input type="text" placeholder="search" onChange={inputHandler} />
      </div>

      <section className="project_container">
        {filteredItems.length > 0
          ? filteredItems.map((itm) => (
              // <Link key={itm.id} to={`/SingleProject/${itm.id}`} style={{textDecoration:'none'}} >
              <Link key={itm.id} style={{ textDecoration: "none" }}>
                <div className="project_card">
                  <img src={itm.img} alt="" />
                  <h3 >{itm.projectTitle}</h3>
                  <p>{itm.summary}</p>
                  <div>
                    {/* {itm.skills.map((item)=>{
            return <span>{item}</span>
})} */}
<div className="skills">
                    {itm.skills.map((itm) => {
                      return (
                        <>
                          <span key={itm} className="skill">
                            {itm}
                          </span>
                        </>
                      );
                    })}
                    </div>
<div className="btns" >
<button >Code</button>
  <button>Live </button>
</div>
                  </div>
                </div>
              </Link>
            ))
          : projectData.map((itm) => (
              <Link
                key={itm.id}
                to={`/SingleProject/${itm.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="project_card">
                  <img src={itm.img} alt="" />
                  <h3>{itm.projectTitle}</h3>
                  {/* <p >{itm.subTitle}</p> */}``
                </div>
              </Link>
            ))}
      </section>
      {/* <div
        className="btn_container"
        style={{ borderBottom: "1px solid #3b82f6" }}
      >
        <button className="btn">More Projects</button>
      </div> */}
    </>
  );
};

export default Projects;
