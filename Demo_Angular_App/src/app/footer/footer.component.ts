import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  footerSections = [
    {
      title: 'Product',
      links: ['Features', 'Integrations', 'Pricing', 'Changelog']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Privacy Policy', 'Terms of Service']
    },
    {
      title: 'Support',
      links: ['Help Center', 'API Docs', 'Community', 'Contact']
    }
  ];
}