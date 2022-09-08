import React from 'react'
import axios from 'axios'

export default function Donation() {

const makePayment = async () => {
    try{
    const res = await axios.get("http://localhost:8080/api/user/donation", {withCredentials: true})
    const {url} = res.data
     window.location.href = url    

}catch(err){
        console.log(err)
    }
}


  return (
    <div>
        <button onClick={makePayment}>Donate</button>
    </div>
  )
}

