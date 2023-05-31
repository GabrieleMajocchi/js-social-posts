const posts = [
    {   "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "authorName": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"},
    {   "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "authorName": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"},
    {   "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "authorName": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"},
    {   "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "authorName": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"},
    {  "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "authorName": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"}
];

const container = document.querySelector('#container')
let likesid = [];

posts.forEach(post => {
    let split = (post.created).split('-')
    post.created = split[2]+'-'+split[1]+'-'+split[0]

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


let userpost = document.querySelectorAll('div.post');
console.log(userpost)

userpost.forEach(post => {
    const authorImg = post.querySelector('img.profile-pic');
    const like = post.querySelector('div.likes__cta');
    const likecounterprint = post.querySelector('div.likes__counter');
    const likeButton = post.querySelector('a.like-button');
    const authorName = (authorImg.attributes.alt.textContent).replace(/[^A-Z]+/g, "");
        
    if((authorImg.attributes[1].value) == "null"){
        authorImg.outerHTML = `<p class="null-pic">${authorName}</p>`;
    }
    
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
    })
});
