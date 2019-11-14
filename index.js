const title = document.querySelector('title').innerText;
const header = document.querySelector('header > h1');

(
	(a) => { 
		setTimeout(() => {
			header.innerText = title;
			header.classList.add('shadow')
	}, 2000) } 
)(title);

console.log('aaaaa')