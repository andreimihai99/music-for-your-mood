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

  listenerFormGroup = this.formBuilder.group({
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

  onSubmit(listenerForm: any): void {
    this.createListener(listenerForm);
  }

  createListener(listenerForm: any) {
    const listener = this.listenerFormGroup.value;

    const lstnr: Listener = {
      forename: listener.forename,
      surname: listener.surname,
      email: listener.email,
      password: listener.password,
      isAdmin: listener.isAdmin
    }

    this.registerService.addListener(lstnr).subscribe(
      data => {
        this.router.navigate(['homepage']);
      },
      err => console.log(err)
    );
  }

}
