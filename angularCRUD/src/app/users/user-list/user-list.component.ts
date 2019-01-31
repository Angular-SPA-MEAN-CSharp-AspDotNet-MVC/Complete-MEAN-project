import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserService } from "../../user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  modalRef: BsModalRef;
  user: User = new User();
  users : any;
  errorMsg: ErrorMsg = new ErrorMsg();
  constructor(private modalService: BsModalService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.get().subscribe( res => {
      this.users = res;
      console.log(this.users);
    }, error => {
      console.log(error);
    });
  }

  onSave() {
    this.errorMsg.name = this.errorMsg.address = "";
    !this.user.name ? this.errorMsg.name = "Name required" : "";
    !this.user.address ? this.errorMsg.address = "Address required" : "";
    if( !this.user.name || !this.user.address ) {
      return;
    }
    this.userService.post(this.user).subscribe(res => {
      this.getUser();
      this.modalRef.hide();
      console.log(res);
    },error => {
      console.log(error);
    });
  }

  openModalAdd(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
class User {
  name: string;
  address: string;
}

class ErrorMsg {
  name: string;
  address: string;
}
