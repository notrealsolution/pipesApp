import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower: string = 'daniel';
  public nameUppercase: string = 'ANTONIO';
  public fullName: string = 'dAnIeL aNtOnIo';
  public customDate: Date = new Date();
}
