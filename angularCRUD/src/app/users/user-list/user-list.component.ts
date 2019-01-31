import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit() {
  }

  openModalAdd(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
