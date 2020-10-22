import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';



export default function completeCheckbox() {
    const [state, setState] = React.useState({
        checkedA: true,
      });

      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

  return (
    <div>
     <FormControlLabel
        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label="Secondary"
      />
      </div>
        );
    }