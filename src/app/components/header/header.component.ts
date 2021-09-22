import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'header works!';
  toggleAddTask() {
    console.log('Toggle');
  }
  ngOnInit(): void {}
}
