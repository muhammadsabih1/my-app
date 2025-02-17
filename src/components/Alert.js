import React from "react";

function Alert(props) {
  // Function to capitalize the alert type (e.g., "success" → "Success")
  const capitalize = (word) => {
    if (!word) return "";
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  // If alert is null, don't render anything (prevents errors)
  if (!props.alert) {
    return null;
  }

  // Handle closing the alert safely
  const handleClose = () => {
    if (props.showAlert) {
      props.showAlert(null, ""); // Reset alert state
    }
  };

  return (
    <div
      className={`alert alert-${props.alert.type} alert-dismissible fade show`}
      role="alert"
    >
      <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
      <button
        type="button"
        className="btn-close"
        onClick={handleClose} // Use React's state instead of Bootstrap's dismiss
        aria-label="Close"
      ></button>
    </div>
  );
}

export default Alert;
