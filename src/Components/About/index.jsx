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
                currently work as a React Web Developer at Sonny's Direct India
                Pvt. Ltd. I specialize in building dynamic and responsive web
                applications using React.js, JavaScript, and CSS, with a focus
                on creating seamless user experiences. I also enjoy working with
                Material-UI (MUI) to build intuitive and visually appealing
                interfaces.
              </p>
              <p>
                Beyond coding, I've earned the AZ-900 Azure certification, which
                reflects my interest in cloud computing and scalable web
                solutions. My journey from engineering to software development
                has shaped me into a problem-solver with a unique perspective,
                and I'm excited to keep growing and learning in this
                ever-evolving field.
              </p>
              Feel free to explore my portfolio to see some of the projects I've
              worked on!
            </CustomDescription>

            <CustomTitle>CURRENTLY</CustomTitle>
            <CustomDescription>
              Currently, I'm working as a React Web Developer at Sonny's Direct
              India Pvt. Ltd., a technology-driven organization serving the
              global car wash industry. Sonny's is a leading provider of car
              wash equipment, systems, and related solutions, with a presence
              across the United States and international markets.
              <p>
                {" "}
                As part of the development team, I work on web applications and
                modules that support the company's business operations, using
                technologies such as React.js, JavaScript, and MUI. My work has
                included contributing to projects such as Single Sign-On (SSO),
                a Short URL module, and CRM applications.
              </p>
            </CustomDescription>

            <CustomTitle>MY JOURNEY ⭐</CustomTitle>
            <CustomDescription>
              <List marker="disc">
                <ListItem >
                  I grew up in Gadhinglaj, Maharashtra, where my father is a
                  teacher and my mother is a homemaker.
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
                  After graduating, I began my professional journey as a
                  Software Engineer at SLK Software, marking my transition from
                  Mechanical Engineering into software development.
                </ListItem>
                <ListItem>
                  In August 2025, I joined Sonny's Direct India Pvt. Ltd. as a
                  React Web Developer, where I continue to build web
                  applications and grow as a software developer.
                </ListItem>
              </List>
            </CustomDescription>

            <CustomTitle>BEYOND CODE ⭐</CustomTitle>
            <CustomDescription>
              <List marker="disc">
                <ListItem>Playing video games</ListItem>
                <ListItem>Watching TV Series</ListItem>
                <ListItem>Going on long drives</ListItem>
                <ListItem>Watching movies (offcourse Marvel)</ListItem>
              </List>
            </CustomDescription>

            <CustomTitle>A FEW THINGS ABOUT ME ⭐</CustomTitle>
            <CustomDescription>
              <List marker="disc">
                <ListItem>
                  Mechanical Engineer Turned Software Developer
                </ListItem>
                <ListItem>I'm fascinated by time and how we spend it</ListItem>
                <ListItem>I pay attention to the little details</ListItem>
              </List>
            </CustomDescription>

            <CustomTitle>BEYOND THE HORIZON ⭐</CustomTitle>
            <CustomDescription>
              <List marker="disc">
                <ListItem>Travelling to space someday</ListItem>
                <ListItem>Exploring new places and cultures</ListItem>
                <ListItem>Becoming a little better every day</ListItem>
                <ListItem>
                  Revisiting places that hold nostalgic memories
                </ListItem>
              </List>
            </CustomDescription>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default About;
