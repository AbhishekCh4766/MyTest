import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
    show = false;
    submitted = false;
	TaskForm: FormGroup;
	   loading = false;
    constructor(private formBuilder: FormBuilder,private router: Router, private user: UserService) { }


  ngOnInit(): void {

  	       this.TaskForm = this.formBuilder.group({
            title: ['', Validators.required],
            author: ['', Validators.required]
        }); 

  }

      get f() { return this.TaskForm.controls; }

          onSubmit() {
     console.log('formData',this.TaskForm);
       
           this.submitted = true;
           this.loading = true;


          // stop here if form is invalid
            if (this.TaskForm.invalid) {
               this.loading = false;
            return 'Form Error';

        }


        // display form values on success
          this.user.sendFormData(this.TaskForm.value).subscribe((event) => {

            this.loading = false;
             this.router.navigate(['/']);
	        //console.log('event:',event);
            });
  

    
  }

}
