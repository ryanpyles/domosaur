let spanMess = document.querySelector('.mess-with-me');
spanMess.style.fontSize = "40px";
//tag.className grabs the first instance of that tag
//with that className
let paraMess = document.querySelector('p.mess-with-me');
paraMess.style.background = "green";
let hiddenDino = document.querySelector("#hide-me");
hiddenDino.style.display = 'none';
//hiddenDino.style.opacity = '0';
let firstDino = document.querySelector("#triceratops");
firstDino.style.width = '324px';
//EVENT LISTENERS!
spanMess.addEventListener('click', function(){
    spanMess.style.color = "orange";
});
firstDino.addEventListener('click', function(){
    firstDino.style.border = '3px solid red';
    });
let toggleBackground = document.querySelector('#toggle');
let dinoRow = document.querySelector('#row');

toggleBackground.addEventListener('click', function(){
    if(dinoRow.style.background === ''){
        dinoRow.style.background = 'lightblue';
    } else {
        dinoRow.style.background = '';
    }
});

let getBig = document.querySelector('#biggify');
getBig.addEventListener('mouseenter', function(){
    getBig.style.width = '200px';
});

getBig.addEventListener('mouseout', function(){
    getBig.style.width = '162px';
});