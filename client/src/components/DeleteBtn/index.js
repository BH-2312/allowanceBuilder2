import React from "react";
import "./style.css";
import Button from '@material-ui/core/Button';


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
       <Button variant="contained" color="secondary" className="deleteBtn" size="small">
        Delete
      </Button>
    </span>
  );
}

export default DeleteBtn;
