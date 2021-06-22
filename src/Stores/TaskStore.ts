import { action, computed, observable } from "mobx";
import {TaskItem} from "../Models/TaskItem";

class TaskStore {

    @observable tasks: TaskItem[] = observable.array([]);
   
    @action createTask = (taskItem: TaskItem) => {              
        this.tasks.push({...taskItem,id : this.tasks.length > 0? Math.max(...this.tasks.map(t=>t.id!)) + 1 : 1})        
    }

    @action removeTask = (id: number) => {        
        let index = this.tasks.findIndex(t => t.id === id);
        this.tasks.splice(index, 1)
    }

    @action toggleTask = (id: number) =>{        
        let index = this.tasks.findIndex(t => t.id === id);
        this.tasks[index].completed = !this.tasks[index].completed;          
    }

    @computed get getTaskCount() {
        return {
            total: this.tasks.length,
            completed: this.tasks.filter(item => item.completed).length,
            notCompleted: this.tasks.filter(item => !item.completed).length,
        }
    }

}

const store = new TaskStore();
export default store;