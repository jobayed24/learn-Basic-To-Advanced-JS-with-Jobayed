//small project related CMS
// here we will make Article ,video ,images

// base class 
function ContentItem(title,author){
    this.title=title;
    this.author=author;
};

// Article subClass
function Article(title,author,content){
    ContentItem.call(this,title,author)
    this.content=content;
}

Article.prototype=Object.create(ContentItem.prototype);
Article.prototype.constructor=Article

//Video class
function Video(title,author,duration){
    ContentItem.call(this,title,author);
    this.duration=duration;
}

Video.prototype=Object.create(ContentItem.prototype);
Video.prototype.constructor=Video;

//Image Class
function Image(title,author,dimension){
    ContentItem.call(this,title,author);
    this.dimension=dimension;
}

Image.prototype=Object.create(ContentItem.prototype);
Image.prototype.constructor=Image;
// const contentItem=new ContentItem('test 1','jobayed');

// create content instance

let article = new Article("JavaScript Best Practices", "John Doe", "Lorem ipsum...");
let video = new Video("Learn JavaScript", "Jane Smith", "15:30");
let image = new Image("Beautiful Landscape", "Alice Johnson", "1920x1080");

function processContent(content){
    if(Article.prototype.isPrototypeOf(content)){
        console.log('processing Article '+content.title);
    }else if(Video.prototype.isPrototypeOf(content)){
        console.log('processing Video '+content.title+"["+content.duration+"]");
    }else if(Image.prototype.isPrototypeOf(content)){
        console.log('processing Image '+content.title+"["+content.dimension+"]");
    } else{
        console.log('Unknown content type');
    }
}

processContent('article',article)
processContent('video',video)
processContent('image',image)

// Extending functionality






