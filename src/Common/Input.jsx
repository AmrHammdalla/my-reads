import React from "react";
class Input extends React.Component {
  render() {
    const {
      type,
      id,
      name,
      placeholder = "",
      list = "",
      onType,
      value,
      onBack
    } = this.props;

    return (
      <div id="Search_Tab" className="form-group">
        <button onClick={onBack}className="btn btn-sm btn-outline-secondary">
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
        <input
          className="form-control"
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          list={list}
          value={value}
          onChange={onType}
        ></input>
      </div>
    );
  }
}

export default Input;
