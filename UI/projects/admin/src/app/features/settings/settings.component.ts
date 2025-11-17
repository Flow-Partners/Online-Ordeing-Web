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
    theme: 'light'
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
  }

  saveSettings(): void {
    this.storageService.setObject('app_settings', this.settings);
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
      theme: 'light'
    };
    this.storageService.removeItem('app_settings');
    this.notificationService.info('Settings reset to defaults');
  }
}

