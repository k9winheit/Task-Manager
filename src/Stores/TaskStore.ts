import { action, computed, makeObservable, observable } from "mobx";
import TaskItem from "../Models/TaskItem";
import { v4 as uuidv4 } from 'uuid';

class TaskStore {

    @observable tasks: TaskItem[] = observable.array([]);
   
    @action addTask = (taskItem: TaskItem) => {
        debugger;        
        this.tasks.push({...taskItem,id : this.tasks.length > 0? Math.max(...this.tasks.map(t=>t.id!)) + 1 : 1})        
    }

    @action removeTask = (id: number) => {
        debugger;
        let index = this.tasks.findIndex(t => t.id === id);
        this.tasks.splice(index, 1)
    }

    @action toggleTask = (id: number) =>{        
        let index = this.tasks.findIndex(t => t.id === id);
        this.tasks[index].completed = !this.tasks[index].completed;     
        
        // Using map 
        // this.tasks = this.tasks.map(item => {
        //     if (item.id === id) {
        //         item.completed = ! item.completed
        //         return{
        //             ...item
        //         }      
        //     }
        //     return item
        //   });
      
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