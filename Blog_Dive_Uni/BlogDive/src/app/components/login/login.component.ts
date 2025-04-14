import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // обязательно
import { CommonModule } from '@angular/common'; // тоже желательно
<<<<<<< HEAD
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../interceptors/auth.service';
=======

>>>>>>> 39df03afda20cb9ed8290d7a0e0378500b0c4153
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
<<<<<<< HEAD
  constructor(private apiService: ApiService, private router: Router) {}

  login() {
    this.apiService.login(this.email, this.password).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token); // сохраняем JWT токен
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        alert('Ошибка входа: ' + err);
      }
    });
  }}
=======

  constructor(private router: Router) {}

  login() {
    if (this.email === 'admin@example.com' && this.password === '1234') {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Неверный логин или пароль');
    }
  }
}
>>>>>>> 39df03afda20cb9ed8290d7a0e0378500b0c4153
