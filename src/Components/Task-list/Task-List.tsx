import { inject,observer  } from "mobx-react";
import React from "react";
import {TaskItem} from "../../Models/TaskItem";
import TaskStore from "../../Stores/TaskStore";
import './Task-List.css';
import configData from "../../Assets/config-names.json"

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
        return (
            <React.Fragment>
                <div className="row">
                    <table className="table table-hover">
                        <thead className="thead-light">
                            <tr>
                                <th>{configData.lbl_title}</th>
                                <th>{configData.lbl_complete_status}</th>
                                <th>{configData.lbl_action}</th>
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
                                           {configData.btn_remove}
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


