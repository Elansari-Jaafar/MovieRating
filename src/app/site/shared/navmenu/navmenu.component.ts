import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navmenu',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './navmenu.component.html',
  styleUrl: './navmenu.component.css'
})
export class NavmenuComponent {

}
