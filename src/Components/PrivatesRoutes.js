import { useEffect } from 'react'

//import LoginContext from '../Context/LoginContext';
import { useUserContext } from '../Context/UserContext';

export default function PrivateRoute({children}) {

   const { validate}=useUserContext()

    useEffect (()=>{validate()
    },[validate])

  

}
