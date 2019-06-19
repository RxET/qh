import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles(theme => ({
  root: {
    // display: 'flex',
    float: 'right',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Dropdown = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  // render() {
    return (
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel shrink ref={inputLabel} htmlFor="outlined-age-native-simple">
          {props.label}
        </InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange('age')}
          input={
            <OutlinedInput name="age" labelWidth={labelWidth} id="outlined-age-native-simple" />
          }
        >

        {
          props.options.map((item, i) => (
            <option key={i} value={item.name}>
              {item.label}
            </option>
          ))
        }
        </Select>
      </FormControl>
    )
  // }
}

export default Dropdown
