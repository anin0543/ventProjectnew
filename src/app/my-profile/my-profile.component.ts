import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_services/user.service';
import { InMemoryService } from '../_services/in-memory.service';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['../_styles/styles.css', './my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  constructor(private userout: LoginService, private ab: InMemoryService, private router: Router) { }

  airflow = 0;
  uid = 0;
  room = 0;
  zone = 0;
  name = 'name';
  email = 'email';

  userData: any = {
    airflow: this.airflow,
    uid: this.uid,
    room: this.room,
    zone: this.zone
  };
  ngOnInit(): void { }
  logout() {
    this.router.navigate(['']);
  }
  // PresetsByUid(id) {
  //   if (this.authfire.auth.currentUser) {
  //     id = this.authfire.auth.currentUser.uid;
  //     this.ab.getbyId(id).subscribe(
  //       (data) => {
  //         this.userData = data;
  //         console.log(this.userData);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //   }
}

