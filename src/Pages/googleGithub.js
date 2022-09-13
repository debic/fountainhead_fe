import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { useUserContext } from "../Context/UserContext";


export default function GoogleGithub() {

    const {gitHubAuth, gooleAuth}= useUserContext()


  return (
    <div className="d-flex justify-content-evenly">
      <GoogleIcon
        onClick={gooleAuth}
        style={{ fontSize: 50, color: "white" }}
      />
      <GitHubIcon
        onClick={gitHubAuth}
        style={{ fontSize: 50, color: "white" }}
      />
    </div>
  );
}
