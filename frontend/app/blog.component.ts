import { Component } from '@angular/core';
import { PostService } from './post.service';

import { Post } from './post';


@Component({
    moduleId: module.id,
    selector: 'my-blog',
    templateUrl: 'blog.component.html',
    styleUrls: ['blog.component.css']
})
export class BlogComponent {

    posts: Post[];

    constructor(private postService: PostService) {

    }

    ngOnInit(): void {
        this.postService.getPosts()
            .then(the_posts => {
                this.posts = the_posts;
            });
    }

}
