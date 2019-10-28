const title = document.querySelector('title').innerText;
const header = document.querySelector('header > h1');
header.innerText = title;

((a) => { console.log(a); } )(title);