import React from 'react'
import axios from 'axios'

export default function Donation() {

const makePayment = async () => {
    try{
    const res = await axios.get("http://localhost:8080/api/user/donation", {withCredentials: true});
    const {url} = res.data
     window.location.href = url    

}catch(err){
        console.log(err)
    }
}

const gooleAuth = async () => {
    try{
    const res = await fetch("http://localhost:8080/api/user/google", {withCredentials: true,
    headers:{
        'Access-Control-Allow-Origin': "*",
        'redirect': 'follow'
    }});
    // axios.get("http://localhost:8080/api/user/google", {withCredentials: true, 
    // headers: {
    //     'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,POST,HEAD', //'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept', 'Access-Control-Max-Age': '86400'
    // }
// });
    // const {url} = res.data
    //  window.location.href = url    

}catch(err){
        console.log(err)
    }
}

const gitHubAuth = async () => {
    try{
    const res = await axios.get("http://localhost:8080/api/user/github", {withCredentials: true, headers: {'Access-Control-Allow-Origin': ['http://localhost:3000'], 'Access-Control-Allow-Methods': 'GET,POST,HEAD', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept', 'Access-Control-Max-Age': '86400'}});
    // const {url} = res.data
    //  window.location.href = url    

    console.log(res.data)

}catch(err){
        console.log(err)
    }
}


  return (
    <div>
        <button onClick={makePayment}>Donate</button>
        <button onClick={gooleAuth}>Google</button>
        <button onClick={gitHubAuth}>Github</button>
    </div>
  )
}

