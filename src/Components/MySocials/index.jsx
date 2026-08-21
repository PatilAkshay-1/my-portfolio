import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";
import { IconButton, Stack } from "@mui/material";
import "./MySocials.css";
import GitHubIcon from '@mui/icons-material/GitHub';

const IconSx = {
  "&:hover": {
    color: "blue",
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    cursor: "pointer",
  },
};

function MySocials(props) {
  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          mx: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
        className="icon-wrapper"
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
    </>
  );
}

export default MySocials;
