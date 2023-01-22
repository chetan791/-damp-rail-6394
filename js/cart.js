let cartarray = JSON.parse(localStorage.getItem("cart"))||[];
console.log(cartarray);

// creating the total price variable
    totalvalue=document.querySelector("#cartValue");

let cartvalue=0;

// catchinng the container
let cartContainer = document.querySelector("#container");

// looping through the cart array
cartarray.forEach((item) => {
        cartvalue+=item.price;
        console.log(cartvalue);
        totalvalue.innerText=cartvalue;
        
    // creating the div
    let card = document.createElement("div");
    card.classList.add("card");
    // creating inner divs
    let innerdiv1 = document.createElement("div");
    let innerdiv2 = document.createElement("div");
    let innerdiv3 = document.createElement("div");

    // giving the inner divs classes
    innerdiv1.classList.add("innerdiv");
    innerdiv2.classList.add("innerdiv");
    innerdiv3.classList.add("removebtn");

    // creating the img
    let img = document.createElement("img");
    img.src = item.image;

    // creating the h2
    let h2 = document.createElement("h2");
    h2.classList.add("text");
    h2.innerText = item.title;

    // creating the h3
    let h3 = document.createElement("h3");
    h3.classList.add("text");
    h3.innerText = item.cost;

    // creating the h1
    let h1 = document.createElement("h1");
    h1.classList.add("text");
    h1.innerText = item.price;

    // creating the remove button div
    let removebtndiv = document.createElement("div");

    // creating remove button
    let remove = document.createElement("button");
    remove.innerText = "Remove";
    remove.classList.add("remove");

    // creating remove function
    remove.addEventListener("click", () => {
        let index = cartarray.indexOf(item);
        cartarray.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cartarray));
        location.reload();
    });

    // appending the img to innerdiv1
    innerdiv1.append(img);

    // appending the h2 to innerdiv2
    innerdiv2.append(h2);
    innerdiv2.append(h3);
    innerdiv2.append(h1);

    // appending the remove button to removebtndiv
    removebtndiv.append(remove);

    // appending the removebtndiv to innerdiv3
    innerdiv3.append(removebtndiv);

    // appending the remove button to innerdiv3
    // innerdiv3.append(remove);

    // appending the inner divs to the card
    card.append(innerdiv1,innerdiv2,innerdiv3);

    // appending the card to the container
    cartContainer.append(card);
});






