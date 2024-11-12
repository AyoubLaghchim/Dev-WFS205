import React ,{useState} from 'react'

export default function Compteur() {
    // Hook state
    let [count , setCount] = useState(0);
    function incrementer(){
        setCount(count + 1)
    }
    function decrementer(){
        setCount(count - 1)
    }

  return (
    <div>
        Compteur : {count} <br/><br/>
        <button onClick={()=>incrementer()}>Incrémenter</button>
        <button onClick={decrementer}>Décrémenter</button>
    </div>
  )
}
