import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      body works!
    </p>
  `,
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

}
