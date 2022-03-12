import React from "react";
import DropDownButton from "./DropDownButton";
class BooksField extends React.Component {
  render() {
    const { id, Books_Rendered,handleChange } = this.props;
    return (
      <div id={id + "_Images"}>
        {Books_Rendered.map((Book) => (
          <div key={Book.id}className="Book_Wrapper">
            <img
              className="img-thumbnail"
              src={(Book.imageLinks)?Book.imageLinks.smallThumbnail:""}
              alt={(Book.title)}
              width="100"
              height="50"
            ></img>
            <DropDownButton handleChange={handleChange} Book_Id={Book.id} Book_Shelf={Book.shelf}/>
            
            <p id="Book_Title">{Book.title}</p>
            {(Book.authors)?Book.authors.map(author=><p key={author} id="Book_Authors">{author}</p>):""}
          </div>
        ))}
      </div>
    );
  }
}

export default BooksField;
