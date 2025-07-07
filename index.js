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


// like button

const strokeLove = document.getElementById('strokeLove');
const filledLove = document.getElementById('filledLove');
const message = document.getElementById('message');
const message2 = document.getElementById('message2');

strokeLove.addEventListener('click', () => {
    filledLove.classList.toggle('opacity-100');
    strokeLove.classList.toggle('opacity-0');
    filledLove.classList.toggle('invisible');
    
if(filledLove.classList.contains('opacity-100')) {
    message.textContent = "You liked this!";
    message.classList.remove("hidden");
    message2.classList.add("hidden");
    setTimeout(() => {
        message.classList.add("hidden");
    }, 3000);

}else{
    message2.textContent = "You unliked this!";
    message2.classList.remove("hidden");
    message.classList.add("hidden");
    setTimeout(() => {
        message2.classList.add("hidden");
    }, 3000);

}
});

// Draggable element in a container
  document.addEventListener("DOMContentLoaded", () => {
    const dragMe = document.getElementById('dragMe');
    const motherBoard = document.getElementById('motherBoard');

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    dragMe.addEventListener('mousedown', (e) => {
      isDragging = true;
      offsetX = e.clientX - dragMe.offsetLeft;
      offsetY = e.clientY - dragMe.offsetTop;
      dragMe.classList.replace('cursor-grab', 'cursor-grabbing');
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;

      const motherBoardRect = motherBoard.getBoundingClientRect();
      const dragWidth = dragMe.offsetWidth;
      const dragHeight = dragMe.offsetHeight;

      let x = e.clientX - motherBoardRect.left - offsetX;
      let y = e.clientY - motherBoardRect.top - offsetY;

      // Constrain within motherBoard
      x = Math.max(0, Math.min(x, motherBoardRect.width - dragWidth));
      y = Math.max(0, Math.min(y, motherBoardRect.height - dragHeight));

      dragMe.style.left = `${x}px`;
      dragMe.style.top = `${y}px`;
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
      dragMe.classList.replace('cursor-grabbing', 'cursor-grab');
    });
  });







// filledLove.addEventListener('click', () => {
//     strokeLove.classList.remove('opacity-100');
//     filledLove.classList.add('opacity-0');
// })
