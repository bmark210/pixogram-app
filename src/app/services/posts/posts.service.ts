import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IPost } from "../../interfaces/posts.interface";

@Injectable()
export class PostsService {
  private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>("https://pixogram-api-bmark210s-projects.vercel.app/posts");
  }
}
