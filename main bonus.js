// -----------
// ---Bonus---
// -----------

// ---Create the array with each post info---
let posts = [];

// ---Create an array that will keep the id of the liked posts---
let likesid = [];

// ---Variable that establishes how many posts to show---
let ammount = 5;

// ---Add to the Array random generated object based on amount value---
for (let i = 0; i < ammount; i++) {
    let post = generatePost();
    posts.push(post);
}

// ---Get the div container that I'll populate with the posts---
const container = document.querySelector('#container')

// ---Create the post in the container based on the array objects---
postcreation(ammount);

// ---Create an array called userpost with the different created with for each function---
let userpost = document.querySelectorAll('div.post'+ammount);

// ---Create an eventlistener on each buttons of the container posts---
clickaction();

// ---Put the buttons to js variables to activate event listener on them---
const fivepost = document.querySelector('#button5');
const tenpost = document.querySelector('#button10');
const twentyfivepost =document.querySelector('#button25');

// ---Show 5 random generated post---
fivepost.addEventListener('click', function(){
    ammount = fivepost.textContent
    update(ammount)
    container.classList.add('posts-list5');
    container.classList.remove('posts-list10');
    container.classList.remove('posts-list25');
});

// ---Show 10 random generated post---
tenpost.addEventListener('click', function(){
    ammount = tenpost.textContent
    update(ammount)
    container.classList.remove('posts-list5');
    container.classList.add('posts-list10');
    container.classList.remove('posts-list25');
});

// ---Show 25 random generated post---
twentyfivepost.addEventListener('click', function(){
    ammount = twentyfivepost.textContent
    update(ammount)
    container.classList.remove('posts-list5');
    container.classList.remove('posts-list10');
    container.classList.add('posts-list25');
});


// --------------
// ---Function---
// --------------

// ---Function to update the page based on show post option---
function update(postnum){
    container.innerHTML = '';
    posts = [];
    for (let i = 0; i < ammount; i++) {
        let post = generatePost();
        posts.push(post);
    }
    postcreation(postnum);
    userpost = document.querySelectorAll('div.post'+ammount)
    clickaction();
}

// ---Function to generate a random id---
function generateId() {
    return Math.floor(Math.random() * 1000) + 1;
}

// ---Function to generate the post description randomly---
function generateContent() {
    let randomSentence = '';

    // ---Array of random words
    const word = ["cane", "gatto", "bicicletta", "albero", "sole", "pioggia", "libro", "computer","musica", "caffè", "giornale", "cucina", "penna", "tavolo", "pianta", "orologio","finestra", "porta", "auto", "strada", "giardino", "telefono", "carta", "matita","telecomando", "sedia", "scarpe", "palla", "cielo", "nuvola", "montagna", "mare","stella", "luna", "fiori", "gusto", "ponte", "cane", "uomo", "mela", "chiave","gatto", "giardino", "moto", "spiaggia", "cibo", "nuvola", "chitarra", "vento","ragazza", "ragazzo", "famiglia", "amico", "città", "casa", "fuoco", "acqua","gioco", "musica", "film", "teatro", "scuola", "strada", "viaggio", "mercato","bosco", "parco", "barca", "isola", "ponte", "amore", "felicità", "gioia","sorriso", "risata", "amore", "bacio", "abbraccio", "tempo", "notte", "giorno","passato", "presente", "futuro", "sogno", "pensiero", "mente", "cuore", "anima","corpo", "sensazione", "odore", "suono", "colore", "vita", "magia", "avventura","ispirazione", "viaggio", "emozione", "speranza", "sorpresa", "felicità", "pazienza","fortuna", "amico", "compagno", "straniero", "sconosciuto", "cugino", "zio", "padre","madre", "fratello", "sorella", "nonna", "nonno", "professore", "studente", "dottore","cantante", "ballerino", "pittore", "scrittore", "architetto", "attore", "attrice","poliziotto", "vigile", "impiegato", "avvocato", "cameriere", "cuoco", "barista","giardiniere", "meccanico", "falegname", "insegnante", "sport", "calcio", "tennis","pallavolo", "basket", "nuoto", "corsa", "passeggiata", "yoga","correre", "saltare", "camminare", "nuotare", "mangiare", "bere", "dormire", "svegliarsi","studiare", "lavorare", "giocare", "ascoltare", "cantare", "ballare", "scrivere", "leggere","pensare", "parlare", "guardare", "vedere", "aspettare", "cercare", "trovare", "pensare","immaginare", "sognare", "creare", "disegnare", "colorare", "suonare", "comporre", "visitare","viaggiare", "passeggiare", "guidare", "ammirare", "respirare", "sentire", "toccare", "aprire","chiudere", "iniziare", "terminare", "cambiare", "sperare", "desiderare", "amare", "odiare","accettare", "rifiutare", "capire", "imparare", "insegnare", "dimenticare", "ricordare", "perdonare","ringraziare", "aiutare", "guidare", "esplorare", "svegliarsi", "addormentarsi", "giurare", "mentire","scommettere", "urlare", "piangere", "ridere", "sorridere", "abbracciare", "baciare", "salutare","incontrare", "conoscere", "sfidare", "vincere", "perdere", "credere", "dubitare", "chiedere","rispondere", "cucinare", "assaggiare", "comprare", "vendere", "pagare", "spendere", "risparmiare","investire", "prestare", "prendere", "lasciare", "condividere", "preoccuparsi", "rilassarsi", "divertirsi","festeggiare", "viaggiare", "sudare", "temere", "proteggere"];

    // ---Function to generate a random sentence---
    function generateRandomSentence() {
        let sentence = "";
        for (var i = 0; i < 35; i++) {
        let wordIndex = Math.floor(Math.random() * word.length);
        sentence += word[wordIndex] + " ";
        }
        return sentence.trim();
    }
    return randomSentence = generateRandomSentence()
}

