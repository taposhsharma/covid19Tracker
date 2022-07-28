

import './App.css';
import Cards from './components/Cards/Card';
import CountryPicker from './components/CountryPicker/CountryPicker';
import {useState,useEffect} from 'react'
import { fetchCountries, fetchData } from './api';
import coronaImg from './corona.png'
import Chart from './components/Charts/charts';

function App() {
  const [data,setData]= useState({})
  const [countries,setCountries]=useState([])
  const [country,setCountry]=useState('')
    
   useEffect(()=>{
     async function getData(){
         const res = await fetchData()
         
         setData(res)
        
       
        
      }
      getData()
      
     } ,[])
    useEffect(()=>{
      async function getCountry(){
        const res = await fetchCountries()
        
        
        setCountries(res.data.countries)
        
       
        
      }
      getCountry()
      
    } ,[])

    async function handleCountryChange(country){
      const fetchedData = await fetchData(country)
      setData(fetchedData)
      setCountry(country)

    }
 

  return (
    <div className="container">
      <img src={coronaImg} alt=""/>
      <Cards data={data} />
      <CountryPicker countries={countries} onCountryChange={handleCountryChange}/>
      <Chart data={data} country={country}/> 
      
    </div>
  );
}

export default App;
