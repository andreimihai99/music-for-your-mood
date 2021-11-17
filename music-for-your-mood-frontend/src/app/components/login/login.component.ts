import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Listener } from 'src/app/shared/data-types/listener';
import { LoginService } from 'src/app/shared/services/login.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public dataSource: Listener[] = [];
  public listener?: Listener;

  constructor(private loginService: LoginService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  loginFormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })


  ngOnInit(): void {
  }

  onSubmit(event: any): void {
    this.loginService.findListenerByEmail(this.loginFormGroup.value.email).subscribe(
      data => {
        this.listener = data;
        if(this.listener.password === this.loginFormGroup.value.password) {
          console.log('corect');
          this.router.navigate(['homepage']);
        } else {
          console.log("gresit");
        }
      }, 
      err => {
        console.log("eroare");
      }
    )
  }

  goToSignUp(): void {
    this.router.navigate(["register"]);
  }
}


