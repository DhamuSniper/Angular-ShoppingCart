
import {Component,OnInit} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

export type EditorType="login" | "signup";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  closeResult: string;
  formType:EditorType="login";
  get showLogin(){
    return this.formType==="login";
  }
  get showSignup(){
    return this.formType==="signup";
  }
  toggleEditor(type:EditorType){
    this.formType=type;
  }
  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  ngOnInit(){

  }
}