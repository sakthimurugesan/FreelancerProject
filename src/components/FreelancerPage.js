import React, { useEffect, useState } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../style/FreelancerPage.css'
export default function FreelancerPage() {
    const { id } = useParams();
    const [freelancer, setFreelancer] = useState();
    const [name1, setName] = useState();
    const [imgName, setImgName] = useState();
    const [experience, setExperience] = useState();
    const [email, setEmail] = useState();
    const [skills, setSkills] = useState([]);
    const [qualification, setQualification] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Replace the URL with your server endpoint
                const response = await axios.get(`http://localhost:3000/profile/${id}`);
                const selectedProduct = response.data;

                // Check if a freelancer with the given id is found
                if (selectedProduct) {
                    const { img_name, experience, email, skills, qualification, name } = selectedProduct;

                    setFreelancer(selectedProduct);
                    setImgName(img_name);
                    setExperience(experience);
                    setEmail(email);
                    setSkills(skills);
                    setQualification(qualification);
                    setName(name);
                } else {
                    console.error(`Freelancer with id ${id} not found`);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id])

    return (
        <>
            <Navbar></Navbar>
            <div className="freelancer-outer-div">
                <div className="freelancer-inner-div">
                    <div className="freelancer-img-div">
                        <img src={'/img/'+imgName}></img>
                    </div>
                    <div className="freelancer-detail-div">
                        <h1>{name1}</h1>
                        <h3> Experience : {experience} Years</h3>
                        <h3> Qualification : {qualification} </h3>
                        <h3> Email : {email} </h3>
                        <h3>Skills</h3>
                        <ul className='skill-list'>
                        {skills.map((i)=>
                        <li>{i}</li>
                        )}
                        <li>  <a href={"/"}>
                     <button class="button-7" role="button">Hire</button>
                     </a></li>
                        </ul>
                        <>
                        </>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}