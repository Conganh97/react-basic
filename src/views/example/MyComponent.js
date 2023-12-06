import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };

  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert("Click submit");
  };

  render() {
    return (
      <>
        {console.log(">>> render", this.state)}
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleChangeFirstName(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleChangeLastName(event)}
          />
          <br />
          <input type="submit" onClick={(event) => this.handleSubmit(event)} />
        </form>
        <ChildComponent name={"child one"} />
        <ChildComponent name={"child two"} />
        <ChildComponent name={"child three"} />
      </>
    );
  }
}
export default MyComponent;
