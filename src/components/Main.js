import React, { useState, useEffect } from 'react';
import './Main.css'

const schmiddiZeichnung = require('./schmiddiZeichnung.png');

function Main() {




    const [clicks, setClicks] = useState(0);
    const [punkte, setPunkte] = useState(0);
    const [multiplier, setMultiplier] = useState(1);
    const [upgradeKosten, setUpgradeKosten] = useState(1);
    const [kopieMultiplier, setKopieMultiplier] = useState(3);
    const [gesamtClicks, setGesamtClicks] = useState(0);

    const [kostenMultiplier, setKostenMultiplier] = useState(1);



//onClick:
    const clickHandler = () => {
        setClicks(clicks + multiplier);
        setPunkte(punkte + multiplier);
        setGesamtClicks(gesamtClicks + 1);
    }

//document title:

    document.title = "Schmiddi Clicker"


//Auto Upgrader:
    const autoUpgrade = (AutoBool, inputPunkte, inputKosten, inputUpgradeKosten) => {
        let MPunkte = inputPunkte;
        let Mkosten = inputKosten;
        let MupgradeKosten = inputUpgradeKosten
        
        
        
        let aktiv = AutoBool;
        while(aktiv) {
            if(MPunkte >= MupgradeKosten) {    
                setKostenMultiplier(kostenMultiplier + 3);
                Mkosten += 3;
                setPunkte(punkte -  upgradeKosten);
                MPunkte -= MupgradeKosten;
                setMultiplier(multiplier + 2);
                setUpgradeKosten(upgradeKosten + 3 * kostenMultiplier)
                MupgradeKosten = MupgradeKosten + 3 * Mkosten;
                setKopieMultiplier(multiplier + 4);
                
            } else {
                break;
            }
        }
    }

    //Auto Upgrader Toggle:
    const [auBool, setAuBool] = useState(false);
    const [auText, setAuText] = useState('Auto-Upgrades aktivieren');

    function toggleAutoUpgrader() {
        if(auBool) {
            setAuBool(false);
            setAuText('Auto-Upgrades Aktivieren')
        } else {
            setAuBool(true);
            setAuText('Auto-Upgrades Deaktivieren')
        }
    }

    //Upgrade kaufen:

    function kaufen() {
        if(punkte >= upgradeKosten) {
            setKostenMultiplier(kostenMultiplier + 3);
            setPunkte(punkte - upgradeKosten);
            setMultiplier(multiplier + 2);
            setUpgradeKosten(upgradeKosten + 3 * kostenMultiplier);
            setKopieMultiplier(multiplier + 4);
        }
    }


    //Knöpfe aktiv/inaktiv:

    const [upgradeKnopfBool, setUpgradeKnopfBool] = useState(false);
    const [aci, setAci] = useState(false);

    function upgradeKnopf() {
        if(punkte < upgradeKosten) {
            setUpgradeKnopfBool(false);
        } else {
            setUpgradeKnopfBool(true);
        }
    }

    function upgradeKnopfAc() {
        if(punkte < acPreis) {
            setAci(false);
        } else {
            setAci(true)
        }
    }

    //Auto Clicker:

    const [acv, setAcv] = useState(0);
    const [acPreis, setAcp] = useState(600);
    const [acText, setAcText] = useState(`Autoclicker kaufen für ${acPreis} Schmiddis`);
    const [acc, setAcc] = useState(1);
    useEffect(() => {
        const interval = setInterval(() => {
          
          setClicks(clicks => clicks + acv);
          setPunkte(punkte => punkte + acv);
          
        }, 1000);
        return () => clearInterval(interval);
        }/*, [] */);
     
        
    function AutoClickerKaufen() {
        if(punkte < acPreis) {
            return
        } else {
            setAcc(acc + 3)
            setAcv(acv => acv + 2);
            setPunkte(punkte => punkte - acPreis);
            setAcp(acPreis => acPreis + 3 * acc);
            setAcText(`Autoclicker kaufen für ${acPreis + 3 * acc} Schmiddis`)
            
        }
    }


    //Shop Öffnen/Schließen:

    const [shopBool, setShopBool] = useState(false);

    const toggleShop = () => {
        setShopBool(!shopBool);
    }

    //Knöpfe alle 100ms überprüfen:

    useEffect(() => {
        const interval = setInterval(() => {
          
          upgradeKnopf()
          
        }, 100);
        return () => clearInterval(interval);
    });


    useEffect(() => {
        const interval = setInterval(() => {
          
          upgradeKnopfAc()
          
        }, 100);
        return () => clearInterval(interval);
    });


    if(shopBool) {
        return (
        <div className='wrapperMain'>
            
                <div className='toggleShop' onClick={toggleShop}>
                    <p className='schmiddiWechselnText'>Shop schließen</p>
                </div>
     
                <p className='infos'>Schmiddis: </p>
      
                <p className='infosSchmiddis'>{punkte}</p>
 
                <div onClick={kaufen} className={upgradeKnopfBool ? 'schmiddiWechseln' : 'knopfinaktiv'}>
                    <p className='schmiddiWechselnText'>Upgrade: {upgradeKosten}</p>
                </div>
      
                <p className='infos'>Akuteller Multiplier: {multiplier}</p>
    
                <p className='infos'>Nächster Multiplier: {kopieMultiplier}</p>
     
                <div onClick={AutoClickerKaufen} className={aci ? 'schmiddiWechseln' : 'knopfinaktiv'}>
                    <p className='schmiddiWechselnText'>{acText}</p>
                </div>
 
            
                <p className='infos'>Der Autoclicker gibt aktuell {acv} Schmiddis/s</p>

                <div onClick={toggleAutoUpgrader} className='autoUpgradeKnopf'>
                    <p className='schmiddiWechselnText'>{auText}</p>
                </div>
            <div onClick={autoUpgrade(auBool, punkte, kostenMultiplier, upgradeKosten)}></div>
        </div> 
            
        )
    } else {
        return (
            <div className='wrapperMain'>
                
                <div onClick={clickHandler} style={{alignSelf: 'center'}}>
                    <img src={schmiddiZeichnung} className='img' alt='schmiddi zeichnung'/>
                </div>
  
                <p className='infos'>Du hast den Schmiddi {gesamtClicks} mal angeklickt</p>

                <p className='infos'>Schmiddis: </p>
                

                <div className='infosSchmiddis'>
                    <p className='infos'>{punkte}</p>
                </div>

                <p className='infos'>Du hast insgesamt {clicks} Schmiddis gesammelt</p>

                <div className='toggleShop' onClick={toggleShop}>
                    <p className='schmiddiWechselnText'>Shop öffnen</p>
                </div>
  
            <div onClick={autoUpgrade(auBool, punkte, kostenMultiplier, upgradeKosten)}></div>

        </div>

        )
    }
    
}

export default Main;