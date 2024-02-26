import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Observable, switchMap} from 'rxjs';
import { HackerNewsLogicService } from '../../services/hacker-news-logic.service';
import {Comments} from "../../interfaces/hacker-news";

@Component({
  selector: 'app-hacker-news-item',
  templateUrl: './hacker-news-item.component.html',
  styleUrls: ['./hacker-news-item.component.scss'],
})
export class HackerNewsItemComponent implements OnInit {
  public $storyWithComments: Observable<Comments>;
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly hackerNewsLogicService: HackerNewsLogicService,
    private readonly  router: Router,
  ) {}

  ngOnInit(): void {
    this.$storyWithComments = this.getHackerNewsItem()
  }
  private getHackerNewsItem(): Observable<Comments> {
    return this.activatedRoute.params.pipe(
      switchMap((params) =>
        this.hackerNewsLogicService.getComment(+params['id']),
      ),
    );
  }


  public backToFrontPage(): void {
    this.router.navigate(['/']);
  }

  public nodeClicked(node: any): void {
    node.isSelectable = false;
  }
}
