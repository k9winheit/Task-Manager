import { inject,observer  } from "mobx-react";
import React from "react";
import uuidv4 from "uuid"
import TaskItem from "../Models/TaskItem";
import TaskStore from "../Stores/TaskStore";

@inject('TaskStore')
@observer
export default class TaskList extends React.Component<{taskStore:typeof TaskStore}> {   
  
    toggleTodo = (id: number) => {  
        this.props.taskStore.toggleTask(id);  
    }

    removeTodo = (id: number) => {
        this.props.taskStore.removeTask(id);
    }

    render() {
        debugger;
        return (
            <React.Fragment>
                <div className="row">
                    <table className="table table-hover">
                        <thead className="thead-light">
                            <tr>
                                <th>Title</th>
                                <th>Completed?</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.taskStore.tasks.map((task :TaskItem) => (
                                <tr>
                                    <td>{task.title}</td>
                                    <td>{task.completed ? "✅" : ""}</td>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-info"
                                            onClick={() => this.toggleTodo(task.id!)}
                                        >
                                            Toggle
                                        </button>
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => this.removeTodo(task.id!)}
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}


