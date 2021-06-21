export default class TaskItem{
    id?: number;
    title: string;
    completed: boolean;

    constructor() {   
        this.id = 0;     
       this.title = "";
       this.completed = false; 
    }
}