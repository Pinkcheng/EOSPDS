import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-homepage-porter-checkbox',
  templateUrl: './homepage-porter-checkbox.component.html',
  styleUrls: ['./homepage-porter-checkbox.component.css']
})
export class HomepagePorterCheckboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  returnListEvent = new EventEmitter<any>();

  task: Task = {
    name: '全部人員',
    completed: true,
    subtasks: [
      { id: 1, name: '上班中', completed: true },
      { id: 2, name: '未上班', completed: true },
    ]
  };
  allComplete: boolean = false;
  selectedItemsList: any = []
  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
    this.selectedItemsList = this.task.subtasks?.filter((value, index) => {
      return value.completed
    }).map(item => Object.values(item)[0]);
    this.returnListEvent.emit(this.selectedItemsList)
  }
  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }
  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
    this.selectedItemsList = [1, 2];
    this.returnListEvent.emit(this.selectedItemsList)
  }
}
export interface Task {
  id?: number;
  name: string;
  completed: boolean;
  subtasks?: Task[];
}
