import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  brandName = 'MyBrand';
  navItems = [
    { label: 'Home', link: '#' },
    { label: 'Features', link: '#' },
    { label: 'Pricing', link: '#' },
    { label: 'Contact', link: '#' }
  ];
}