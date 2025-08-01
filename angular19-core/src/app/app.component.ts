import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular19-core';
  login = inject(LoginService);

  constructor(){

  }

  ngOnInit(): void {
    // this.login.getCompanies().subscribe(companies => {
    //   console.log(companies);
    // });
  }  
}
