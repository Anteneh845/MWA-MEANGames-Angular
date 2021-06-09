import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {User} from "../user.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  successMessage!: string;
  errorMessage!: string;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  registerHandler(user: User) {
    this.userService.registerUser(user)
      .subscribe(() => this.router.navigate([""]))
  }
}
