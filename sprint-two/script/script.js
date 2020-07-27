
//Selecetors for dom 
let button = document.querySelector('#button');
let name = document.getElementById('name');
let comment = document.getElementById('comments');
let output = document.querySelector('.output');
let form = document.querySelector('.form')

var input = [
    {
        name: 'Theodore Duncan',
        review: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
    },
    {
        name: 'Gary Wong',
        review: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
    },
    {
        name:'Micheal Lyons',
        review: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
    }
];


displayComments()

function displayComments() {
    output.innerHTML = ""
    for (var i = input.length - 1; i >=0; i--){
        let review = document.createElement('div');
        review.classList.add('reviews');
    
        let reviewContainer = document.createElement('div');
        reviewContainer.classList.add('reviews__container');
        
        let image = document.createElement('div');
        image.classList.add('reviews__container--image');
    
        let commentInput = document.createElement('div');
        commentInput.classList.add('reviews__display')
    
        let heading = document.createElement('h2');
        heading.innerText = `${input[i].name}   ${(new Date()).getDate()}/${(new Date()).getMonth()}/${(new Date()).getFullYear()}` ;
        heading.classList.add('reviews__display--heading');
    
        let para = document.createElement('p')
        para.innerText = input[i].review;
        para.classList.add('reviews__display--content');
    
        // wraping inside div .reviews__container
        reviewContainer.appendChild(image);
    
        // wrapping under div review__display
        commentInput.appendChild(heading);
        commentInput.appendChild(para);
    
        // wrapping under div reviews
        review.appendChild(reviewContainer);
        review.appendChild(commentInput);
        // review.appendChild(para);
        output.appendChild(review);   
    }
}


form.addEventListener('submit', function(e){
    e.preventDefault();
    if(name.value && comments.value) {
        input.push({
            name: name.value,
            review: comment.value
        })
        displayComments()
        name.value = ""
        comment.value = ""
    }
})



// (new Date()).getDate();
// (new Date()).getMonth();
// (new Date()).getFullYear();