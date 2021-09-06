import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentHttpService } from 'src/app/service/student-http.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  reactForm: FormGroup;
  student: Student = new Student();
  studentId: string = "";

  constructor(
    private studentService: StudentHttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params =>{
        this.studentId = params.id
      } 
    );
    this.studentService.getById(this.studentId).subscribe(
      student => {
        this.student = student
      }
    );
  }

  saveStudent(student: Student, id: string){
    this.studentService.update(student, this.studentId).subscribe(
        ev => this.router.navigate(['student-list'])
      );
  }

}
