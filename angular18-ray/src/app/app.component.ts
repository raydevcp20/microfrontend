import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RayComponent } from './ray/ray.component';
import { connectRouter } from './connect-router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular18-ray';

  constructor(){
    connectRouter();
  }
}
