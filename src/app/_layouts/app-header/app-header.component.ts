import { Component,HostListener, OnInit,Inject,Renderer2 } from '@angular/core';
import { UserService } from '../../user/user.service';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  public href: string = "";
  // public facebook: string = "";
  // public linkedin: string = "";
  // public twitter: string = "";
  public settings: any = [];

    constructor(private router: Router,private user: UserService) {}

    ngOnInit() {
        this.href = this.router.url;



    }


}
