const reviewBtn = document.getElementById('review-btn');
const reviewCard = document.getElementById('review-card');
const starOutline = document.getElementsByClassName('star-outline');
const starFill = document.getElementsByClassName('star-fill');
const label = document.getElementById('label');
const submitBtn = document.getElementById('submit-btn');
const form = document.getElementById('review-form');
const textBox = document.getElementById('review-one');
const textBoxTwo = document.getElementById('review-two');
const inputs = document.querySelectorAll('input[type="checkbox"]');
const inputOne = document.getElementById('star-one');
const inputTwo = document.getElementById('star-two');



//Write a review btn
reviewBtn.addEventListener('click', clickBtn);

function clickBtn() {
    reviewBtn.style.display = 'none';
    reviewCard.style.display = 'flex';
}


// inputs.addEventListener('click', checked);

// function checked() {

//     for( let i = inputs.length - 1; i >= 0; i--) {
//       return inputs[i].value;
//     }

//     if( inputOne.value & inputTwo.value ) {
//       textBox.style.display = 'block';
//       textBoxTwo.style.display = 'none';
//     }
//     else {
//       textBoxTwo.style.display = 'block';
//     }
//     // for( let i = 0; i < starOutline.length; i++) {
//     //     starFill[i].style.display = 'inline-block';
//     // }
//     // reviewCard.style.background = '#000000';
//     // document.getElementById('submit-btn').disabled = true;
// }

form.addEventListener('submit', submitForm);

async function submitForm(event) {
  event.preventDefault();

  // const comment = document.getElementById('comment');
  // const inputs = document.querySelectorAll('input[type="checkbox"]');

  // for( let i = inputs.length - 1; i >= 0; i--) {
  //   return inputs[i].value;
  // }

  await fetch('http://localhost:3000/reviews', {
    method: 'POST',
    body: JSON.stringify({
    id: ' ',
    productId: ' ',
    rating: inputs.value,
    comment: textBox.value
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  })
  .then((response) => response.json())
  .then((data) => console.log(data));
}
