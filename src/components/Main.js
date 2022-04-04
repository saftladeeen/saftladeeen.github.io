import React, { useState, useEffect } from 'react';
import './Main.css'

const schmiddiZeichnung = require('./schmiddiZeichnung.png');

function Main() {

    const [clicks, setClicks] = useState(0);
    const [punkte, setPunkte] = useState(0);
    const [multiplier, setMultiplier] = useState(1);
    const [upgradeKosten, setUpgradeKosten] = useState(1);
    const [kopieMultiplier, setKopieMultiplier] = useState(1);
    const [gesamtClicks, setGesamtClicks] = useState(0);

    const [kostenMultiplier, setKostenMultiplier] = useState(1);



//onClick:
    const clickHandler = () => {
        setClicks(clicks + multiplier);
        setPunkte(punkte + multiplier);
        setGesamtClicks(gesamtClicks + 1);
    }

//Auto Upgrader:
    /*const autoUpgrade = (AutoBool, inputKosten, inputUpgradeKosten, inputMultiplierKopie, inputMultiplier) => {
        let MPunkte = inputKosten;
        let Mkosten = inputKosten;
        let MupgradeKosten = inputUpgradeKosten;
        let MmultiplierKopie = inputMultiplierKopie;
        let Mmultiplier = inputMultiplier;
        let aktiv = AutoBool;
        while(aktiv) {
            if(MPunkte >= MupgradeKosten) {    
                setMultiConst(multiConst + 3);
                Mkosten += 3;
                setCred(cred -  upgradeCosts);
                MPunkte -= MupgradeKosten;
                setMultiplier(multiplier + 2);
                setUpgradeKosten(upgradeCosts + 3 * multiConst)
                MupgradeKosten = MupgradeKosten + 3 * Mkosten;
                setKopieMultiplier(multiplier + 4);
                MmultiplierKopie = Mmultiplier + 4;
            } else {
                break;
            }
        }
    }*/

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
            <div className='containerMain'>
                <div className='shopKnopf' onClick={toggleShop}>
                    <h1>Moin</h1>
                </div>
            </div>
        )
    }
    
}

export default Main;