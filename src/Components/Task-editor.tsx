import { inject, observer } from "mobx-react";
import React from "react";
import TaskItem from "../Models/TaskItem";
import TaskStore from "../Stores/TaskStore";

@inject('TaskStore')
@observer
export default class TaskEditor extends React.Component<{ taskStore: typeof TaskStore }> {
    textTask: any;

    addTodo = (arg0: { title: string; completed: boolean; }) => {
        debugger;
        let item: TaskItem = {            
            title: arg0.title,
            completed: arg0.completed
        }
        this.props.taskStore.addTask(item);
    }

    render() {
        return (
            <React.Fragment>
                <div className="alert alert-primary">
                    <div className="d-inline col-4">
                        Total items: &nbsp;
                        <span className="badge badge-info">{this.props.taskStore.getTaskCount.total}</span>                       
                    </div>
                    <div className="d-inline col-4">
                        Finished items: &nbsp;
                        <span className="badge badge-info">{this.props.taskStore.getTaskCount.completed}</span>                        
                    </div>
                    <div className="d-inline col-4">
                        Unfinished items: &nbsp;
                        <span className="badge badge-info">{this.props.taskStore.getTaskCount.notCompleted}</span>                       
                    </div>
                </div>
                <div className="form-group">

                    <input type="text" className="form-control" ref={e => this.textTask = e} placeholder="Search..." />
                </div>
                <div className="form-group">
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            this.addTodo({
                                title: this.textTask.value,
                                completed: true,
                            })
                            this.textTask.value = "";
                        }}
                    >
                        Add Todo
                    </button>
                </div>
            </React.Fragment>
        )
    }

}




