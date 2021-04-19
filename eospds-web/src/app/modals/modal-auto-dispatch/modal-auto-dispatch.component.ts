import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-auto-dispatch',
  templateUrl: './modal-auto-dispatch.component.html',
  styleUrls: ['./modal-auto-dispatch.component.css']
})
export class ModalAutoDispatchComponent implements OnInit {

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  modalRef!: BsModalRef;
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
