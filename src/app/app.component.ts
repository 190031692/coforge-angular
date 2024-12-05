import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
   /* Parent component for Angular. It consists of child Component*/
  standalone: true,
  imports: [RouterOutlet,HomeComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'coforge-ltd';
}
