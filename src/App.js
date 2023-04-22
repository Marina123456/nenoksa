import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from 'react';
import 'aframe'

function App() {
  const [season, setSeason] = useState("autumn");
  const [item, setItem] = useState("2");
  const [angleStart, setAngleStart] = useState("270");
  useEffect(() => {
        if (season=="winter" && item==1) setAngleStart("90");
        if (season=="autumn" && item==1) setAngleStart("300");
        if (season=="summer" && item==1) setAngleStart("300");

        if ((season=="autumn" && item==2)) setAngleStart("270"); 
        if ((season=="summer" && item==2)) setAngleStart("310");
        if ((season=="winter" && item==2)) setAngleStart("90");

        if ((season=="autumn" && item==4)) setAngleStart("270"); 
        if ((season=="summer" && item==4)) setAngleStart("45");
        if ((season=="winter" && item==4)) setAngleStart("80");

        if ((season=="autumn" && item==5)) setAngleStart("270"); 
        if ((season=="summer" && item==5)) setAngleStart("180");
        if ((season=="winter" && item==5)) setAngleStart("240");
      });
  const [isShowMap, setShowMap] = useState(false);
  return (
    <div>
      <div className='PanelSeason'>
        <img className={ (season=="winter") ? 'ImgSeason SeasonSelected' : 'ImgSeason '}
        
         alt="зима" src="./media/icon/zima.svg" onClick={(event)=>{ setSeason("winter")}}/>
        <img className={ (season=="autumn") ? 'ImgSeason SeasonSelected' : 'ImgSeason '} alt="осень" src="./media/icon/osen.svg" onClick={(event)=>{setSeason("autumn")}}/>
        <img className={ (season=="summer") ? 'ImgSeason SeasonSelected' : 'ImgSeason '} alt="лето" src="./media/icon/leto.svg" onClick={(event)=>{setSeason("summer")}}/>
      </div> 
      <div style={{display:  isShowMap ? 'block' : 'none'}} className='Map'>
        <img className='ImgMap' alt="карта" src="./media/icon/karta2.svg"/>
        <img className='ImgMetka' src={ (item=="5") ? "./media/icon/metka_active.svg" : "./media/icon/metka.svg"} onClick={(event)=>{ setItem("5")}} id="Metka_5" alt="карта" />
        <img className='ImgMetka' src={ (item=="4") ? "./media/icon/metka_active.svg" : "./media/icon/metka.svg"} onClick={(event)=>{ setItem("4")}} id="Metka_4" alt="карта" />
       
        <img className='ImgMetka' src={ (item=="2") ? "./media/icon/metka_active.svg" : "./media/icon/metka.svg"} onClick={(event)=>{ setItem("2")}} id="Metka_2" alt="карта" />
        <img className='ImgMetka' src={ (item=="1") ? "./media/icon/metka_active.svg" : "./media/icon/metka.svg"} onClick={(event)=>{ setItem("1")}} id="Metka_1" alt="карта"  />
        <img className='Close' alt="закрыть" src="./media/icon/close.png" onClick={(event)=>{ setShowMap(false)}}/>
      </div> 
      <div style={{display:  isShowMap ? 'none' : 'block'}} className='IconMap' >
        <img className='IconImageMap' alt="открыть" src="./media/icon/metka.svg" onClick={(event)=>{ setShowMap(true)}}/>
      </div> 
      
      <a-scene ar-mode-ui="enabled: false" vr-mode-ui="enabled: false">
        <a-entity id="camera1" camera cursor="rayOrigin: mouse; fuse: false;" look-controls="magicWindowTrackingEnabled: false"></a-entity>
        <a-assets>
            <img id="autumn_1" src='./media/pano/autumn/1.jpg' />
            <img id="autumn_2" src='./media/pano/autumn/2.jpg' />
            <img id="autumn_4" src='./media/pano/autumn/4.jpg' />
            <img id="autumn_5" src='./media/pano/autumn/5.jpg' />
            <img id="summer_1" src='./media/pano/summer/1.jpg' />
            <img id="summer_2" src='./media/pano/summer/2.jpg' />
            <img id="summer_4" src='./media/pano/summer/4.jpg' />
            <img id="summer_5" src='./media/pano/summer/5.jpg' />
            <img id="winter_1" src='./media/pano/winter/1.jpg' />
            <img id="winter_2" src='./media/pano/winter/2.jpg' />
            <img id="winter_4" src='./media/pano/winter/4.jpg' />
            <img id="winter_5" src='./media/pano/winter/5.jpg' />
          </a-assets>
        <a-sky rotation={"0 "+angleStart+" 0"} src={"#"+season+"_"+item}></a-sky>
    </a-scene>
    </div>
  );
}

export default App;
