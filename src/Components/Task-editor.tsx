import { inject, observer } from "mobx-react";
import React from "react";
import {TaskItem} from "../Models/TaskItem";
import TaskStore from "../Stores/TaskStore";

@inject('TaskStore')
@observer
export default class TaskEditor extends React.Component<{ taskStore: typeof TaskStore }> {
    textTask: any;

    addTask = (item : TaskItem) => {
        this.props.taskStore.createTask(item);        
    }

    render() {
        return (
            <React.Fragment>
                <div className="alert alert-primary">
                    <div className="d-inline col-4">
                        Total items: 
                        <span className="badge badge-info">{this.props.taskStore.getTaskCount.total}</span>                       
                    </div>
                    <div className="d-inline col-4">
                        Finished items: 
                        <span className="badge badge-info">{this.props.taskStore.getTaskCount.completed}</span>                        
                    </div>
                    <div className="d-inline col-4">
                        Unfinished items:
                        <span className="badge badge-info">{this.props.taskStore.getTaskCount.notCompleted}</span>                       
                    </div>
                </div>
                <div className="form-group"> 
                {/* Move this to component */}
                    <input type="text" className="form-control" ref={e => this.textTask = e} placeholder="Search..." />
                </div>
                <div className="form-group">
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            this.addTask({                                
                                title: this.textTask.value,
                                completed: true,
                            })
                            this.textTask.value = "";
                        }}
                    >
                        Add Task
                    </button>
                </div>
            </React.Fragment>
        )
    }

}




