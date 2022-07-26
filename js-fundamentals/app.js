const body = document.querySelector("body");

const para = document.createElement('p');
para.innerText = "Hey, I'm red!";
para.style.color = "red";

const blueHeader = document.createElement('h3');
blueHeader.innerText = "I'm a blue h3";
blueHeader.style.color = "blue";

const div = document.createElement('div');
div.style.borderColor = 'black';
div.style.border = 'solid';
div.style.backgroundColor = 'pink';
const header1 = document.createElement('h1');
header1.innerText = "I'm in a div";
div.appendChild(header1)
const p = document.createElement('p');
p.innerText = "ME TOO!";
div.appendChild(p);

body.appendChild(para);
body.appendChild(blueHeader);
body.appendChild(div);


const btn = document.getElementById('btn');
btn.onclick = () => alert('Hello, World!');

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
	alert("Hello, World!");
})
