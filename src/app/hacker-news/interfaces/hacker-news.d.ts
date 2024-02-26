export interface HackerNews {
  story_id: number;
  created_at: string;
  author: string;
  title: string;
  url: string;
  num_comments: number;
  text: string;
  objectID: string
  points: 57;
  parent_id: string;
}
export interface Comments {
  id: number;
  created_at:string;
  author: string;
  title: string;
  url: string;
  text: string;
  points: number;
  parent_id: string;
  children: Array<Comments>;
}
export interface FrontPage<T> {
  hits: Array<T>;
}
