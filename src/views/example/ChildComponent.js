import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  handleDelete = (job) => {
    this.props.deleteJob(job);
  };
  render() {
    const { jobs } = this.props;
    const { showJobs } = this.state;

    return (
      <>
        {!showJobs ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="jobs">
              {jobs.map((item, index) => {
                if (item.salary > 1000) {
                  return (
                    <div key={item.id}>
                      {item.title} - {item.salary}$ -
                      <span onClick={() => this.handleDelete(item)}> x</span>
                    </div>
                  );
                }
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}
// const ChildComponent = (props) => {
//   console.log(">>>> props", props);
//   const { jobs } = props;

//   return (
//     <>
//       <div className="jobs">
//         {jobs.map((item, index) => {
//           if (item.salary > 1000) {
//             return (
//               <div key={item.id}>
//                 {item.title} - {item.salary}$
//               </div>
//             );
//           }
//         })}
//       </div>
//     </>
//   );
// };
export default ChildComponent;
