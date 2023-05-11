import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ['./auth.componenet.css']
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  errorMessage: string= null

  constructor(private authService: AuthService) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.isLoading = true
    if (this.isLoginMode) {
      //...
    } else {
      this.authService.signup(form.value.email, form.value.password).subscribe(
        (resData) => {
          console.log("resData", resData);
          this.isLoading = false
        },
        (error) => {
          console.log("error : ", error);
          this.error=" an error occured"
          this.errorMessage = error.error.message
          this.isLoading = false
        }
      );
    }

    form.reset();
  }
}
