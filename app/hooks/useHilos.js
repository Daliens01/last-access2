import React from 'react'
const Hilos = (verificador)=>{
    const [count, setCount] = React.useState("");
    let controller = new AbortController();
    let signal = controller.signal;
    React.useEffect(()=>{
          const data = async()=>{
          const url = `https://user-api-steel.vercel.app/hilos`
          const data = await fetch(url,{signal}).then(response => response.json());
          if(data.map(e=>e.Value)>=20){
            controller.abort();
            setCount([404])
          }else{
            setCount([data.map(e=>e.Value)])
          }
        }
          if(verificador=="seleccionado"){
            data()
          }else{
            console.log("no seleccionado");
          }
      },[verificador])

      return count[0]
}

export {Hilos}