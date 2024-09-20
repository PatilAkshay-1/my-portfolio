import { Avatar, Button, IconButton, Stack } from "@mui/material";
import profileImage from "./../../Assets/profile_photo.PNG";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";
import "./Home.css";
import { Link } from "react-router-dom";

const IconSx = {
  "&:hover": {
    color: "blue",
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    cursor: "pointer",
  },
};

const Home = ({ children }) => {
  return (
    <>
      <div className="home-container">
        <div className="container">
          <div className="row">
            <Avatar
              alt="Akshay Patil"
              src={profileImage}
              sx={{ height: "180px", width: "180px" }}
              className="animate"
            />
            <span className="namePlate animate">AKSHAY PATIL</span>
            <a
              href="mailto:patil.akshay3@outlook.com"
              className="mail link animate"
            >
              patil.akshay3@outlook.com 📧
            </a>
            <hr className="border" />

            <div className="about-container animate">
              <h2 className="about-title">About</h2>
              <span className="about">
                Hi👋, I'm Akshay. I enjoy building things. I graduated with a BE
                in Mechanical Engineering from{" "}
                <a
                  href="https://www.kitcoek.in/"
                  target="_blank"
                  className="link"
                  rel="noopener noreferrer"
                >
                  KIT, Kolhapur
                </a>
                , and currently work as a Software Engineer at{" "}
                <a
                  href="https://slksoftware.com/"
                  target="_blank"
                  className="link"
                  rel="noopener noreferrer"
                >
                  SLK Software Pvt. Ltd
                </a>
              </span>
              <br />
              <div className="button-container">
                <Link to={"/about"}>
                  <Button variant="outlined" size="large" className="button">
                    KNOW MORE
                  </Button>
                </Link>
              </div>
            </div>
            <hr className="border" />

            <Stack
              direction={"row"}
              sx={{
                width: "100%",
                justifyContent: "space-evenly",
                mx: "auto",
                marginTop: "20px",
                marginBottom: "20px",
              }}
              className="animate-slide"
            >
              <IconButton
                href={"https://www.linkedin.com/in/akshay-patil-67a89a13b"}
                target="_blank"
                sx={IconSx}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                href={"https://x.com/Iam_PatilAkshay"}
                target="_blank"
                sx={IconSx}
              >
                <XIcon />
              </IconButton>
              <IconButton
                href={"mailto:akspatil303@gmail.com"}
                target="_blank"
                sx={IconSx}
              >
                <EmailIcon />
              </IconButton>
            </Stack>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Home;
