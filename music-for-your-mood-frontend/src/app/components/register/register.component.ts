import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Listener } from 'src/app/shared/data-types/listener';
import { RegisterService } from 'src/app/shared/services/register.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {



  registerFormGroup = this.formBuilder.group({
    forename: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private registerService: RegisterService, 
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(this.registerFormGroup.status === "VALID") {
      let listener = new Listener();

      listener = {
        forename: this.registerFormGroup.value.forename,
        surname: this.registerFormGroup.value.surname,
        email: this.registerFormGroup.value.password,
        password: this.registerFormGroup.value.email,
        isAdmin: false
      }

      this.registerService.addListener(listener).subscribe(
        data => {
          this.router.navigate(['homepage']);
        }
      )
    }
  }

}
