
//Selecetors for dom 
let button = document.querySelector('#button');
let name = document.getElementById('name');
let comment = document.getElementById('comments');
let output = document.querySelector('.output');
let form = document.querySelector('.form')


// var api="6d56a3c2-926f-4c4e-abd8-22e69d538d17"

api = ()=>{
    axios.get('https://project-1-api.herokuapp.com/comments?api_key=6d56a3c2-926f-4c4e-abd8-22e69d538d17')
    .then(results =>{
        console.log(results);
        // console.log(results.data[i].timestamp.toDateString)
        for( let i = 0; i < results.data.length; i++){
            apiInfo(results, i);
        }  
    }).catch(err =>{
        console.log('there was error in api')
    })
}


api();

apiInfo =(results, i)=> {
    let mainContainer = document.createElement('div');
    mainContainer.classList.add('.main__container');

    
    let imageContainer = document.createElement('div');
    imageContainer.classList.add('.image__container');


    let contentHolder =  document.createElement('div');
    contentHolder.classList.add('.infoholder__container');


    let inputContent = document.createElement('div');
    inputContent.classList.add('.nameDate');
    

    let inputName = document.createElement('h3');
     inputName.innerText = results.data[i].name;
    inputName.classList.add('.nameDate__name');

    let inputDate = document.createElement('h3');
    inputDate.innerText = results.data[i].timestamp;
    inputDate.classList.add('.output__container--date');

    let commentContent = document.createElement('div')
    commentContent.classList.add('.comments')

    let commentHolder = document.createElement('p');
    commentHolder.innerText = results.data[i].comment;
    commentHolder.classList.add('.comments__review')
    // image holder
    mainContainer.appendChild(imageContainer)

    //name date and review holder
    mainContainer.appendChild(contentHolder)

    // main holder for 2 divs   
    contentHolder.appendChild(inputContent)
    contentHolder.appendChild(commentContent)

    commentContent.appendChild(commentHolder)

    //name and dates on there respective div
    inputContent.appendChild(inputName);
    inputContent.appendChild(inputDate)

    //section holder
    output.appendChild(mainContainer);
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('button was clicked')
    if(name.value && comments.value) {
        res.push({
            name: name.value,
            review: comment.value
        })
        apiInfo()
        // name.value = ""
        // comment.value = ""
    }
})



// (new Date()).getDate();
// (new Date()).getMonth();
// (new Date()).getFullYear();