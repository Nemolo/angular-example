import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, filter, map, tap } from 'rxjs/operators'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {


  form = new FormGroup({
    username: new FormControl('', [ Validators.required ]),
    password: new FormControl('', [ Validators.required ]),
    rememberme: new FormControl(undefined, [ ]),
    gender: new FormControl('', [ Validators.required ]),
  }, [ Validators.required ]);

  newsletterEmail = new FormControl('', [ Validators.required, Validators.email ])

  constructor() { }

  ngOnInit(): void {
    this.newsletterEmail.statusChanges.pipe(
      filter(one => one === 'yeah'),
      tap(one => console.log(one)),
      map(one => one === 'VALID' ? 'yeah' : 'booo'),
      
      // filter(one => one === 'yeah'),
    ).subscribe(
      newStatus => console.log(newStatus)
    )
    this.newsletterEmail.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(
      currentValue => {
        console.log(currentValue)
      }
    )
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
