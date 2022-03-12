import React from "react";
import Category from "../Common/Category";
import Input from "../Common/Input";
import NavBar from "../Common/NavBar";
import { search } from "../services/BooksAPI";
import { getAll,update } from "../services/BooksAPI";
class Search extends React.Component {
  state = {
    Matched_Results: [],
    value: "",
  };
  //----------------------------------------------------------//
  onType = ({ currentTarget: input }) => {
    //-------------------------//
    let { value } = { ...this.state };
    value = input.value;
    this.setState({ value });
    //-------------------------//
    let Matched_Results = [...this.state.Matched_Results];
    input.value.length === 0
      ? this.setState({ Matched_Results:[] })
      : search(input.value).then((Books) => {
          Books.error ? (Matched_Results=[]) : (Matched_Results = [...Books]);
          this.setState({Matched_Results})
          if (Matched_Results) {
            Matched_Results.forEach((Matched_Book)=>{
              Matched_Book.shelf="none"
            })
            let Books = [];
            getAll().then((books) => {
              Books = books;
              for (let Book of Books) {
                for (let Matched_Book of Matched_Results) {
                  if (Matched_Book.id === Book.id) {
                    Matched_Book.shelf = Book.shelf;
                  }
                }
              }
              this.setState({ Matched_Results });
            });
          }
        });
  };
  //-----------------------------------------------------------//
  handleChange = (Book_ID, { target: selected }) => {
    //let { Currently_Reading, Want_To_Read, Read } = { ...this.state };
    //-----------------------------//
    let Matched_Results = [...this.state.Matched_Results];
    let Book = Matched_Results.filter((Matched_Book) => Matched_Book.id === Book_ID)[0];
    const shelf = selected.name;
    Book.shelf = shelf;
    //----------------------------//
    update(Book, shelf);
    this.setState({Matched_Results})
  };
  //---------------------------------------------------------------------------//
  onBack=()=>{
    this.props.history.push("/")
  }
  //---------------------------------------------------------------------------//

  render() {
    const { Matched_Results, value } = { ...this.state };
    return (
      <React.Fragment>
        <NavBar />
        <Input
          id="Search"
          name="Search"
          type="text"
          list="examples"
          placeholder={"Search"}
          value={value}
          onType={this.onType}
          onBack={this.onBack}
        />
        <Category
          Books_Rendered={Matched_Results}
          id="Box1"
          Category_Name="Matched Results"
          handleChange={this.handleChange}
        />
        {Matched_Results.length === 0 && (
          <div>
            <p className="text-secondary">... No Results For Current Search</p>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Search;
