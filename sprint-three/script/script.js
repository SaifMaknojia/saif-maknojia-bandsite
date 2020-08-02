
//Selecetors for dom 
let button = document.querySelector('#button');
let output = document.querySelector('#displayComments');
let form = document.getElementById('commentsForm');
let comments = [];

insertComments = () => {
  output.innerHTML = '';
  for (let i = 0; i < comments.length; i++) {
    const element = comments[i];


    let mainContainer = document.createElement('div');
    mainContainer.classList.add('main__container');


    let imageContainer = document.createElement('div');
    imageContainer.classList.add('image__container');

    let image = document.createElement('div');
    image.classList.add('image__container--background');
    imageContainer.appendChild(image)

    let contentHolder = document.createElement('div');
    contentHolder.classList.add('infoholder__container');


    let inputContent = document.createElement('div');
    inputContent.classList.add('nameDate');


    let inputName = document.createElement('h3');
    inputName.innerText = element.name;
    inputName.classList.add('nameDate__name');

    let inputDate = document.createElement('h3');
    const date = new Date(element.timestamp);
    inputDate.innerText = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    inputDate.classList.add('output__container--date');

    let commentContent = document.createElement('div');
    commentContent.classList.add('comments');

    let commentHolder = document.createElement('p');
    commentHolder.innerText = element.comment;
    commentHolder.classList.add('comments__review');
    // image holder
    mainContainer.appendChild(imageContainer);

    //name date and review holder
    mainContainer.appendChild(contentHolder);

    // main holder for 2 divs   
    contentHolder.appendChild(inputContent);
    contentHolder.appendChild(commentContent);

    commentContent.appendChild(commentHolder);

    //name and dates on there respective div
    inputContent.appendChild(inputName);
    inputContent.appendChild(inputDate);

    //section holder
    output.appendChild(mainContainer);
  }
}

api = () => {
  axios.get('https://project-1-api.herokuapp.com/comments?api_key=6d56a3c2-926f-4c4e-abd8-22e69d538d17')
    .then(results => {
      comments = results.data;
      insertComments();

    }).catch(err => {
      console.log('there was error in api');
    })
}


api();


form.onsubmit = (event) => {
  event.preventDefault();
  let name = document.getElementById('name').value;
  let comment = document.getElementById('comments').value;
  let timestamp = Date.now();
  console.log(name, comment, timestamp);
  comments.unshift({
    comment: comment,
    name: name,
    timestamp: timestamp

  });
  insertComments();

}

