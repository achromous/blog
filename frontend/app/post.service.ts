

import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Post } from './post';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostService {
    private postsURL = 'http://192.168.99.100:1234';

    constructor(private http: Http) {
    }

    getPosts(): Promise<Post[]> {
        return this.http
            .get(this.postsURL)
            .toPromise()
            .then(response => {
                var the_posts = response.json() as string[];
                var to_save = [];
                for (var i = 0; i < the_posts.length; i++) {
                    var new_post = new Post(the_posts[i]);
                    to_save.push(new_post);
                }
                return to_save;
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.log('postsURL:' + this.postsURL)
        console.error('An error occurred !!!!!!!', error);
        return Promise.reject(error.message + error.reason || error);
    }
}
