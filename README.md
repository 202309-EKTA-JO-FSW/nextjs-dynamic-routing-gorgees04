# Overview

You remember JSONPlacerHolder API? We used it when we first learned about fetch API, now we will use it with NextJS routes.

Go [here](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes) whenever you feel lost

This project already supports tailwindcss out of the box so feel free to use it.

## Requirements

Note: Yes, requirements, not instructions. Find what needs to be done to finish the needed deliverables :D. Let us know in Discord if you need any help. Also, if you finish early and think you can help others, let us know.

1. Create a new page to host all the posts. You should fetch all the posts from the JSONPlaceholder API. Route of this page is `/posts`
2. Create a new page to show the post information. You should fetch the post information from the JSONPlaceholder API. This page should have a route that points to `/posts/{id}`

```jsx
const ALL_POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const ONE_POST_URL = "https://jsonplaceholder.typicode.com/posts/${postId}";
```

2. In the `Posts` page, map over all the posts and show their titles. The titles should be clickable and would take the user to a new page `<PostInfo />` that will show the rest of the post information.
3. In `posts/[id]` page, use the `getStaticPaths` and `getStaticProps` to fetch the post information and show it to the user. You can use the `ONE_POST_URL` to fetch the post information.

BONUS (There are 2 bonuses actually):

1. When the user clicks on the post to view it in another page, can you also show the comments? You need to search for the correct API on your own though 😋
2. Style the page so it can be beautiful. Don't focus on this from the beginning though.

Note: You don't have to do HTML and CSS (jsx in our case since this is React) from scratch, you can always find resources online and use them for the sake of time. Look at [this](https://tailwindcomponents.com/component/post-artical) as an example.
