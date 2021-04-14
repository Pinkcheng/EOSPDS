import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-modal-add-mission',
  templateUrl: './modal-add-mission.component.html',
  styleUrls: ['./modal-add-mission.component.css']
})
export class ModalAddMissionComponent implements OnInit {

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  modalRef!: BsModalRef;
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
