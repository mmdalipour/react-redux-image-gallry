import React from "react";

// components
import Alert from "react-bootstrap/Alert";

const AlertDefault = ({ error }) => {
  return <Alert variant="danger">{error.toString()}</Alert>;
};

export default AlertDefault;
