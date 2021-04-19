import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-manual-dispatch',
  templateUrl: './modal-manual-dispatch.component.html',
  styleUrls: ['./modal-manual-dispatch.component.css']
})
export class ModalManualDispatchComponent implements OnInit {

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  modalRef!: BsModalRef;
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
