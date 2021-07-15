const reviewBtn = document.getElementById('review-btn');
const reviewCard = document.getElementById('review-card');
const starOutline = document.getElementsByClassName('star-outline');
const starFill = document.getElementsByClassName('star-fill');
const label = document.getElementById('label');
const submitBtn = document.getElementById('submit-btn');
const form = document.getElementById('review-form');
const reviewBox = document.getElementById('review-box');
const inputs = document.querySelectorAll('input[type="checkbox"]').value;
const inputOne = document.getElementById('star-one');
const inputTwo = document.getElementById('star-two');


reviewBtn.addEventListener('click', clickBtn);

function clickBtn() {
    reviewBtn.style.display = 'none';
    reviewCard.style.display = 'flex';
    submitBtn.disabled = false;
}

// inputs.addEventListener('click', checked);

// function checked() {

//     for( let i = inputs.length - 1; i >= 0; i--) {
//       return inputs[i].value;
//     }

//     if( inputs[0].value == true ) {
//       textBox.style.display = 'block';
//       textBoxTwo.style.display = 'none';
//     }
//     else if( inputs[1].value == true) {
//       textBoxTwo.style.display = 'block';
//       textBox.style.display = 'none';
//     }
// }

form.addEventListener('submit', submitForm);

async function submitForm(event) {

  event.preventDefault();

  const reviewBox = document.getElementById('review-box');
  const inputs = document.querySelectorAll('input[type="checkbox"]');

  for( let i = inputs.length - 1; i >= 0; i--) {
    return inputs[i].value;
  }

  await fetch('http://localhost:3000/reviews', {
    method: 'POST',
    body: JSON.stringify({
    id: ' ',
    productId: ' ',
    rating: inputs[i].value,
    comment: reviewBox.value
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  })
  .then((response) => response.json())
  .then((data) => console.log(data));

  submitBtn.disabled = true;

}
