const api = 'https://api.adviceslip.com/advice';
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const bgColors = ["#e29f9f", "#dbe29f", "#9fe2a2", "#9fc9e2", "#a69fe2", "#da9fe2", "#e29f9f", "#9fe2dc"]

const quote = document.getElementById("quote");
const date = document.getElementById("date");

document.querySelector("body").style.backgroundColor = bgColors[Math.floor(Math.random() * bgColors.length)];

fetch(api)
    .then(response => {
        response.json().then(data => {
            quote.innerText = data.slip.advice;
        })
    })

    
var today = new Date();
date.innerText = `${monthNames[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;