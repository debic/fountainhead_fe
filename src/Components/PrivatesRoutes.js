import { useEffect } from 'react'

//import LoginContext from '../Context/LoginContext';
import { useUserContext } from '../Context/UserContext';

export default function PrivateRoute({children}) {

   const {x, navigate, validate}=useUserContext()

   console.log(x)
   //const navigate = useNavigate()


//    const validate = async ()=>{
//     try {
//         const res = await axios.get("http://localhost:8080/api/user/validate", {withCredentials: true}  ) 
//         if (!res.data.length) navigate("/")
      
       
//     } catch (error) {
        
//     }
// }


    useEffect (()=>{validate()
    },[])

  

    // return ( !user ? <Navigate to="/"/> : children) 
}
