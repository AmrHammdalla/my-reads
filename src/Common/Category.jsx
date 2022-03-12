import React from "react";
import BooksField from "./BooksField";
class Category extends React.Component {
  render() {
    const { Books_Rendered, id, Category_Name,handleChange } = { ...this.props };
    return (
      <div id={id}>
        <h3>{Category_Name}</h3>
        <div>
          <hr></hr>
          <hr></hr>
        </div>
        <BooksField
          Books_Rendered={Books_Rendered}
          id={id}
          handleChange={handleChange}
        />
      </div>
    );
  }
}

export default Category;
