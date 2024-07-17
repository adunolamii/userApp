import React from 'react'
import { useState } from 'react';
import { useEffect} from 'react';
import axios from "axios";
import { URI } from '../App';

export const Home = () => {
  const [error, setError] = useState([]);
  const [form, setForm] = useState([]);
  const [loading, setLoading] = useState(false);
  const [home, setHome] = useState([]);

  useEffect(() => {
  
    const homeAll = async () => {
      try {
        const res = await axios.get(`${URI}/adHomes`);
        setHome(res.data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    homeAll ();
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
    home.map((home)=>(
      <div key={home._id}>
        <img src={home.picture} alt="" />
        <p>{home.type}</p>
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
