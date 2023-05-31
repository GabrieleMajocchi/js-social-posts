// ---Create the array with each post info---
const posts = [
    {   "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image",
        "author": {
            "authorName": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"},
        "likes": 80,
        "created": "2021-06-25"},
    {   "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image",
        "author": {
            "authorName": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"},
        "likes": 120,
        "created": "2021-09-03"},
    {   "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image",
        "author": {
            "authorName": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"},
        "likes": 78,
        "created": "2021-05-15"},
    {   "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image",
        "author": {
            "authorName": "Luca Formicola",
            "image": null},
        "likes": 56,
        "created": "2021-04-03"},
    {  "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image",
        "author": {
            "authorName": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"},
        "likes": 95,
        "created": "2021-03-05"}
];
// ---Get the div container that I'll populate with the posts---
const container = document.querySelector('#container')
// ---For each post (object) inside posts (array) I'll populate the container with the elements---
posts.forEach(post => {
    // ---Transform the post creation date YYYY/MM/DD to DD/MM/YYYY---
    let split = (post.created).split('-')
    post.created = split[2]+'-'+split[1]+'-'+split[0]
    // ---Populate the container with elements with custom info based on current post info---
    container.innerHTML += `<div class="post ${post.id}">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${post.author.image}" alt="${post.author.authorName}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${post.author.authorName}</div>
                <div class="post-meta__time">${post.created}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${post.content}</div>
    <div class="post__image">
        <img src="${post.media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone
            </div>
        </div> 
    </div>            
</div>`;
});
// ---Create an array that will keep the id of the liked posts---
let likesid = [];
// ---Create an array called userpost with the different created with for each function---
let userpost = document.querySelectorAll('div.post');
// ---Create some variable related to each individual post inside userpost and change some elements based on used action---
userpost.forEach(post => {
    const authorImg = post.querySelector('img.profile-pic');
    const like = post.querySelector('div.likes__cta');
    const likecounterprint = post.querySelector('div.likes__counter');
    const likeButton = post.querySelector('a.like-button');
    const authorName = (authorImg.attributes.alt.textContent).replace(/[^A-Z]+/g, "");
    // ---Replace the user img in case it's missing with his name and surname initials---
    if((authorImg.attributes[1].value) == "null"){
        authorImg.outerHTML = `<p class="null-pic">${authorName}</p>`;
    }
    // ---Create an event listener that on the click of the like button will toggle the color of it in red, add the like and remove it in case it get unselected, same to the array of liked posts---
    like.addEventListener('click', function(){
        if(likeButton.classList[2] === 'color-red'){
            likecounterprint.firstElementChild.innerHTML = parseInt(likecounterprint.firstElementChild.innerHTML)-1;
            likesid = likesid.filter(item => item !== post.classList[1]);
        }else{
        likecounterprint.firstElementChild.innerHTML = parseInt(likecounterprint.firstElementChild.innerHTML)+1;
        likesid.push(post.classList[1]);
        }
    likeButton.classList.toggle('color-red');
    console.log(likesid);
    });
});