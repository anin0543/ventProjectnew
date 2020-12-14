import { Component, OnInit } from '@angular/core';
import { faFan } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  currentSection = 0;
  fan = faFan;
  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  changeSection(delta: number): void {
    // some checks
    this.currentSection += delta;
  }
  goToquiz(){
  this.router.navigate(['quiz']);
  }
}
