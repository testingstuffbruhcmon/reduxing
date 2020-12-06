import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function App(props) {
  console.log(props);
  return (
    <div
      onClick={(e) => {
        props.addName(e, "random LUL");
      }}
    >
      OK LETS TEST STUFF
      {props.names.length > 0 ? <List names={props.names} /> : ""}
    </div>
  );
}

const List = ({ names }) => {
  let Mapped = names.map((name) => {
    return name;
  });
  return <div>{Mapped}</div>;
};

const mapStateToProps = ({ names, items }, ownProps) => {
  return {
    everyProp: ownProps,
    names,
    items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addName: (e, newName) => {
      console.log(newName);
      dispatch({ type: "ADD_NAME", payload: newName });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
