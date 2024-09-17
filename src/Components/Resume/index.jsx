import React, { useRef } from "react";
import {
  Box,
  Container,
  Divider,
  keyframes,
  Link,
  styled,
  Typography,
} from "@mui/material";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import VerifiedIcon from "@mui/icons-material/Verified";
import "./Resume.css";
import Skill from "../Skill";

const fadeIn = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  60% {
    transform: scale(1.05);
    opacity: 1;
  }
  80% {
    transform: scale(0.95);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const CustomHeader = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  fontWeight: "bold",
  letterSpacing: "2px",
  fontFamily: "Montserrat",
  cursor: "pointer",
}));

const MiniTitles = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  letterSpacing: "2px",
  fontFamily: "Montserrat",
  color: "black",
  cursor: "pointer",
  opacity: 0,
  animation: `${fadeIn} 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) forwards`,
  animationDelay: "0s",

  "&:hover": {
    color: "blue",
  },

  "&:nth-child(2)": {
    animation: `${fadeIn} 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) forwards`,
    animationDelay: "0.2s",
  },
  "&:nth-child(3)": {
    animation: `${fadeIn} 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) forwards`,
    animationDelay: "0.4s",
  },
  "&:nth-child(4)": {
    animation: `${fadeIn} 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) forwards`,
    animationDelay: "0.6s",
  },
  "&:nth-child(5)": {
    animation: `${fadeIn} 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) forwards`,
    animationDelay: "0.8s",
  },
  "&:nth-child(6)": {
    animation: `${fadeIn} 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) forwards`,
    animationDelay: "1s",
  },
}));

const CustomTitle = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "bolder",
  letterSpacing: "3px",
  fontFamily: "Montserrat",
  cursor: "pointer",
  textAlign: "center",
  // paddingTop: "20px",
}));

const CustomDescription = styled(Typography)(
  ({ paddingTop, paddingBottom }) => ({
    fontSize: "14px",
    fontWeight: "normal",
    letterSpacing: "1px",
    fontFamily: "Montserrat",
    margin: "20px",
    paddingTop: paddingTop || 0,
    paddingBottom: paddingBottom || 0,
  })
);

const ExpTitle = styled(Typography)(() => ({
  fontSize: "12px",
  fontWeight: "900",
  letterSpacing: "3px",
  fontFamily: "Montserrat",
}));

const Duration = styled(Typography)(() => ({
  fontSize: "12px",
  letterSpacing: "3px",
  fontFamily: "Montserrat",
  color: "grey",
  paddingTop: "5px",
}));

const CustomLink = styled(Link)(() => ({
  textDecorationColor: "grey",
  textDecorationLine: "underline",
  textDecorationStyle: "dotted",
  textDecorationThickness: "1.4px",
  textUnderlineOffset: "3px",
}));

