import React from "react";
import "./Demo.css";

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
            <button className="btn-show" onClick={() => this.handleShowHide()}>
              Show
            </button>
          </div>
        ) : (
          <>
            <div className="jobs">
              {jobs.map((item, index) => {
                if (item.salary > 1000) {
                  return (
                    <div key={item.id}>
                      {item.title} - {item.salary}$ - <span> </span>
                      <button onClick={() => this.handleDelete(item)}>
                        Delete
                      </button>
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
