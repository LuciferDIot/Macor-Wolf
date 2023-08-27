
//welcome page image
var images = [
    'Assets/slides/1.jpg',
    'Assets/slides/2.jpg',
    'Assets/slides/3.jpg',
    'Assets/slides/4.jpg',
    'Assets/slides/5.jpg'
];
var currentImageIndex = 0;

var imgButton_r = document.getElementById('wr-arrow');
var imgButton_l = document.getElementById('wl-arrow');
var image_Element = document.getElementById('main');

function changeImage() {
    console.log(currentImageIndex)

    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    console.log(image_Element);
    image_Element.style.backgroundImage = `url(${images[currentImageIndex]})`;
}

function changeImageReverse() {
    console.log(currentImageIndex)
    currentImageIndex--;

    if (currentImageIndex === -1) currentImageIndex = images.length - 1;

    image_Element.style.backgroundImage = `url(${images[currentImageIndex]})`;
}

// Call the changeImage function every 5 seconds
setInterval(changeImage, 2000);
console.log(234);

imgButton_r.addEventListener('click', function () {
    changeImage();
    event.preventDefault();
});

imgButton_l.addEventListener('click', function () {
    changeImageReverse();
    event.preventDefault();
});







// products arrow key
var scrollButton_r = document.getElementById('scroll-button-r');
var scrollButton_l = document.getElementById('scroll-button-l');
var scrollContainer = document.getElementById('products-scroll');

scrollButton_r.addEventListener('click', function () {
    // Scroll the scroll bar 200px
    scrollContainer.scrollBy({
        left: 200,
        behavior: 'smooth' // Enable smooth scrolling
    });
});

scrollButton_l.addEventListener('click', function () {
    // Scroll the scroll bar 200px tp right side
    scrollContainer.scrollBy({
        left: -200,
        behavior: 'smooth' // Enable smooth scrolling
    });
});





var categories = [
    { id: "Toyota", text: "Toyota" },
    { id: "Honda", text: "Honda" },
    { id: "Mitsubishi", text: "Mitsubishi" },
    { id: "BMW", text: "BMW" },
    { id: "Hyundai", text: "Hyundai" },
    { id: "main", text: "Home" },
    { id: "brands", text: "Brands" },
    { id: "about", text: "About us" },
    { id: "products", text: "Products" },
    { id: "contact", text: "Contact" },
];

var links = ["main", "brands", "about", "products", "contact"]

//search suggestions
var input = document.getElementById('searchBox');
var dropdown = document.getElementById('dropdown');
var search_btn = document.getElementById('search-btn');

input.addEventListener('input', function () {

    var enteredText = input.value.toLowerCase();

    var matchedItems = categories.filter(function (item) {
        return item.text.toLowerCase().includes(enteredText.toLowerCase());
    });

    // Generate the dropdown content
    var dropdownContent = '';
    for (var i = 0; i < matchedItems.length; i++) {
        dropdownContent += '<div>' + matchedItems[i].text + '</div>';
    }

    // Display or hide the dropdown
    if (matchedItems.length > 0) {
        dropdown.innerHTML = dropdownContent;
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
});

// Close the dropdown when clicking outside
document.addEventListener('click', function (event) {
    if (!dropdown.contains(event.target) && !input.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});

// Handle dropdown item selection
dropdown.addEventListener('click', function (event) {
    var selectedText = event.target.textContent;
    input.value = selectedText;
    
    dropdown.style.display = 'none';
});

// search button function
search_btn.addEventListener("click", ()=>{
    var enteredText = input.value.toLowerCase();
    if(links.includes(enteredText)){
        const element = document.getElementById(enteredText);
    
        element.scrollIntoView({ behavior: 'smooth' });
    }
})