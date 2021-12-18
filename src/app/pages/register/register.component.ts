import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Register } from './register';
import { RegisterService } from './register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  title!: string;
  upper() {
    this.title = this.title.toUpperCase();
  }
  userModel: any = {};
  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  isLoading: any;

  onSubmit() {
    this.registerService.register(this.userModel).subscribe(data => {

    })
    console.log(this.userModel);
  }
}
