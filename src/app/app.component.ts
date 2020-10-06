import {Component} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {User} from './models/User';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson7Forms';

  user: any = {id: 0};


  constructor(private userService: UserService) {
  }

// user: User = {name: 'vaysa', age: 31};


  // getTitle(xxx: HTMLInputElement): void {
  //   // console.log(this.title);
  //   console.log(xxx);
  //   console.log(xxx.value);
  // }


  // getTitle(xxx: NgModel): void {
  //   console.log(xxx);
  //
  // }


  // action(form: NgForm): void {
  //
  //   console.log(form);
  //
  // }
  async searchUser(form: NgForm): Promise<void> {
    console.log(form);
    this.user = await this.userService.getUserById(form.controls.id.value);


  }
}
