// const thumbsUp = document.getElementById("thumbsUp");
// const thumbsDown = document.getElementById("thumbsDown");
// const thumbsUpIncrease = document.getElementById("thumbsUpIncrease");
// const thumbsDownIncrease = document.getElementById("thumbsDownIncrease");

// thumbsUp.addEventListener('click', () => {
//   let count = parseInt(thumbsUpIncrease.textContent, 10);
//   thumbsUpIncrease.textContent = count + 1;
// });

// thumbsDown.addEventListener('click', () => {
//   let count = parseInt(thumbsDownIncrease.textContent, 10);
//   thumbsDownIncrease.textContent = count + 1;
// });


// to save in local 
const thumbsUp = document.getElementById("thumbsUp");
const thumbsDown = document.getElementById("thumbsDown");
const thumbsUpIncrease = document.getElementById("thumbsUpIncrease");
const thumbsDownIncrease = document.getElementById("thumbsDownIncrease");

// Load thumbs up increasing count and saved count from localStorage
let count = parseInt(localStorage.getItem('thumbsUpIncrease')) || 0;
thumbsUpIncrease.textContent = count;

// Update count on click
thumbsUp.addEventListener('click', () => {
  count++;
  thumbsUpIncrease.textContent = count;
  localStorage.setItem('thumbsUpIncrease', count);
});

// load thumbsdown increasing count 
let count2 = parseInt(localStorage.getItem('thumbsDownIncrease')) || 0;
thumbsDownIncrease.textContent = count2;

// Update count on click
thumbsDown.addEventListener('click', () => {
  count2++;
  thumbsDownIncrease.textContent = count2;
  localStorage.setItem('thumbsDownIncrease', count2);
});