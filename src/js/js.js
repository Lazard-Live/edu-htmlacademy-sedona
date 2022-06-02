function handleClick() {
    if (hotelForm.classList.contains('search-hotel_active')) {
        hotelForm.classList.remove('search-hotel_active');
    } else {
        hotelForm.classList.add('search-hotel_active');
    }
}

let btn = document.getElementById('show-form');
let hotelForm = document.getElementById("search-hotel");

hotelForm.classList.remove('search-hotel_active');
btn.addEventListener('click', handleClick);

