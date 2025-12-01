import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopNavbarComponent } from '../components/top-navbar/top-navbar.component';
import { SideNavbarComponent } from '../components/side-navbar/side-navbar.component';
import { StorageService } from '@core/services/storage.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, TopNavbarComponent, SideNavbarComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  isSidebarCollapsed = false;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    // Load initial sidebar state from storage to match sidebar component
    const savedState = this.storageService.getItem('sidebar_collapsed');
    this.isSidebarCollapsed = savedState === 'true';
  }

  onToggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  onSidebarToggle(collapsed: boolean): void {
    this.isSidebarCollapsed = collapsed;
  }
}

