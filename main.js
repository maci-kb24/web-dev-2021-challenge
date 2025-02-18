// getting the variables
const starRating = document.querySelector('star-ratings');
const reviewBtn = document.getElementById('review-btn');
const submitBtn = document.getElementById('submit-btn');

const form = document.getElementById('review-form');

const reviewCard = document.getElementById('review-card');
const reviewBox = document.getElementById('review-box');
const label = document.getElementById('review-label');
const review1 = document.getElementById("review-one");
const reviewContent = document.getElementById("review-content");

const inputs = document.querySelectorAll('input[type="checkbox"]').value;

const spinner = document.getElementById("spinner");
const check = document.getElementById("check");
const uncheck = document.getElementById("uncheck");

let ratings;

//Add event listener to write a review button

reviewBtn.addEventListener('click', clickBtn);

function clickBtn() {
    reviewBtn.style.display = 'none';
    reviewCard.style.display = 'flex';
    submitBtn.disabled = true;
    
    spinner.style.display = "block";
    check.style.display = "none";
    uncheck.style.display = "none";
}

function onClickHandler(cb) {
 // console.log("Clicked, new value = " + cb.value);
  ratings = cb.value;

  // submitBtn.disabled = true;
  // spinner.style.display = "block";
  reviewContent.style.display = "flex";

  if(ratings >= 3){
    review1.style.display = "flex";
    label.innerHTML = "Any highlight you would like to share?";
    reviewBox.placeholder = "Let us know your thougths";
    

  }else{
    review1.style.display = "flex";
    label.innerHTML = "What's wrong with it?";
    reviewBox.placeholder = "I didn't like the fact that it was...";
  }

  reviewBox.addEventListener('keypress', logKey);

  function logKey() {
    submitBtn.disabled = false;
    spinner.style.display = "none"
  }
}

//Submit form

form.addEventListener('submit', submitForm);

async function submitForm(event) {

  event.preventDefault();
  
  var formData = new FormData(form);
  // Below code is to get all values in the form.
  var obj = {};
	for (var key of formData.keys()) {
		obj[key] = formData.get(key);
    
	}

  const comment = formData.get("comment-one");

  const Data =  {
    "id": Math.floor((Math.random() * 100) + 1), // random number between 1 to 100
    "productId": Math.floor((Math.random() * 100) + 1), 
    "rating": ratings,
    "comment": comment
  }

  await fetch('http://localhost:3000/reviews', {
    method: 'POST',
    body: JSON.stringify(Data),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  })
  .then(response => response.json())
  .then(data => {
    data;
    submitBtn.disabled = true;
    check.style.display = "block";
    reviewCard.style.background = "transparent";

  })
 .catch(err => {console.log(err);
  uncheck.style.display = "block";
  spinner.style.display = "none";

});
  

}