const Resume = () => {
  const sectionRefs = {
    Objectives: useRef(null),
    Summary: useRef(null),
    Skills: useRef(null),
    Experience: useRef(null),
    Certifications: useRef(null),
    Education: useRef(null),
  };

  const scrollToSection = (sectionKey) => {
    const section = sectionRefs[sectionKey].current;
    if (section) {
      const offsetTop = section.offsetTop;
      const offsetHeight = window.innerHeight / 6;
      window.scrollTo({
        top: offsetTop - offsetHeight,
        behavior: "smooth",
      });
    }
  };

  const data = [
    {
      skill: "React",
      rating: 4 / 5,
    },
    {
      skill: "Javascript",
      rating: 3.5 / 5,
    },
    {
      skill: "Github",
      rating: 3 / 5,
    },
    {
      skill: "Node.js",
      rating: 3 / 5,
    },
    {
      skill: "Typescript",
      rating: 3 / 5,
    },
    {
      skill: "Azure",
      rating: 2 / 5,
    },
  ];

  return (
    <React.Fragment>
      <Container maxWidth="false" sx={{ width: "900px" }}>
        <Box className="resume-container-page">
          <Box className="resume-title">
            <CustomHeader>RESUME</CustomHeader>
          </Box>
          <Box className="resume-parts">
            <MiniTitles onClick={() => scrollToSection("Objectives")}>
              OBJECTIVES
            </MiniTitles>
            <MiniTitles onClick={() => scrollToSection("Summary")}>
              PROFESSIONAL SUMMARY
            </MiniTitles>
            <MiniTitles onClick={() => scrollToSection("Skills")}>
              SKILLS
            </MiniTitles>
            <MiniTitles onClick={() => scrollToSection("Experience")}>
              EXPERIENCE
            </MiniTitles>
            <MiniTitles onClick={() => scrollToSection("Certifications")}>
              CERTIFICATIONS
            </MiniTitles>
            <MiniTitles onClick={() => scrollToSection("Education")}>
              EDUCATION
            </MiniTitles>
          </Box>
          <Divider
            className="resume-border"
            sx={{ border: "0.1px solid rgba(224, 161, 161, 0.5)" }}
          />
          <Box className="resume-content">
            <CustomTitle ref={sectionRefs.Objectives}>OBJECTIVES</CustomTitle>
            <CustomDescription>
              <List marker="disc">
                <ListItem>
                  {" "}
                  Self-Motivated Frontend Developer: I am a proactive,
                  detail-oriented frontend developer with a strong background in
                  building dynamic and responsive web applications. My expertise
                  lies in React.js, JavaScript, CSS, and Material-UI, where I
                  focus on delivering seamless user experiences and visually
                  appealing interfaces.
                </ListItem>
                <ListItem>
                  Mechanical Engineer Turned Software Developer: With a
                  foundation in mechanical engineering, I bring a unique
                  perspective to problem-solving and project development. This
                  blend of disciplines enables me to approach software
                  challenges with structured, innovative solutions.
                </ListItem>
                <ListItem>
                  Cloud Enthusiast: Having earned the AZ-900 Azure
                  certification, I’m passionate about leveraging cloud
                  technologies to create scalable, efficient web solutions, with
                  a long-term goal of deepening my knowledge in cloud
                  infrastructure.
                </ListItem>
                <ListItem>
                  Effective Collaborator: Known for my dedication, work ethic,
                  and adaptability, I excel in collaborative environments where
                  communication, critical thinking, and time management are key
                  to delivering successful projects.
                </ListItem>
                <ListItem>
                  Continuous Learner: I am committed to personal growth and
                  learning, constantly exploring new technologies and best
                  practices to stay at the forefront of web development and
                  software engineering.
                </ListItem>
              </List>
            </CustomDescription>
            <CustomTitle ref={sectionRefs.Summary}>
              PROFESSIONAL SUMMARY
            </CustomTitle>
            <CustomDescription>
              <List marker="disc">
                <ListItem>
                  Frontend Architect and Developer: Skilled in designing and
                  developing scalable, dynamic web applications using React.js,
                  JavaScript, CSS, and Material-UI, with a focus on delivering
                  intuitive user interfaces and seamless experiences.
                </ListItem>
                <ListItem>
                  Collaborative Team Player: Experienced in collaborating with
                  cross-functional teams and stakeholders to gather
                  requirements, develop solutions, and deliver projects. I
                  thrive in team environments where communication,
                  problem-solving, and collaboration are key to successful
                  outcomes.
                </ListItem>
                <ListItem>
                  Agile Methodology: Proficient in managing projects using agile
                  methodology, specifically the SCRUM framework, while applying
                  best practices such as business-driven development (BDD) and
                  test-driven development (TDD) to ensure quality and
                  efficiency.
                </ListItem>
                <ListItem>
                  Cloud-Enabled Development: Certified in Azure (AZ-900), with a
                  growing interest in leveraging cloud technologies such as PaaS
                  and IaaS to build scalable, secure, and high-performing web
                  solutions that meet both current and future business goals.
                </ListItem>
                <ListItem>
                  Innovative Problem-Solver: Known for analyzing and optimizing
                  technology stacks, improving performance, and adhering to
                  modern software development principles, including scalability,
                  reliability, and operational efficiency.
                </ListItem>
                <ListItem>
                  Code Quality and Best Practices: Focused on delivering clean,
                  maintainable code and implementing best practices across
                  development workflows. I support business continuity by
                  adopting standards that promote long-term project
                  sustainability.
                </ListItem>
                <ListItem>
                  Comprehensive Documentation and SDLC: Adept at generating
                  documentation for business requirements, technical
                  specifications, and project guidelines while providing
                  development support throughout the entire software development
                  lifecycle (SDLC).
                </ListItem>
              </List>
            </CustomDescription>
            <CustomTitle ref={sectionRefs.Skills}>SKILLS</CustomTitle>
            <CustomDescription sx={{ paddingTop: 1, paddingBottom: 1 }}>
              <Skill skills={data} />
            </CustomDescription>
            <CustomTitle ref={sectionRefs.Experience}>EXPERIENCE</CustomTitle>
            <CustomDescription sx={{ paddingTop: 2, paddingBottom: 2 }}>
              <ExpTitle>
                SLK - SOFTWARE - ENGINEER | ASSOCIATE - SOFTWARE ENGINEER |
                SOFTWARE - TRAINEE
              </ExpTitle>
              <Duration>DEC 2020 - TILL NOW</Duration>
              <List marker="disc">
                <ListItem>
                  Developed Web applications using ReactJS, Redux, HTML5, CSS.
                </ListItem>
                <ListItem>
                  Researched, analyzed and modified existing systems.
                </ListItem>
                <ListItem>Supported back-office desktop applications</ListItem>
                <ListItem>
                  Debugging and fixing issues in existing applications.
                </ListItem>
                <ListItem>
                  Developed test plans, identified issues, and modified
                  programs.
                </ListItem>
              </List>
            </CustomDescription>

            <CustomTitle ref={sectionRefs.Certifications}>
              CERTIFICATIONS
            </CustomTitle>
            <CustomDescription sx={{ paddingTop: 2, paddingBottom: 2 }}>
              <ExpTitle>
                AZ - 900 : AZURE FUDAMENTALS{" "}
                <CustomLink
                  target="_blank"
                  href="https://learn.microsoft.com/en-us/users/akshaypatil-3963/credentials/6951e180296b4a9f?ref=https%3A%2F%2Fwww.linkedin.com%2F"
                >
                  <VerifiedIcon
                    sx={{ color: "blue", cursor: "pointer", fontSize: "15px" }}
                  />
                </CustomLink>
              </ExpTitle>
              <Duration>MICROSOFT - FEB 2024</Duration>
            </CustomDescription>
            <CustomDescription>
              <ExpTitle>
                UDEMY - THE COMPLETE REACT DEVELOPER COURSE{" "}
                <CustomLink
                  target="_blank"
                  href="https://www.udemy.com/certificate/UC-267e86cb-aa38-480d-a527-9490725bf6c5/"
                >
                  <VerifiedIcon
                    sx={{ color: "blue", cursor: "pointer", fontSize: "15px" }}
                  />
                </CustomLink>
              </ExpTitle>
              <Duration>UDEMY - OCT 2023</Duration>
            </CustomDescription>

            <CustomTitle
              ref={sectionRefs.Education}
              sx={{ paddingTop: 2, paddingBottom: 2 }}
            >
              EDUCATION
            </CustomTitle>
            <CustomDescription>
              <ExpTitle>Bachelor of Engineer - Mechanical</ExpTitle>
              <Duration>KIT's College of Engineering, Kolhapur, 2020</Duration>
            </CustomDescription>
            <CustomDescription>
              <ExpTitle>Higher Secondary School - Science</ExpTitle>
              <Duration>
                R. K. Junior College of Sceince, Gadhinglaj, 2016
              </Duration>
            </CustomDescription>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Resume;
