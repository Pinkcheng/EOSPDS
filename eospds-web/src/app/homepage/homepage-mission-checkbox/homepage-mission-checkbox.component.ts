import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-homepage-mission-checkbox',
  templateUrl: './homepage-mission-checkbox.component.html',
  styleUrls: ['./homepage-mission-checkbox.component.css']
})
export class HomepageMissionCheckboxComponent implements OnInit {

  constructor() { }

  @Input()
  mission_list: Array<Object> = [];
  @Output()
  returnListEvent = new EventEmitter<any>();

  mission_list_filter: any = []
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
  checkedIDs: Array<Object> = []

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
    this.selectedItemsList = this.task.subtasks?.filter((value, index) => {
      return value.completed
    }).map(item => Object.values(item)[0]);
    this.checkedIDs = [];
    this.mission_list.forEach((value: any, index) => {
      for (let i = 0; i < this.selectedItemsList.length; i++) {
        if (this.selectedItemsList[i] == 0) {
          this.checkedIDs = this.mission_list;
          break;
        }
        else if (value.status == this.selectedItemsList[i]) {
          this.checkedIDs.push(value)
        }
      }
    });
    this.returnListEvent.emit(this.checkedIDs)
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
    this.returnListEvent.emit(this.mission_list)
  }
}
export interface Task {
  id?: number;
  name: string;
  completed: boolean;
  subtasks?: Task[];
}
