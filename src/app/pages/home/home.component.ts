import { CommonModule } from '@angular/common';
import { Component, inject, type TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IconComponent } from '../../components/icon/icon.component';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'cc-home',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public metaService = inject(MetaService);
  public modalService = inject(NgbModal);

  public links = [
    {
      name: 'Discord',
      link: 'https://discord.castlecarnage.com',
      color: '#5865f2',
      currentColor: '#ccc',
      icon: 'discord',
    },
    {
      name: 'Blog',
      link: 'https://blog.castlecarnage.com',
      color: '#e37418',
      currentColor: '#ccc',
      icon: 'blog',
    },
    {
      name: 'Reddit',
      link: 'https://reddit.castlecarnage.com',
      color: '#fb4404',
      currentColor: '#ccc',
      icon: 'reddit',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.castlecarnage.com',
      color: '#1da1f2',
      currentColor: '#ccc',
      icon: 'twitter',
    },
    {
      name: 'Facebook',
      link: 'https://facebook.castlecarnage.com',
      color: '#3b5998',
      currentColor: '#ccc',
      icon: 'facebook',
    },
    {
      name: 'Email',
      link: 'mailto:support@castlecarnage.com',
      color: '#ce00ce',
      currentColor: '#ccc',
      icon: 'email',
    },
  ];

  public openChangelogs(template: TemplateRef<unknown>) {
    this.modalService.open(template, {
      size: 'lg',
      centered: true,
      backdrop: 'static',
      windowClass: 'modal-changelogs',
    });
  }
}