// ---Function to generate the image of the post---
function generateImageURL() {
    const imageNumberr = Math.floor(Math.random() * 80)+1;
    return `https://unsplash.it/600/300?image=${imageNumberr}`;
}

// ---Function to generate a random author with a random profile picture---
function generateAuthor() {
    const names = ["Lorenzo Rossi", "Francesca Bianchi", "Alessandro Ferrari", "Giulia Romano", "Matteo Marino","Sara De Luca", "Marco Esposito", "Chiara Rizzo", "Gabriele Lombardi", "Valentina Costa","Luca Gallo", "Elisa Martini", "Simone Conti", "Elena Barbieri", "Mattia Pellegrini","Alice Ricci", "Giacomo Moretti", "Marta Russo", "Riccardo Colombo", "Arianna Greco","Davide Ferrara", "Federica Amato", "Andrea Caruso", "Serena Leone", "Giovanni Santoro","Camilla Gatti", "Daniele Piazza", "Beatrice Palumbo", "Pietro Serra", "Caterina Ferri","Emanuele Longo", "Clara Monti", "Filippo Gamba", "Silvia De Angelis", "Nicola Bellini","Giorgia Mancini", "Lorenza Rinaldi", "Stefano Rossetti", "Laura Marchetti", "Samuele D'Amico","Michela Gentile", "Roberto Bruno", "Alessia Vitale", "Enrico Lombardo", "Martina Esposito","Antonio Costa", "Valeria Messina", "Gianluca Rossi", "Cecilia Marini", "Massimo De Rosa"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const imageNumber = Math.floor(Math.random() * 80) + 1;
    const imageURL = `https://unsplash.it/300/300?image=${imageNumber}`;

    return {
        authorName: randomName,
        image: imageURL
    };
}

// ---Function to generate random date---
function dateGenerator() {
    let randomDate = '';
    // ---Generate a year between 1970 and 2023---
    let year = Math.floor(Math.random() * (2023 - 1970 + 1)) + 1970;
    // ---Generate a month number from 1 to 12---
    let month = Math.floor(Math.random() * 12) + 1; 
    // ---Generate a day number from 1 to 28---
    let day = Math.floor(Math.random() * 28) + 1; 
    // ---Format the month and day as two-digit strings---
    let monthFormatted = month < 10 ? '0' + month : month.toString();
    let dayFormatted = day < 10 ? '0' + day : day.toString();
    // ---Populate randomDate with the right format of the generated date---
    randomDate = year + '-' + monthFormatted + '-' + dayFormatted;
    return randomDate;
}

// ---Function to generate post content---
function generatePost() {
    return {
        id: generateId(),
        content: generateContent(),
        media: generateImageURL(),
        author: generateAuthor(),
        likes: Math.floor(Math.random() * 200) + 1,
        created: dateGenerator()
    };
}

// ---Function that for each post (object) inside posts (array) I'll populate the container with the elements---
function postcreation(postnum){
    posts.forEach(post => {
        // ---Transform the post creation date YYYY/MM/DD to DD/MM/YYYY---
        let split = (post.created).split('-')
        post.created = split[2]+'-'+split[1]+'-'+split[0]
        // ---Populate the container with elements with custom info based on current post info---
        container.innerHTML += `<div class="post${postnum} ${post.id}">
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
};

// ---Create some variable related to each individual post inside userpost and change some elements based on used action---
function clickaction(){
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
    };