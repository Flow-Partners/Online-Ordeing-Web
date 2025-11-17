import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@core/services/auth.service';
import { User } from '@models/user.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentUser: User | null = null;

  stats = [
    {
      title: 'Total Users',
      value: '1,234',
      icon: 'bi-people',
      color: 'primary',
      change: '+12%'
    },
    {
      title: 'Revenue',
      value: '$45,678',
      icon: 'bi-currency-dollar',
      color: 'success',
      change: '+8%'
    },
    {
      title: 'Orders',
      value: '567',
      icon: 'bi-cart',
      color: 'warning',
      change: '+23%'
    },
    {
      title: 'Growth',
      value: '94.5%',
      icon: 'bi-graph-up',
      color: 'info',
      change: '+5%'
    }
  ];

  recentActivities = [
    {
      icon: 'bi-person-plus',
      color: 'success',
      title: 'New user registered',
      description: 'John Doe joined the platform',
      time: '5 minutes ago'
    },
    {
      icon: 'bi-cart-check',
      color: 'primary',
      title: 'New order placed',
      description: 'Order #12345 has been placed',
      time: '1 hour ago'
    },
    {
      icon: 'bi-credit-card',
      color: 'warning',
      title: 'Payment received',
      description: 'Payment of $299 received',
      time: '2 hours ago'
    },
    {
      icon: 'bi-envelope',
      color: 'info',
      title: 'New message',
      description: 'You have 3 unread messages',
      time: '3 hours ago'
    }
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }
}

