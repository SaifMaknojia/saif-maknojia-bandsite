let button = document.querySelector('#button');
let name = document.querySelector('#name');
let comment = document.querySelector('comments');
let form







var fullName = ['Theodore Duncan','Gary Wong','Micheal Lyons']

var reviews = ['How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!',

'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!',


'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'  
];

for( var i = 0; i < reviews.length; i++){
    var content = document.createElement("SECTION")
    console.log(reviews[i]);
}

for( var i = 0; i < fullName.length; i++){
    console.log(fullName[i]);
}


// Event Listeners
button.addEventListener('click', function(e){
    e.preventDefault();
    console.log('button was pressed');
})