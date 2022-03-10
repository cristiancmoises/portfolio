// 21 - Feb - 2022 

// const data = document.getElementById('data');
const title = document.title;
const links = document.querySelectorAll('.navbar a');


// Dynamically change <title> inner content, 
// when user click at navigation links 
links.forEach((link, i) => {
    link.addEventListener('click', () => {
        let clickLink = link.children[1].innerHTML;
        document.title = `${title}'s - ${clickLink.charAt(0).toUpperCase() + clickLink.slice(1)}`;
    });
});


// auto reset page <title> after every 30 second... 
setInterval(() => {
    document.title = title;
}, 30000);


/*****************************************************************
******************************************************************
******************************************************************/
// Load More Button Working Function
let workLoadMoreBtn = document.getElementById('workLoadMore');
let currentWork = 3;

workLoadMoreBtn.addEventListener('click', () => {

    let boxes = [...document.querySelectorAll('.portfolio .box-container .box')];

    for (let i = currentWork; i < currentWork + 3; i++) {
        boxes[i].style.display = 'inline-block';
    }

    currentWork += 3;

    if (currentWork >= boxes.length) {
        workLoadMoreBtn.style.display = 'none';
    }
});


let blogLoadMoreBtn = document.getElementById('blogLoadMore');
let currentBlog = 3;

blogLoadMoreBtn.addEventListener('click', () => {

    console.log()
    let boxes = [...document.querySelectorAll('.blogs .box-container .box')];

    for (let i = currentBlog; i < currentBlog + 3; i++) {
        boxes[i].style.display = 'inline-block';
    }

    currentBlog += 3;

    if (currentBlog >= boxes.length) {
        blogLoadMoreBtn.style.display = 'none';
    }
});


/*****************************************************************
******************************************************************
******************************************************************/
// JavaScript Typing Animation
let typed = new Typed('#inputFromJS', {

    strings: ['SEO Developer ', 'Digital Marketer'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true

});
