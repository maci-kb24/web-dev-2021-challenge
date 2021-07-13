const reviewBtn = document.getElementById('review-btn');
const reviewCard = document.getElementById('review-card');
const starOutline = document.getElementsByClassName('star-outline');
const starFill = document.getElementsByClassName('star-fill');
const label = document.getElementById('label');
const submitBtn = document.getElementById('submit-btn');
const form = document.getElementById('review-form');
const comment = document.getElementById('comment');
const input = document.querySelectorAll('input[type="radio"]');


reviewBtn.addEventListener('click', clickBtn);

function clickBtn() {
    reviewBtn.style.display = 'none';
    reviewCard.style.display = 'flex';
}

// label.addEventListener('click', checked);

// function checked() {
//     for( let i = 0; i < starOutline.length; i++) {
//         starFill[i].style.display = 'inline-block';
//     }
//     reviewCard.style.background = '#000000';
//     document.getElementById('submit-btn').disabled = true;
// }

form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  let inputValue = input.value;
  let commentValue = comment.value;

  fetch('http://localhost:3000/reviews', {
    method: 'POST',
    body: JSON.stringify({
    rating: '',
    comment: ''
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));
}
