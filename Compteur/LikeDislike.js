import React, { useState } from 'react'

const LikeDislike = () => {
    let [likes , setLikes] = useState(0);
    let [dislikes , setdislikes] = useState(0);
    function handeldislikes (){
        setdislikes(dislikes + 1)
    }
  return (
    <div>
        <button onClick={()=> setLikes(likes + 1)}>Likes</button>: {likes} <br/><br/>
        <button onClick={handeldislikes}>Dislikes</button>: {dislikes} <br/><br/>
    </div>
  )
}

export default LikeDislike