import {
  Box,
  CircularProgress,
  ImageList,
  ImageListItem,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

const CustomSkillTitle = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontFamily: "inherit",
  cursor: "pointer",
}));
const CustomeNote = styled(Typography)(() => ({
  fontSize: "13px",
  fontFamily: "Montserrat",
  color: "grey",
  textAlign: "center",
}));

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{ color: "text.secondary" }}
        >
          {`${props.value}%`}
        </Typography>
      </Box>
    </Box>
  );
}

const Skill = (props) => {
  return (
    <React.Fragment>
      <ImageList cols={5}>
        {props.skills.map((item) => (
          <ImageListItem
            sx={{
              width: 120,
              border: "0.1px solid rgba(224, 161, 161, 0.5)",
              borderRadius: 2,
              padding: 1,
              alignItems: "center",
            }}
            key={item.skill}
          >
            <CircularProgressWithLabel
              variant="determinate"
              value={item.rating * 100}
            />
            <CustomSkillTitle>{item.skill}</CustomSkillTitle>
          </ImageListItem>
        ))}
      </ImageList>
      <CustomeNote>(Skills are being refined)</CustomeNote>
    </React.Fragment>
  );
};

export default Skill;
