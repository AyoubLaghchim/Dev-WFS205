import React ,{useState} from 'react'
import './Formulaire.css'
const Formulaire = () => {
    let [nom , setNom] = useState('');
    let [prenom , setPrenom] = useState('');
    let [salaire , setSalaire] = useState(0);
    let [info , setInfo] = useState('');
    function handelsubmit(e){
        e.preventDefault();
        if(nom.trim() ==='' || prenom.trim() ==='' || salaire.trim() ===''){
            alert("veuiller remplir tous les champs !")
            return
        }
        setInfo(`Nom : ${nom} ,Prénom : ${prenom} ,Salaire : ${salaire} `)
    }
  return (
    <div>
        <h2>Formulaire d'inscription : </h2>
        <form onSubmit={(e)=>handelsubmit(e)}>
            <table>
                <tbody>
                    <tr>
                        <td>Nom : </td>
                        <td><input type='text' name='nom' onChange={(e)=>setNom(e.target.value)}/> </td>
                    </tr>
                    <tr>
                        <td>Prénom : </td>
                        <td><input type='text' name='prenom' onChange={(e)=>setPrenom(e.target.value)}/> </td>
                    </tr>
                    <tr>
                        <td>Salaire : </td>
                        <td><input type='text' name='salaire' onChange={(e)=>setSalaire(e.target.value)}/> </td>
                    </tr>
                    <tr><td colSpan={2}><input type='submit' value="Envoyer"/></td></tr>
                </tbody>
            </table>
        </form>
            {info && <div><h2>Infos employé :</h2> {info}</div>}
    </div>
  )
}

export default Formulaire