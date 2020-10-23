import React from "react";
import "./style.css";
import Button from '@material-ui/core/Button';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ChooseBtn(props) {

  return (
    <span  {...props} role="button" tabIndex="0">
       <Button variant="contained"color="primary" className="chooseBtn" size="small">
        Choose
      </Button>
    </span>
  );
}

export default ChooseBtn;
