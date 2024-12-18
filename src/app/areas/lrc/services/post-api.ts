import { HttpClient } from '@angular/common/http';
import { PostApiResponse } from '../types';
import { inject } from '@angular/core';

export class PostApi {
  //constructor(private http: HttpClient) {}
  #http = inject(HttpClient);
  getPosts() {
    return this.#http.get<PostApiResponse>('/api/posts');
  }
}
