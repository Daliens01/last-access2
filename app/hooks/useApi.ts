import React from 'react'
import { UserData } from '../interfaces/interfaces';
const ApiHook = ({id}: {id: string})=>{
    const [data, setData] = React.useState<UserData[]>([])
    const [count, setCount] = React.useState("");
    let controller = new AbortController();
    let signal = controller.signal;
    const fetching = async()=>{
          
      const urlHilos = `https://user-api-steel.vercel.app/hilos`
      const dataHilos = await fetch(urlHilos,{signal}).then(response => response.json());
      if(dataHilos.map((e: any)=>e.Value)>=20){
        controller.abort();
        controller.abort(signal.reason);
        setCount(signal.toString())
      }else{
        const url = `https://user-api-steel.vercel.app/${id}`
        const datos = await fetch(url,{signal}).then(response =>response.json()).catch(e=>e.json())
        setData(datos)
      }
    }

    React.useEffect(()=>{
       
          fetching()
      },[])

      return {data, count}
}

export {ApiHook}