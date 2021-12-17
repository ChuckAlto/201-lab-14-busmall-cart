/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //done: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    let optionElement = document.createElement('option');
    optionElement.textContent = Product.allProducts[i].name;
    optionElement.value = Product.allProducts[i].name;
    selectElement.appendChild(optionElement);
    console.log(selectElement);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // done: Prevent the page from reloading
  event.preventDefault();
  // console.log(event.target.value.name);
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
  
}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  let product = document.getElementById('items').value;
  console.log(product);
  let quantity = document.getElementById('quantity').value;
  console.log(quantity);
  // done: suss out the item picked from the select list
  // done: get the quantity
  // done: using those, add one item to the Cart
  cart.addItem(product, quantity);
  console.log(cart);
}

// done: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  let cartCount = document.getElementById('itemCount');
  cartCount.textContent = `:  ${cart.items.length}` ;
  
}
  
// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  let header = document.getElementsByName('header');
  let h2 = document.createElement('h2');
  h2.textContent = `${cart.items[0]} ${cart.items[1]}`;
  header.appendChild(h2);
  // this doesn't work.

  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
