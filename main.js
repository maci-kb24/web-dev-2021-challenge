const reviewBtn = document.getElementById('review-btn');
const reviewCard = document.getElementById('review-card');
const stars = document.getElementById('stars');
const submitBtn = document.getElementById('submit-btn')

reviewBtn.addEventListener('click', clickBtn);

function clickBtn() {
    reviewBtn.style.display = 'none';
    reviewCard.style.display = 'flex';
}

stars.addEventListener('click', checked);

function checked() {
    // for (let i = 0; i < stars.length; i++) {
    //     stars[i].classList.toggle("far");
    //     stars[i].classList.toggle("fas");
    // }
    stars.classList.toggle("fas");
    reviewCard.style.background = '#000000';
    document.getElementById('submit-btn').disabled = true;

}

