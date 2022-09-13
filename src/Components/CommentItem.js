import React, { useEffect } from "react";
import axios from "axios";
import { Text } from "@chakra-ui/react";
import { Avatar} from "@chakra-ui/react";
import { Code } from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react'

export default function CommentItem({ comment }) {
  const [user, setUser] = React.useState({});


const theme = extendTheme({
    textStyles: {
        h1: {
            fontWeight: 'bold',
        }
    }
})


  const getUser = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/user/${comment.userId}`,
        { withCredentials: true }
      );
      setUser(res.data[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="d-flex bg-white py-3 mb-3 mt-2 ms-1">
      <div>
        <Avatar name={user?.name} src={user?.avatar} />
      </div>
      <div className="ms-1 d-flex flex-column">
  <div className="ms-2">
        <span><b>{user?.name}</b></span>
        <span className="ms-2">
          {comment?.comment}
        </span>
        </div>
        <Code bg="white" color='green' className={comment?.code?"mt-1 ms-2 border rounded me-2":'undefined'}>
          {comment?.code}
        </Code> 
      </div>
    </div>
  );
}
