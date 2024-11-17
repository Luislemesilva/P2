// src/app/components/post-list/post-list.component.ts

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: any[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  viewPostDetails(id: number): void {
    this.router.navigate(['/post', id]);
  }
}
