import { Avatar, IconButton, Stack } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from '@mui/icons-material/GitHub';
import profileImage from "./../../Assets/Akshay.jpg";
import "./Home.css";

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
              alt="Patil Akshay"
              src={profileImage}
              sx={{ height: "180px", width: "180px" }}
              className="animate"
            />
            <span className="namePlate animate">PATIL AKSHAY</span>
            <a
              href="mailto:patil.akshay3@outlook.com"
              className="mail link animate"
            >
              akspatil303@gmail.com 📧
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
                , and currently work as a React Web Developer at{" "}
                <a
                  href="https://www.linkedin.com/company/sonny's-enterprises/jobs"
                  target="_blank"
                  className="link"
                  rel="noopener noreferrer"
                >
                  Sonny's Direct India Pvt. Ltd.
                </a>
              </span>
              <br />
            </div>

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
                href={"https://github.com/PatilAkshay-1"}
                target="_blank"
                sx={IconSx}
              >
                <GitHubIcon />
              </IconButton>
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
