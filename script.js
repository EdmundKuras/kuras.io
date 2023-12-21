document.addEventListener("DOMContentLoaded", function() {
    // Your dynamic JavaScript code can go here
    console.log("Welcome to Kuras.io!");
	
	document.addEventListener("DOMContentLoaded", function() {
    fetch('reviews.json')
    .then(response => response.json())
    .then(data => {
        const reviewsContainer = document.getElementById('reviews');
        reviewsContainer.innerHTML = ''; // Clear the loading text

        data.forEach(review => {
            const div = document.createElement('div');
            div.className = 'review';
            div.innerHTML = `<h2>${review.product}</h2><p>${review.review}</p>`;
            reviewsContainer.appendChild(div);
        });
    })
    .catch(error => {
        document.getElementById('reviews').innerText = 'Failed to load reviews.';
    });
});

});
