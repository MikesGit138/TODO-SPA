import { Component} from '@angular/core';
import {Todo} from './../../app/models/todo';
import { ViewEncapsulation } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeadComponent {
  
  public todos:Todo[] = []
  public active: Todo[] = []
  public done:string[] = []
  public inputTodo = ''
  public darkMode = false

  constructor() { }


  ngAfterContentInit(): void {
    this.todos = [
      {
      content: "First todo",
      completed: false
      },
      {
        content: "Second todo",
        completed: false
        },
        {
          content: "Third todo",
          completed: false
          },
          {
            content: "Fourth todo",
            completed: false
            },
            {
              content: "Fifth todo",
              completed: false
              },
             
    ]
    this.activeFunction()
    // this.themeSwitch()
  }

  activeFunction(){
    this.active = this.todos.filter((item) => {
       return item.completed == false;
        })
  }

  completedFunction(todo: any){
    todo.completed = !todo.completed
    if(todo.completed == true){  
      this.done?.unshift(todo.content)
      this.active = this.todos.filter((isDone)=>{
        return isDone.completed == false;
      }
      );
      console.log(this.active);

    } else {
      const itemIndex = this.done?.findIndex((todoItem) => todoItem == todo.content);
      this.done?.splice(itemIndex, 1);
      console.log(itemIndex);
      this.active = this.todos.filter((isDone)=>{
        return isDone.completed == false;
      });
  
    }

  }


  delete(todo: any){
    this.todos?.splice(todo, 1)
    this.active?.splice(todo, 1)
    const itemIndex = this.done?.findIndex((todoItem) => todoItem == todo.content);
      this.done?.splice(itemIndex, 1);
  }
  deleteC(finish: any){
    this.done?.splice(finish, 1)
  }

  addTodo(){
    if(this.inputTodo !== ''){
    this.todos?.unshift({
      content: this.inputTodo,
      completed: false
    })
    this.active?.unshift({
      content: this.inputTodo,
      completed: false
    })
    this.inputTodo = ''
  } 
  }
  
  themeSwitch(){
    this.darkMode = !this.darkMode
    const body = document.querySelector('body') as HTMLElement;
    this.darkMode ? (body.style.backgroundColor = "black") : (body.style.backgroundColor = "lightgrey");
    console.log(this.darkMode)
  }
  // clearList(){
  //   this.todos = []
  // }
 
  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } 
  }
}


