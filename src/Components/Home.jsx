import React from "react";
import { update, getAll } from "../services/BooksAPI";
import { Link } from "react-router-dom";
import Category from "../Common/Category";
import NavBar from "../Common/NavBar";
class Home extends React.Component {
  state = {
    Books: [],
    Currently_Reading: [],
    Want_To_Read: [],
    Read: [],
  };
  componentDidMount() {
    let { Books } = { ...this.state };
    getAll().then((books) => {
      Books = books;
      this.setState({ Books });
      this.Generate_Shelves(Books);
    });
  }
  Generate_Shelves = (Books) => {
    let { Currently_Reading, Want_To_Read, Read } = { ...this.state };
    //----------------------
    Currently_Reading = Books.filter(
      (Book) => Book.shelf === "currentlyReading"
    );
    //----------------------
    Want_To_Read = Books.filter((Book) => Book.shelf === "wantToRead");
    //-----------------------
    Read = Books.filter((Book) => Book.shelf === "read");
    //-----------------------
    this.setState({ Currently_Reading, Want_To_Read, Read });
  };
  //-------------------------------------------------------------------------
  Update_Shelves = (List_Of_IDS, Books) => {
    let Updated_List = [];
    for (let ID of List_Of_IDS) {
      Updated_List.push(
        Books.filter((Book) => {
          return Book.id === ID;
        })[0]
      );
    }
    return Updated_List;
  };
  //-------------------------------------------------------------------------
  handleChange = (Book_ID, { target: selected }) => {
    let { Currently_Reading, Want_To_Read, Read } = { ...this.state };
    //-----------------------------//
    let Books = [...this.state.Books];
    let Book = Books.filter((b) => b.id === Book_ID)[0];
    const shelf = selected.name;
    Book.shelf = shelf;
    //----------------------------//
    update(Book, shelf).then((Obj) => {
      const Currently_Reading_IDS = Obj.currentlyReading;
      const Want_To_Read_IDS = Obj.wantToRead;
      const Read_IDS = Obj.read;
      Currently_Reading = this.Update_Shelves(Currently_Reading_IDS, Books);
      Want_To_Read = this.Update_Shelves(Want_To_Read_IDS, Books);
      Read = this.Update_Shelves(Read_IDS, Books);
      //--------------------------//
      getAll().then((books) => {
        Books = books;
        this.setState({ Currently_Reading, Want_To_Read, Read, Books });
      });
    });
  };
  //-------------------------------------------------------------------------
  render() {
    const { Currently_Reading, Want_To_Read, Read } = { ...this.state };
    return (
      <React.Fragment>
        <NavBar />
        <Category
          Books_Rendered={Currently_Reading}
          id="Box1"
          Category_Name="Currently Reading"
          handleChange={this.handleChange}
        />
        <Category
          Books_Rendered={Want_To_Read}
          id="Box2"
          Category_Name="Want To Read"
          handleChange={this.handleChange}
        />
        <Category
          Books_Rendered={Read}
          id="Box3"
          Category_Name="Read"
          handleChange={this.handleChange}
        />
        <button id="Search_Button" className="btn btn-danger">
          <Link
            to="/Search"
            style={{ color: "white", textDecorationLine: "none" }}
          >
            +
          </Link>
        </button>
      </React.Fragment>
    );
  }
}

export default Home;
