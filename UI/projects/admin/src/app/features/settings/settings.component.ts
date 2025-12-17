import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StorageService } from '@core/services/storage.service';
import { NotificationService } from '@core/services/notification.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settings = {
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: false,
    weeklyNewsletter: true,
    productUpdates: true,
    language: 'en',
    timezone: 'UTC',
    theme: 'light',
    orderReceivedRefreshTime: 30 // Default 30 seconds
  };

  languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' }
  ];

  timezones = [
    'UTC',
    'America/New_York',
    'America/Los_Angeles',
    'Europe/London',
    'Europe/Paris',
    'Asia/Tokyo'
  ];

  constructor(
    private storageService: StorageService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadSettings();
  }

  loadSettings(): void {
    const savedSettings = this.storageService.getObject('app_settings');
    if (savedSettings) {
      this.settings = { ...this.settings, ...savedSettings };
    }
    
    // Load refresh time from sessionStorage
    const refreshTime = this.storageService.getSessionItem('orderReceivedRefreshTime');
    if (refreshTime) {
      this.settings.orderReceivedRefreshTime = parseInt(refreshTime, 10) || 30;
    }
  }

  saveSettings(): void {
    this.storageService.setObject('app_settings', this.settings);
    
    // Save refresh time to sessionStorage
    this.storageService.setSessionItem('orderReceivedRefreshTime', this.settings.orderReceivedRefreshTime.toString());
    
    this.notificationService.success('Settings saved successfully!');
  }

  resetSettings(): void {
    this.settings = {
      emailNotifications: true,
      pushNotifications: false,
      smsNotifications: false,
      weeklyNewsletter: true,
      productUpdates: true,
      language: 'en',
      timezone: 'UTC',
      theme: 'light',
      orderReceivedRefreshTime: 30
    };
    this.storageService.removeItem('app_settings');
    this.storageService.removeSessionItem('orderReceivedRefreshTime');
    this.notificationService.info('Settings reset to defaults');
  }

  onRefreshTimeChange(): void {
    // Save to sessionStorage immediately when value changes
    if (this.settings.orderReceivedRefreshTime !== undefined && this.settings.orderReceivedRefreshTime !== null) {
      this.storageService.setSessionItem('orderReceivedRefreshTime', this.settings.orderReceivedRefreshTime.toString());
    }
  }
}

