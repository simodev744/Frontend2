import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatTabLink, MatTabNav} from '@angular/material/tabs';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {NgForOf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  imports: [
    MatToolbar,
    MatTabNav,
    MatTabLink,
    RouterLinkActive,
    RouterLink,
    MatIcon,
    MatIconButton,
    MatMenuItem,
    NgForOf,
    MatMenu,
    MatIcon,
    MatMenuTrigger,
    MatIcon,
    MatIcon,
    MatButton
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

}
