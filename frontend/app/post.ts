import { Converter } from 'showdown';

export class Post {
    id: number;
    title: string;
    date: Date;
    tags: string[];
    content: string;
    formatedContent: string;
    private converter: Converter = new Converter();

    constructor(post) {
        this.id = post.id;
        this.title = post.title;
        this.date = new Date(post.date);
        this.tags = post.tags;
        this.content = post.content;
        this.formatedContent = this.converter.makeHtml(post.content);
    }
}
