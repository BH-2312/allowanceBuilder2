import React from "react";
import "./style.css";
import Button from '@material-ui/core/Button';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ChooseBtn(props) {

  return (
    <span className="chooseBtn" {...props} role="button" tabIndex="0">
       <Button variant="contained"color="primary">
        Choose
      </Button>
    </span>
  );
}

export default ChooseBtn;
