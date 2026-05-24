// Create `blog.mjs` that imports the `Post` class. Create an instance, and call the `publish` method to simulate posting.

import Post from './post.mjs';

const myPost = new Post('My First Blog Post', 'This is the content of my first blog post.');
myPost.publish();