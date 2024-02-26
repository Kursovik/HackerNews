import { Component, OnInit } from '@angular/core';
import { HackerNewsLogicService } from '../../services/hacker-news-logic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hacker-news-list',
  templateUrl: './hacker-news-list.component.html',
  styleUrls: ['./hacker-news-list.component.scss'],
})
export class HackerNewsListComponent implements OnInit {
  public $hackerNews = this.hackerNewsLogicService.getHackerNews();
  constructor(
    private readonly hackerNewsLogicService: HackerNewsLogicService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.$hackerNews.subscribe((hn) => console.log(hn));
  }

  showFullStoryWithComments($event: Event,id: number) {
    $event.stopPropagation();
    this.router.navigate([`item/${id}`]);
  }
}
