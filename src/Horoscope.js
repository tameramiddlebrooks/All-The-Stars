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

const [selectedSign, setSelectedSign] = useState('');
  const [zodiacData, setZodiacData] = useState([]);
  const [selectedSignData, setSelectedSignData] = useState(null);
 
 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jps-tarot-api.azurewebsites.net/api/Zodiac/Get');
        setZodiacData(response.data);
      } catch (error) {
        console.error('Error fetching zodiac data:', error);
      }
    };
    fetchData();
  }, []);

  const handleSelect = (event) => {
    const signName = event.target.value;
    setSelectedSign(signName);
    const signData = zodiacData.find((sign) => sign.name.toLowerCase() === signName.toLowerCase());
    setSelectedSignData(signData);
  };

  return (
    <div className="signOptions">
      <h2 className = "landingPageHeader">Sun Sign 101</h2>
      <select value={selectedSign}onChange={handleSelect}>
        <option value="">Select a sign</option>
        <option value="Aries">Aries ♈︎ </option>
        <option value="Taurus">Taurus ♉︎ </option>
        <option value="Gemini">Gemini ♊︎ </option>
        <option value="Cancer">Cancer ♋︎ </option>
        <option value="Leo">Leo ♌︎ </option>
        <option value="Virgo">Virgo ♍︎ </option>
        <option value="Libra">Libra ♎︎ </option>
        <option value="Scorpio">Scorpio ♏︎ </option>
        <option value="Sagittarius">Sagittarius ♐︎ </option>
        <option value="Capricorn">Capricorn ♑︎ </option>
        <option value="Aquarius">Aquarius ♒︎ </option>
        <option value="Pisces">Pisces ♓︎ </option>
      </select>
      {selectedSignData && (
        <div>
          <h2 className ="sign-Name">{selectedSignData.name}</h2>
          <p className="sign-info">
          <p>Dates: {selectedSignData.dates}</p>
          <p>Keywords: {selectedSignData.keywords.join(',  ')}</p>
          <p>Positive traits: {selectedSignData.positiveTraits.join(',  ')}</p>
          <p>Negative traits: {selectedSignData.negativeTraits.join(', ')}</p>
          <p>Ruler: {selectedSignData.ruler.keywords.join(',  ')}</p>
          <p>Sun Sign Element: {selectedSignData.element.name}</p>
          <p>Element Keywords: {selectedSignData.element.keywords.join(', ')}</p>
          <p>Modality: {selectedSignData.modality.name}</p>
          <p>Other Relevant Keywords: {selectedSignData.modality.keywords.join(', ')}</p>
          </p>
        </div>
      )}
    </div>
  );
};
 
export default Horoscope;