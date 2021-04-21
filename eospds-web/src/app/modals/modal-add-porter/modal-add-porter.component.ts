import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-add-porter',
  templateUrl: './modal-add-porter.component.html',
  styleUrls: ['./modal-add-porter.component.css']
})
export class ModalAddPorterComponent implements OnInit {

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  modalRef!: BsModalRef;
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
