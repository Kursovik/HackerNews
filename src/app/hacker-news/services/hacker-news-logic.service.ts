import { Injectable } from '@angular/core';
import { HackerNewsApiService } from './hacker-news-api.service';
import { Observable } from 'rxjs';
import { Comments, FrontPage, HackerNews } from '../interfaces/hacker-news';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class HackerNewsLogicService {
  private hackerNewsSearchUrl = 'http://hn.algolia.com/api/v1/search';
  private hackerNewsItemUrl = 'http://hn.algolia.com/api/v1/items/';
  constructor(private readonly hackerNewsApiService: HackerNewsApiService) {}

  public getHackerNews(): Observable<FrontPage<HackerNews>> {
    const params = new HttpParams().set('tags', 'front_page');
    return this.hackerNewsApiService.getAll(this.hackerNewsSearchUrl, params);
  }
  public getComment(id: number): Observable<Comments> {
    return this.hackerNewsApiService.getAll(`${this.hackerNewsItemUrl}${id}`);
  }
}
