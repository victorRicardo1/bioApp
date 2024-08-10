import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bio-header',
  templateUrl: './bio-header.component.html',
  styleUrl: './bio-header.component.css',
})
export class BioHeaderComponent {
  @Input() teste: string = '';
  nomeSite:string = 'BioEnviroPlace';
  user:string = ''
}
