import React from 'react'
import { useState } from 'react';
import { useEffect} from 'react';
import axios from "axios";
import { URI } from '../App';

const About = () => {
  const [error, setError] = useState([]);
  const [form, setForm] = useState([]);
  const [loading, setLoading] = useState(false);
  const [about, setAbout] = useState([]);

  useEffect(() => {

    const aboutAll = async () => {
      try {
        const res = await axios.get(`${URI}/adAbouts`);
        setAbout(res.data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    aboutAll ();
  }, [])
  return (
    <div>Home

<div className='hero-container'>
    <h3>Diffrent Types Of Properties for you</h3>
    <h1>Best Types of Properties</h1>

    <div className='main-container'>
      <div className='beach-div'>Bbbb

<div>
  {
    about.map((about)=>(
      <div key={about._id}>
        <img src={about.picture} alt="" />
        <p>{about.type}</p>
      </div>
    ))
  }
</div>
      </div>
      

    </div>
</div>
    </div>
  )
}

export default About