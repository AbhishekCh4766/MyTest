import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent implements OnInit {

 public settings:any=[];
  	constructor(private user: UserService) {  }


  ngOnInit(){


}

}
