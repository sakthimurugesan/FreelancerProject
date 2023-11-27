
import '../style/Find.css'

  import React, { useState, useEffect } from 'react';
  import Navbar from "./Navbar";
  import Footer from "./Footer";
  import axios from 'axios';
  
  export default function Find() {
      const [data, setData] = useState([]);
      const [searchTerm, setSearchTerm] = useState('');
  
      useEffect(() => {
          const fetchData = async () => {
              try {
                  // Replace the URL with your JSON server endpoint
                  const response = await axios.get('http://localhost:3000/profile');
                  setData(response.data);
              } catch (error) {
                  console.error('Error fetching data:', error);
              }
          };
  
          fetchData();
      }, []);
  
      const handleSearchChange = (event) => {
          setSearchTerm(event.target.value.toLowerCase());
      };
  
      const filteredData = data.filter((freelancer) => {
          const skillsLowerCase = freelancer.skills.map((skill) => skill.toLowerCase());
          return skillsLowerCase.some((skill) => skill.includes(searchTerm));
      });
    return (
        <>
            <Navbar></Navbar>
    <div className="searchbox-outer">
    <div className="search-box">
        <h1>Find Your Freelancer</h1>
      <input type="text" value={searchTerm} onChange={handleSearchChange} />
      </div>
    </div>
            <div className="main-outer-div">
               <div className="card-outer-div">
             {filteredData.map(freelancer=>(
                 <div className="card-div">
                 <div className="card-img">
                     <img src={'/img/'+freelancer.img_name}></img>
                 </div>
                 <div className="card-details">
                 <p> <strong>Name : {freelancer.name}</strong></p>
                    
                     <p>Skills</p>
                     <ul>
                     {freelancer.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
                         
                     </ul>
                     <a href={'/freelancer/'+freelancer.id}>
                     <button class="button-7" role="button">Hire</button>
                     </a>
                 </div>

             </div>
             ))}
               </div>
            </div>
            <Footer></Footer>
        </>
    )
}
