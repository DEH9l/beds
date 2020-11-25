const rating=document.querySelectorAll('.rating-stars__item');
const ratingArray = Array.prototype.slice.call(rating);

ratingArray.forEach(item=>item.addEventListener( 'click',() =>
    item.parentNode.dataset. totalValue = item.dataset.itemValue
)
);