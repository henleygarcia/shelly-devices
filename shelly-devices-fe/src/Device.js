import { useEffect, useState } from 'react';


export default function Device () {
    const[switchData, setSwitchData, plugVoltage]= useState ()
    const[switchTemperature, setTemp, plugTemp] = useState()
    const[switchPower, setPower] = useState()


    

    useEffect(() => {
    async function getData(){
        const res = await fetch('http://192.168.33.1/rpc/Switch.Toggle?id=0')
        const data = await res.json()
        setSwitchData(JSON.stringify(data['switch:0']))
        }
        getData()

        async function setSwitch() {
            
        }
        
        
       
        
    },[])

    return (
        <>
        <div>
            {switchData}
            
        </div>

        <div>
            {switchPower}
        </div>
        </>
    )
}