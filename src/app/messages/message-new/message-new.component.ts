import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.css']
})

export class MessageNewComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  priorities: string[] = ['HIGH', 'MEDIUM', 'LOW'];
  departments: object[] = [
    {
      id: 2, 
      name: "Complaints"
    },
    {
      id: 3, 
      name: "HR"
    },
    {
      id: 2, 
      name: "Finance"
    }
  ];

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      emailCtrl: ['', Validators.required ],
      priorityCtrl: ['', Validators.required ],
      departmentCtrl: ['', Validators.required ]
    });
    this.secondFormGroup = this.formBuilder.group({
      messageCtrl: ['', Validators.required ]
    });
  }

  getDepartmentName( department: object ): string {
    return department ? department['name'] : undefined ;
  }

}
