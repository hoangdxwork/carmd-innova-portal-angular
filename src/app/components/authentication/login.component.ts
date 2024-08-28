import { Component } from "@angular/core";
import { LoginModel } from "../../models/login/login.model";
import { LoadingSpinnerComponent } from "../commons/loading-spinner/loading-spinner.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SpinnerColor, SpinnerType } from "../../commons/consts/spinner.const";

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, LoadingSpinnerComponent],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public form: LoginModel;
  public isLoading: boolean = false;
  public isError: boolean = false;
  public errorMessage: string;

  public spinnerType = SpinnerType.BorderSmall;
  public spinnerColor = SpinnerColor.White;

  constructor() { }

  ngOnInit() {
    this.form = new LoginModel();
  }

  onSubmit() {
    this.isLoading = true;
    if (!this.checkValidate()) {
      this.isLoading = false;
      return;
    }

    setTimeout(() => 
      {
        this.isLoading = false;
      },
    5000);

  }

  checkValidate(): boolean {
    if (!this.form.username || !this.form.password) {
      this.isError = true;
      this.errorMessage = !this.form.username ? 'Username is required' : 'Password is required';
      this.errorMessage = !this.form.username && this.form.password ? 'Username and password is required' : this.errorMessage;
      return false;
    }
    return true;
  }

}