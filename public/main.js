/* Adding functions */
let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

//Changing the quantity of products entered by the user in the input


let userInputNumber = 0;

plusBtn.addEventListener('click', ()=>{
    userInputNumber++;
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});
minusBtn.addEventListener('click', ()=>{
    userInputNumber--;
    if(userInputNumber <= 0){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});

//Add total products to cart with the 'ADD TO CART' button

const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');
let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener('click', ()=>{
    lastValue = lastValue + userInputNumber;
    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';
    renderProductInModalCart();
    
});

//Show the modal with the cart detail

const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
//let priceModal = document.querySelector('.cart-modal__price');
const productContainer = document.querySelector('.cart-modal__checkout-container');

cartIconBtn.addEventListener('click', ()=>{
    cartModal.classList.toggle('show');

    if(lastValue === 0){
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty. </p>';
    }else{
        renderProductInModalCart();
    }
})


//Delete products from cart

function deleteProduct(){
    const deleteProductBtn = document.querySelector('.cart-modal__delete');
    deleteProductBtn.addEventListener('click',()=>{
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty. </p>';
        lastValue = 0;
        cartNotification.innerText = lastValue;
    })
}


//Pass images when the user push the arrows
const imageContainer = document.querySelector('.gallery__image-container'); 
const previousGalleryBtn = document.querySelector('.gallery__previous'); 
const nextGalleryBtn = document.querySelector('.gallery__next'); 
let imgIndex = 1;

nextGalleryBtn.addEventListener('click', ()=>{
    changeNextImage(imageContainer);
})
previousGalleryBtn.addEventListener('click', ()=>{
    changePreviousImage(imageContainer);
})




//Show modal images when user click in the principal image

const imageModal = document.querySelector('.modal-gallery__background');
const closeModalBtn = document.querySelector('.modal-gallery__close');

imageContainer.addEventListener('click', ()=>{
    imageModal.style.display = 'grid';
})
closeModalBtn.addEventListener('click', ()=>{
    imageModal.style.display = 'none';
})


//Change principal images from thimbnails
let galleryThumbnails = document.querySelectorAll('.gallery__thumbnail');
galleryThumbnails = [...galleryThumbnails];
galleryThumbnails.forEach(thumbnail =>{
    thumbnail.addEventListener('click', event =>{
        imageContainer.style.backgroundImage = `url('/images/image-product-${event.target.id}.jpg')`
    })
})

//Change principal images from mdoal thumbnails
let modalThumbnails = document.querySelectorAll('.modal-gallery__thumbnail');
const modalImageContainer = document.querySelector('.modal-gallery__image-container');
modalThumbnails = [...modalThumbnails];
modalThumbnails.forEach(modalThumbnail =>{
    modalThumbnail.addEventListener('click', event =>{
        console.log(event.target.id.slice(-1));
        modalImageContainer.style.backgroundImage = `url('/images/image-product-${event.target.id.slice(-1)}.jpg')`
    })
});


//Change pricipal modal image from modla buttons

const previousModalBtn = document.querySelector('.modal-gallery__previous');
const nextModalBtn = document.querySelector('.modal-gallery__next');

nextModalBtn.addEventListener('click', ()=>{
    changeNextImage(modalImageContainer);
})
previousModalBtn.addEventListener('click', ()=>{
    changePreviousImage(modalImageContainer);
})


//Show Modal navbar when tap menu icon

const modalMenuIcon = document.querySelector('.header__menu');
const modalNavbar = document.querySelector('.modal-navbar__background');

modalMenuIcon.addEventListener('click', ()=>{
    console.log(modalMenuIcon)
    modalNavbar.style.display = 'block';
})


//Quit Modal nabvar when tap exti modal navbar icon

const modalCloseIcon = document.querySelector('.modal-navbar__close-icon');

modalCloseIcon.addEventListener('click', ()=>{
    modalNavbar.style.display = 'none';
})


//Functions

/*  function to render productos in the modal cart*/
function renderProductInModalCart(){
    productContainer.innerHTML = `<div class="cart-modal__details-container">
        <img class="cart-modal__image" src="/images/image-product-1-thumbnail.jpg" alt="image-product-1-thumbnail">
            <div>
                    <p class="cart-modal__product">
                    Automn Limited Edition...
                    </p>
                    <p class="cart-modal__price">
                    $125 x3 <span>$375.00</span>
                    </p>
            </div>
            <img class="cart-modal__delete" src="/images/icon-delete.svg" alt="delete-icon">
            </div>
        <button class="cart-modal__checkout">Checkout</button>`;
        deleteProduct();
        let priceModal = document.querySelector('.cart-modal__price');
        priceModal.innerHTML = `$125 x ${lastValue} <span>$${lastValue * 125}.00</span>`;
};






/* Function to slide next image */

function changeNextImage(imgContainer){
    if(imgIndex === 4){
        imgIndex = 1;
    }else{
        imgIndex++;
    }
    imgContainer.style.backgroundImage = `url('/images/image-product-${imgIndex}.jpg')`

};
/* Function to slide precious image */

function changePreviousImage(imgContainer){
    if(imgIndex === 1){
        imgIndex = 4;
    }else{
        imgIndex--;
    }
    imgContainer.style.backgroundImage = `url('/images/image-product-${imgIndex}.jpg')`

};






