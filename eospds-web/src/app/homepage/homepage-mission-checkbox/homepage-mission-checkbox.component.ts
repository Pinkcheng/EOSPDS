import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-homepage-mission-checkbox',
  templateUrl: './homepage-mission-checkbox.component.html',
  styleUrls: ['./homepage-mission-checkbox.component.css']
})
export class HomepageMissionCheckboxComponent implements OnInit {

  constructor() { }

  @Output()
  returnListEvent = new EventEmitter<any>();

  ngOnInit(): void {

  }
  task: Task = {
    name: '全部任務',
    completed: true,
    subtasks: [
      { id: 1, name: '未派遣', completed: true },
      { id: 2, name: '未開始', completed: true },
      { id: 3, name: '進行中', completed: true },
      { id: 4, name: '已完成', completed: true }
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
    this.selectedItemsList = [1, 2, 3, 4];
    this.returnListEvent.emit(this.selectedItemsList)
  }
}
export interface Task {
  id?: number;
  name: string;
  completed: boolean;
  subtasks?: Task[];
}
