import { NgModule } from '@angular/core';
import { HackerNewsComponent } from './hacker-news/hacker-news.component';
import { HackerNewsApiService } from './services/hacker-news-api.service';
import { HackerNewsLogicService } from './services/hacker-news-logic.service';
import {AsyncPipe, DatePipe, JsonPipe, NgForOf, NgIf} from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzListModule } from 'ng-zorro-antd/list';
import { HackerNewsListComponent } from './components/hacker-news-list/hacker-news-list.component';
import { HackerNewsItemComponent } from './components/hacker-news-item/hacker-news-item.component';
import {NzTreeModule} from "ng-zorro-antd/tree";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzSpinModule} from "ng-zorro-antd/spin";

@NgModule({
  declarations: [HackerNewsComponent, HackerNewsListComponent, HackerNewsItemComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HackerNewsComponent,
        children: [
          {
            path: '',
            component: HackerNewsListComponent,
          },
          {
            path: 'item/:id',
            component: HackerNewsItemComponent
          }
        ],
      },
    ]),
    AsyncPipe,
    JsonPipe,
    NzListModule,
    NgIf,
    NgForOf,
    NzTreeModule,
    NzCardModule,
    DatePipe,
    NzButtonModule,
    NzSpinModule,
  ],
  providers: [HackerNewsApiService, HackerNewsLogicService],
})
export class HackerNewsModule {}
