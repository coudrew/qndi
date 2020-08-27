import React, { Component } from "react";
import { SET_CAT_BREED, CAT_BREED_FOREST } from "../../actions";

class Main extends Component {
  constructor() {
    super();
    this.input = React.createRef();
  }

  setBreed = () => {
    const { dispatch } = this.props;
    const breed = this.input.current.value;
    dispatch({
      type: SET_CAT_BREED,
      breed,
    });
  };

  render() {
    const { cat, dispatch } = this.props;

    return (
      <div>
        Breed: <input type="text" ref={this.input} />
        <button onClick={this.setBreed}>set breed</button>
        <br />
        <button
          onClick={() =>
            dispatch({
              type: CAT_BREED_FOREST,
            })
          }
        >
          auto set breed to Forest
        </button>
        <p>Current cat breed: {cat.breed}</p>
      </div>
    );
  }
}

export default Main;
