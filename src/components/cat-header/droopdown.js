import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "../css/infoHeader.css";
import { list } from "../catList";
import { Link } from "react-router-dom";
import history from "../../history/history";
const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class SimpleSelect extends React.Component {
  state = {
    age: "",
    name: "hai",
    labelWidth: 0,
    select: "None"
  };

  componentDidMount() {
    // this.setState({
    //     labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    // });
  }

  componentWillReceiveProps(props) {
    if (!props.cat) {
      this.setState({ select: "None" });
      props.val(true);
    }
  }

  handleChange = event => {
    this.setState({ select: event.target.value });
    if (event.target.value == "None") {
      debugger;
      history.push("/");
    } else {
      history.push("/" + event.target.value + "_products");
    }
  };

  render() {
    console.log(this.props);

    const { classes } = this.props;
    let catList = list.map((el, i) => {
      return <MenuItem value={el}>{el}</MenuItem>;
    });

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl
          variant="outlined"
          className={classes.formControl}
          className="dropdown-formcontrol"
        >
          <Select
            value={this.state.select}
            onChange={this.handleChange}
            className="dropdown-select"
            name="Categories"
            // displayEmpty
          >
            <MenuItem value="None">Categories</MenuItem>
            {catList}
          </Select>
        </FormControl>
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSelect);
