import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

    constructor(private user: UserService) { 
    }

    public tasks:any=[];

  ngOnInit(): void {
  
  this.getTasks();

  }

  getTasks(){
         this.user.getTask().subscribe((res: any=[])=>{
      //console.log(res);

       this.tasks = res;

       console.log('tasks',this.tasks);
       
     
    });
  }

  onEdit(event){
   console.log('edit',event)
  }

	onDelete(event){


         this.user.deleteTask(event).subscribe((res: any=[])=>{
        this.getTasks();      
     
    });
	}

}
