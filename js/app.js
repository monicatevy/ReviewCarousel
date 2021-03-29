// local reviews data
const reviews = [
    {
        id: 1,
        author: "talmeshak",
        product: "Bali Bod Bundle",
        type: "Body",
        info: "The entire collection together gave my skin the rejuvenation it needed. I have more confidence in the way I feel because for mee it's always about the feeling more than the look.",
        rate: 4.5
    }, 

    {
        id: 2,
        author: "lauren",
        product: "Bali Bronzing Foam (Dark)",
        type: "Tan",
        info: "I have been working all summer and have had no sun time so this product has been my favorite to help me look tan before events!",
        rate: 5
    }, 

    {
        id: 3,
        author: "nadia",
        product: "Miracle Hair Elixir",
        type: "Hair",
        info: "Ths hair oil made my hair VERY smooth, shiny and hydrated after using it! The elixir is very lightweight, no matter how much or how little you decide to use. I'm obsessed!",
        rate: 4.5
    },

    {
        id: 4,
        author: "emily",
        product: "Hair Masque",
        type: "Hair",
        info: "I have very long natural hair so I am very of what I put on/in it. I wanted healthier-smoother looking hair with natural ingredients and I was shocked by my results. I'm buying 10 more. Thanks for being my little hair secret that I tell everyone!",
        rate: 4.5
    },

    {
        id: 5,
        author: "shrienzada",
        product: "Bali Bronzing Foam (Dark)",
        type: "Tan",
        info: "Obsessed with how perfectly golden this leaves my skin! Best part: this is the WORLDS FIRST fake tan formula to help reduce cellulite AND have anti aging",
        rate: 5
    },

    {
        id: 6,
        author: "marija",
        product: "Bali Bod Bundle",
        type: "Body",
        info: "I struggle with cellulite so wanted to try this 3 step process Glow Figure range! After using the products my skin was a lot softer, smoother and had more glow! They have an amazing lychee sent and contain unique patented cellushape techno formula which gives a reduction in cellulite",
        rate: 4.5
    },

    {
        id: 7,
        author: "stella",
        product: "Bronzing Face Drops",
        type: "Tan",
        info: "It's so incredible and cute! You just mix a few drops (depending on how much of tan you want) into your daily moisturiser, and apply it evenly onto your face!",
        rate: 4
    }
]

// select items
const img = document.getElementById('img');
const author = document.getElementById('author');
const product = document.getElementById('product');
const type = document.getElementById('type');
const info = document.getElementById('info');
const stars = document.querySelectorAll('.stars i');

// select btns
const btns = document.querySelectorAll('.btn');

// set the first review
let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
    displayReview(currentItem);
})

// add event listener to each btn
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;

        // set stars to unchecked
        for(let k = 0; k < stars.length; k++){
            stars[k].setAttribute('class', 'far fa-star');
        }

        // show previous review
        if(styles.contains('btn-prev')){
           currentItem--;
           if(currentItem < 0){
               currentItem = reviews.length -1;
               console.log(currentItem);
           }
           displayReview(currentItem);
        }

        // show next review
        else if (styles.contains('btn-next')){
           currentItem++;
           if(currentItem > reviews.length - 1){
            currentItem = 0;
           }
           displayReview(currentItem);
        }

        // show random review
        else {
            random = getRandomNumber();
            while(random === currentItem){
                random = getRandomNumber();
            }
            currentItem = random;
            displayReview(currentItem)
        };
    });
});  

// show review based on the item
function displayReview (index){
    let  item = reviews[index];

    img.setAttribute('src', 'images/'+ item.id +'.jpg');
    img.setAttribute('onerror', "this.onerror=null;this.src='images/alt.png';")
    author.textContent = '@' + item.author;
    product.textContent = item.product;
    type.textContent = item.type;
    type.setAttribute('class', 'type ' + type.textContent.toLocaleLowerCase());
    info.textContent = '" ' + item.info + ' "';

    // set stars
    const rate = item.rate;
    
    // if rate is Integer 
    // ex: 4 / 5
    // checked = 4
    // unchecked = 1
    if(Number.isInteger(rate)){

        let checked = rate;
        for(let k = 0; k < checked; k++){
            stars[k].setAttribute('class', 'fas fa-star');
        }
        
        let unchecked = stars.length - checked;
        for(let k = 0; k < unchecked; k++){
            stars[rate].setAttribute('class', 'far fa-star');
        }
    }
    // if rate is a Float
    // ex: 4.5 / 5
    // checked = 4
    // half star = 1
    // unchecked = 0
    else {

        let checked = Math.floor(rate);
        for(let k = 0; k < checked; k++){
            stars[k].setAttribute('class', 'fas fa-star');
        }
        stars[checked].setAttribute('class', 'fas fa-star-half-alt');

        let unchecked = stars.length - checked - 1;
        for(let k = 0; k < unchecked; k++){
            stars[checked+1].setAttribute('class', 'far fa-star');
        }
    }
}

function getRandomNumber(){
    return Math.floor(Math.random() * reviews.length);
}