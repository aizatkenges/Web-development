import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // обязательно
import { CommonModule } from '@angular/common'; // тоже желательно

@Component({
  selector: 'app-login',
  standalone: true, // вот это ключевое!
  imports: [FormsModule, CommonModule], // подключаем модули
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    if (this.email === 'admin@example.com' && this.password === '1234') {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Неверный логин или пароль');
    }
  }
}
