import React, { useEffect } from "react";
import axios from "axios";
import { Text } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
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
    <div className="d-flex bg-white mb-2 mt-2 ms-1">
      <div>
        <Avatar name={user?.name} src={user?.avatar} />
        <Text textStyle='h1' className="ms-2">{user?.name}</Text>
      </div>
      <div className="ms-2">
        <Text bg="white" className="mt-2">
          {comment?.comment}
        </Text>
        <Code bg="white" className="mt-1 border rounded">
          {comment?.code}
        </Code>
      </div>
    </div>
  );
}
