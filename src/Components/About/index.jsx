import React from "react";
import { Box, Container, styled, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import "./About.css";

const CustomHeader = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  fontWeight: "bold",
  letterSpacing: "2px",
  fontFamily: "Montserrat",
  cursor: "pointer",
}));

const CustomTitle = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "bolder",
  letterSpacing: "3px",
  fontFamily: "Montserrat",
  cursor: "pointer",
}));

const CustomDescription = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "normal",
  letterSpacing: "1px",
  fontFamily: "Montserrat",
  margin: "20px",
}));

const MiniTitle = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  letterSpacing: "2px",
  fontFamily: "Montserrat",
  color: "grey",
  cursor: "pointer",
  marginTop: "30px",
}));

function About(props) {
  return (
    <React.Fragment>
      <Container maxWidth="false" sx={{ width: "900px" }}>
        <Box className="my-about-container-page">
          <Box className="my-about-title">
            <CustomHeader>ABOUT</CustomHeader>
            <MiniTitle>(IN ABOUT 300 WORDS)</MiniTitle>
          </Box>
          <Divider
            className="about-border"
            sx={{ border: "0.1px solid rgba(224, 161, 161, 0.5)" }}
          />
          <Box className="my-about-content">
            <CustomTitle>INTRO</CustomTitle>
            <CustomDescription>
              <b>Hello! I'm Akshay, a Frontend Web Developer.</b>
              <p>
                With a background in Mechanical Engineering and a passion for
                technology, I transitioned into software development and
                currently work as a Software Engineer at SLK Software Pvt. Ltd.
                I specialize in building dynamic and responsive web applications
                using React.js, JavaScript, and CSS, with a focus on creating
                seamless user experiences. I also enjoy working with Material-UI
                (MUI) components to craft intuitive and visually appealing
                interfaces.
              </p>
              Beyond coding, I've earned the AZ-900 Azure certification, which
              reflects my interest in cloud computing and scalable web
              solutions. My journey from engineering to software development has
              shaped me into a problem-solver with a unique perspective, and I'm
              excited to keep growing and learning in this ever-evolving field.
              Feel free to explore my portfolio to see some of the projects I've
              worked on!
            </CustomDescription>

            <CustomTitle>CURRENTLY</CustomTitle>
            <CustomDescription>
              Currently, I'm working at SLK Software as an Software Engineer. In
              here we build and provide services to various but primarily
              Manufacturing and Supply Chain industry clients.
            </CustomDescription>

            <CustomTitle>SOME HISTORY</CustomTitle>
            <CustomDescription>
              <List marker="disc">
                <ListItem>
                  My Father is a teacher and mother homemaker and lived in
                  Gadhinglaj, Maharashtra, India.
                </ListItem>
                <ListItem>
                  I completed my SSC and HSC study in the Science stream from
                  Gadhnglaj.
                </ListItem>
                <ListItem>
                  At 18, I moved to Kolhapur and started my Bachelor of
                  Engineering in Mechanical at KIT's College of Engineering,
                  Kolhapur.
                </ListItem>
                <ListItem>
                  At 22, I graduated and started my career with SLK Software.
                </ListItem>
              </List>
            </CustomDescription>

            <CustomTitle>I LIKE</CustomTitle>
            <CustomDescription>
              <List marker="disc">
                <ListItem>Playing video games</ListItem>
                <ListItem>Watching Series</ListItem>
                <ListItem>Driving</ListItem>
                <ListItem>Watching movies (offcourse Marvel)</ListItem>
              </List>
            </CustomDescription>

            {/* <CustomTitle>TRAVEL / GEOGRAPHY</CustomTitle>
            <CustomDescription>
              <List marker="disc">
                <ListItem>Item 1</ListItem>
                <ListItem>Item 2</ListItem>
                <ListItem>Item 3</ListItem>
                <ListItem>Item 4</ListItem>
                <ListItem>Item 5</ListItem>
              </List>
            </CustomDescription> */}

            <CustomTitle>FUN FACTS</CustomTitle>
            <CustomDescription>
              <List marker="disc">
                <ListItem>
                  Mechanical Engineer Turned Software Developer
                </ListItem>
                <ListItem>Time Enthusiast</ListItem>
                <ListItem>Mindful of Details</ListItem>
              </List>
            </CustomDescription>

            <CustomTitle>I DREAM OF</CustomTitle>
            <CustomDescription>
              <List marker="disc">
                <ListItem>Travelling space sometime</ListItem>
                <ListItem>
                  Spending leisure time just chillin and scroliing social-media
                </ListItem>
                <ListItem>Doing better everyday</ListItem>
                <ListItem>Visiting my old nosatalgic places</ListItem>
              </List>
            </CustomDescription>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default About;
