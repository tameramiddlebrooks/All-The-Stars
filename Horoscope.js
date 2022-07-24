/* This component serves to be my "main" component
The code in this component executes the purpose of the
app, for the reader to be able to read their horoscope.
 The function within this component will be a functional
 component because it will accepts a single "props"
 object argument and returns a React element.*/
 
 import axios from "axios";
 import React, {useState, useEffect} from 'react';
// import Card from './Card'
// import Loader from './Loader'
 
const Horoscope = (props) => {


        const [sunSign, setSunSign]=useState('');
        /* My sunSign state variable is set to an empty value
        because this value depends on what the user
        chooses so I didn't want there to be a set value. */
        const [loading, setLoading]=useState(false);
        /* My loading state variable is initialized to false so
         I could toggle between states by passing boolean
        value.
        False loading will hold the current value of the state
        and setLoading will let me change it */
   

            useEffect(() => {
                setLoading(true);
                const url = `https://aztro.sameerkumar.website/?sign=${sunSign}&day=today`;
                fetch(url, { method: 'POST' })
                  .then((res) => res.json())
                  .then((data) => setSunSign(data))
                  .then(() => setLoading(false));
              }, [sunSign])
 
              const handleSelection = (event) => {
               setSunSign(event.target.value)
              }
 
              if (loading === true) {
                return '...Loading, wait one moment, please.';
              }

            
            console.log(sunSignData);
               
            return (
                <div>
                <div className = 'selection'>
                    <select onChange={handleSelection}>
                        <option value="">SELECT YOUR SIGN</option>
                        <option value='Capricorn'>Capricorn</option>
                        <option value='Aquarius'>Aquarius</option>
                        <option value='Pisces'>Pisces</option>
                        <option value='Taurus'>Taurus</option>
                        <option value='Gemini'>Gemini</option>
                        <option value='Cancer'>Cancer</option>
                        <option value='Leo'>Leo</option>
                        <option value='Virgo'>Virgo</option>
                        <option value='Libra'>Libra</option>
                        <option value='Scorpio'>Scorpio</option>
                        <option value='Sagittarius'>Sagittarius</option>
                  </select>
                </div>

                
                <h2>Description: {sunSignData.description}</h2>
                <p className='date'>{sunSignData.current_date}</p>
                <p>Date Range: {sunSignData.date_range}</p>
                <p>Compatability: {sunSignData.compatibility}</p>
                <p>Mood: {sunSignData.mood}</p>
                <p>Color: {sunSignData.color}</p>
                <p>Lucky Number: {sunSignData.lucky_number}</p>
                <p>Lucky Time: {sunSignData.lucky_time}</p>

                </div>

            )
    }
   
 
export default Horoscope;
