import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: "abc1", title: "Cong Anh 1", salary: 1000 },
      { id: "abc2", title: "Cong Anh 2", salary: 1500 },
      { id: "abc3", title: "Cong Anh 3", salary: 2000 },
    ],
  };

  addNewJob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  deleteJob = (job) => {
    let currentJob = this.state.arrJobs;
    currentJob = currentJob.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJob,
    });
  };

  componentDidMount() {
    console.log("did mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("did update", prevState, "current state:", this.state);
  }

  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent jobs={this.state.arrJobs} deleteJob={this.deleteJob} />
      </>
    );
  }
}
export default MyComponent;
