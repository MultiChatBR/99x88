import React from "react";
import Typography from "@material-ui/core/Typography";

const Title = props => {
  return (
    <Typography component="h2" variant="h6" color="#29A71A" gutterBottom>
      {props.children}
    </Typography>
  );
};

export default Title;
