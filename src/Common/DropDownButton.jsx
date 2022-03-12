import React from "react";
class DropDownButton extends React.Component {
  render() {
    const { Book_Id, handleChange,Book_Shelf } = this.props;
    return (
      <React.Fragment>
        <button
          className="btn btn-danger Drop_Down_Button dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li style={{ cursor: "pointer" }}>
            <button className="dropdown-item disabled">Move To...</button>
          </li>
          <li
            onClick={(e) => handleChange(Book_Id, e)}
            style={{ cursor: "pointer" }}
          >
            <button className="dropdown-item" name="currentlyReading">
              Currently Reading
              {Book_Shelf === "currentlyReading" && (
                <i className="fa fa-check" aria-hidden="true"></i>
              )}
            </button>
          </li>
          <li
            onClick={(e) => handleChange(Book_Id, e)}
            style={{ cursor: "pointer" }}
          >
            <button className="dropdown-item" name="wantToRead">
              Want To Read
              {Book_Shelf === "wantToRead" && (
                <i className="fa fa-check" aria-hidden="true"></i>
              )}
            </button>
          </li>
          <li
            onClick={(e) => handleChange(Book_Id, e)}
            style={{ cursor: "pointer" }}
          >
            <button className="dropdown-item" name="read">
              Read
              {Book_Shelf === "read" && (
                <i className="fa fa-check" aria-hidden="true"></i>
              )}
            </button>
          </li>
          <li
            onClick={(e) => handleChange(Book_Id, e)}
            style={{ cursor: "pointer" }}
          >
            <button className="dropdown-item" name="none">
              None
              {Book_Shelf === "none" && (
                <i className="fa fa-check" aria-hidden="true"></i>
              )}
            </button>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
export default DropDownButton;
