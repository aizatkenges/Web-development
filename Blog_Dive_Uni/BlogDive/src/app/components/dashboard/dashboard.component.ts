import { Component } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======

>>>>>>> 39df03afda20cb9ed8290d7a0e0378500b0c4153
@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
<<<<<<< HEAD

export class DashboardComponent {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
=======
export class DashboardComponent {

}
>>>>>>> 39df03afda20cb9ed8290d7a0e0378500b0c4153
