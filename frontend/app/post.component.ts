import { Component, Input, OnInit } from '@angular/core';

import { PostService } from './post.service';
import { Post } from './post';

import { Converter } from 'showdown';


@Component({
    moduleId: module.id,
    selector: 'post',
    templateUrl: 'post.component.html',
    styleUrls: ['post.component.css']
})

export class PostComponent implements OnInit {
    @Input() post: Post;
    converter: Converter = new Converter();

    constructor(private postService: PostService) {

    }

    ngOnInit(): void {

        // this.post = this.postService.getPosts();
        // this.post = this.converter.makeHtml(this.post.getFormatedContent());
    }

}
