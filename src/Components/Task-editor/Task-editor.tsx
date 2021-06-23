import { inject, observer } from "mobx-react";
import React from "react";
import { TaskItem } from "../../Models/TaskItem";
import TaskStore from "../../Stores/TaskStore";
import configData from "../../Assets/config-names.json"
import './Task-editor.css';

@inject('TaskStore')
@observer
export default class TaskEditor extends React.Component<{ taskStore: typeof TaskStore }> {
    textTask: any;

    state = {
        errors: {
            isInvalid: false,
            taskNameError: "Please enter task."
        }

    };

    addTask = (item: TaskItem) => {
        this.setState({ isDisabled: true })
    }

    // we can use submit function instead of only onchange
    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.value ? this.setState({ isDisabled: false }) : this.setState({ isDisabled: true })
    }

    handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault(); // Stop browser reloading       
        if (this.validate) {
            let item: TaskItem = {
                title: this.textTask.value,
                completed: true,
            }
            this.props.taskStore.createTask(item);
        } else{
            this.state.errors.isInvalid = true;
            this.setState({errors : this.state.errors})
        }
        this.clear();        
    }

    get validate() {
        if (this.textTask.value)
            return true
        else
            return false
    }

    clear = () => {
        this.textTask.value = ""
    }

    render() {
        return (
            <React.Fragment>
                <div className="alert alert-primary">
                    <div className="d-inline col-4">
                        {configData.lbl_total}:
                        <span className="badge badge-info">{this.props.taskStore.getTaskCount.total}</span>
                    </div>
                    <div className="d-inline col-4">
                        {configData.lbl_finised}:
                        <span className="badge badge-info">{this.props.taskStore.getTaskCount.completed}</span>
                    </div>
                    <div className="d-inline col-4">
                        {configData.lbl_unfinised}:
                        <span className="badge badge-info">{this.props.taskStore.getTaskCount.notCompleted}</span>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">                       
                        {/* use of ref - Method 01 */}
                        <input type="text" className="form-control" ref={e => this.textTask = e} placeholder={configData.place_holder_task} />
                        {/* use of state - Method 02 */}
                        <div className="text-danger">{this.state.errors.isInvalid && this.state.errors.taskNameError}</div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            {configData.btn_add}
                        </button>
                    </div>
                </form>
            </React.Fragment>
        )
    }

}




