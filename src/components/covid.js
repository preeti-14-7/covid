import React, { useEffect,useState } from 'react'
import './covid.css';
const Covid = () => {
  
  const [data,setData] = useState([]);
  const getCovidData = async() => {
    try{
      const res = await fetch('https://data.covid19india.org/data.json');
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch(err)
    {
       console.log(err);
    }
  }
  useEffect(() => {
    getCovidData();
  }, []);
  return(
    <div class = "section">
      <h1> 🔴 Live </h1>
     <h2>Covid-19 corona virus tracker</h2>
     <ul>
       <li className = "card">
         <div className = "card_inner">
           <p className = "card_name"><span>Our</span> Country</p>
           <p className = "card_total card_small">India</p>
         </div>
       </li>
       <li className = "card">
         <div className = "card_inner">
           <p className = "card_name"><span>Total</span> Recovered</p>
           <p className = "card_total card_small">{data.recovered}</p>
         </div>
       </li>
       <li className = "card">
         <div className = "card_inner">
           <p className = "card_name"><span>Total</span> Confirmed</p>
           <p className = "card_total card_small">{data.confirmed}</p>
         </div>
       </li>
       <li className = "card">
         <div className = "card_inner">
           <p className = "card_name"><span>Total</span> Deaths</p>
           <p className = "card_total card_small">{data.deaths}</p>
         </div>
       </li>
       <li className = "card">
         <div className = "card_inner">
           <p className = "card_name"><span>Total</span> Active</p>
           <p className = "card_total card_small">{data.active}</p>
         </div>
       </li>
       <li className = "card">
         <div className = "card_inner">
           <p className = "card_name"><span>Last</span> Updated</p>
           <p className = "card_total card_small">{data.lastupdatedtime}</p>
         </div>
       </li>
     </ul>
    </div>
  )
}

export default Covid