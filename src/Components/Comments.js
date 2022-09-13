import React, { useEffect } from "react"
import { Textarea } from "@chakra-ui/react";
import CodeIcon from "@mui/icons-material/Code";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import CommentItem from "./CommentItem";

export default function Comments({ project }) {
  const [code, setCode] = React.useState(true);
  const [comment, setComment] = React.useState("");
  const [coding, setCoding] = React.useState("");
  const [allComments, setAllComments] = React.useState([]);
  const location = useLocation();
  const projectid = location.pathname.split("/")[2];
  

  const leaveComment = async () => {
    setComment("");
    setCoding("");
    try {
      const newComment = await axios.post(
        `http://localhost:8080/api/project/addComment/${projectid}`,
        {
          comment: comment,
          code: coding,
        }, {withCredentials: true}
      );
      getComments();
    } catch (err) {
      console.log(err);
    }
  }

  const getComments = async () => {
    const res = await axios.get(
      `http://localhost:8080/api/project/getComments/${projectid}`,
      { withCredentials: true }
    );
    setAllComments(res.data);
  };
  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex w-75 flex-column">
      <div className="bg-white rounded mb-2 pt-2 ps-1">
            {allComments?.map((comment) => {
                return <CommentItem key={comment.commentId} comment={comment}/>
            })}
        </div>
        <CodeIcon
          style={{ fontSize: 40 }}
          className="align-self-end me-2"
          sx={{ color: "#FFC947" }}
          onClick={() => {
            setCode(!code);
          }}
        />
        <Textarea
          placeholder="Leave a comment"
          bg="white"
          resize={"none"}
          marginBottom="2"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <Textarea
          placeholder="Write code"
          bg="white"
          resize={"none"}
          marginTop="1"
          display={code && "none"}
          className="mb-2 codeFont"
          value={coding}
          onChange={(e) => setCoding(e.target.value)}
        />
        <Button colorScheme="teal" variant="solid" className="mb-2" onClick={leaveComment}>
          Comment
        </Button>
        
      </div>
    </div>
  );
}
