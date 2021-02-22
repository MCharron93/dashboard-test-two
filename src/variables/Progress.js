import React from "react";
// reactstrap components
import { Progress } from "reactstrap";

class Progresses extends React.Component {
  render() {
    return (
      <>
        <div className="progress-wrapper">
          <div className="progress-info">
            <div className="progress-label">
              <span>Task completed</span>
            </div>
            <div className="progress-percentage">
              <span>60%</span>
            </div>
          </div>
          <Progress max="100" value="60" color="default" />
        </div>
        <div className="progress-wrapper">
          <div className="progress-info">
            <div className="progress-label">
              <span>Task completed</span>
            </div>
            <div className="progress-percentage">
              <span>60%</span>
            </div>
          </div>
          <Progress max="100" value="60" />
        </div>
        <div className="progress-wrapper">
          <div className="progress-info">
            <div className="progress-label">
              <span>Task completed</span>
            </div>
            <div className="progress-percentage">
              <span>60%</span>
            </div>
          </div>
          <Progress max="100" value="60" color="secondary" />
        </div>
        <div className="progress-wrapper">
          <div className="progress-info">
            <div className="progress-label">
              <span>Task completed</span>
            </div>
            <div className="progress-percentage">
              <span>60%</span>
            </div>
          </div>
          <Progress max="100" value="60" color="info" />
        </div>
        <div className="progress-wrapper">
          <div className="progress-info">
            <div className="progress-label">
              <span>Task completed</span>
            </div>
            <div className="progress-percentage">
              <span>60%</span>
            </div>
          </div>
          <Progress max="100" value="60" color="success" />
        </div>
        <div className="progress-wrapper">
          <div className="progress-info">
            <div className="progress-label">
              <span>Task completed</span>
            </div>
            <div className="progress-percentage">
              <span>60%</span>
            </div>
          </div>
          <Progress max="100" value="60" color="danger" />
        </div>
        <div className="progress-wrapper">
          <div className="progress-info">
            <div className="progress-label">
              <span>Task completed</span>
            </div>
            <div className="progress-percentage">
              <span>60%</span>
            </div>
          </div>
          <Progress max="100" value="60" color="warning" />
        </div>
      </>
    );
  }
}

export default Progresses;