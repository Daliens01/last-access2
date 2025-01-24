import React from 'react'

const Reload  = ()=>{
    React.useEffect(()=>{
        const handleBeforeUnload = (event) => {
          // Perform actions before the component unloads
          event.preventDefault();
          event.returnValue = '';
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
      },[])
}

export {Reload}