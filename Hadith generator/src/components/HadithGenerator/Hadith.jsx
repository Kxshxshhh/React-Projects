import React, { useState } from 'react'
import './Hadith.css'
import share from '../../assets/share_icon.png'
import hadiths from '../../data'

const Hadith = () => {

    const [hadith, setHadith] = useState({
        text: "The Prophet (ﷺ) said: Faith(Belief) consists of more than sixty branches(i.e.parts).And Haya (This term Haya covers a large number of concepts which are to be taken together; amongst them are self respect, modesty, bashfulness, and scruple, etc.) is a part of faith.",
        narrator: "Abu Huraira",
        source:"Sahih Al-Bukhari",
    })
    const generateHadith = () => {
        const randomIndex = Math.floor(Math.random() * hadiths.length);
        setHadith(hadiths[randomIndex]);
    };
    
    return (
      <div className='container'>
          <div className="bismillah">﷽</div>
          <div className="Narrator">{hadith.narrator} (RA) narrated : </div>
          <div className='hadith_container'>
              <div className="hadith">{hadith.text}</div>
          </div>
          <div className="source">{hadith.source}</div>
          <button onClick={generateHadith}>Generate Hadith</button>
      </div>
  )
}

export default Hadith