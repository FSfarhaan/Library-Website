//Click on showmore will turn it to show less and display other 16 books also
function hideShow() {
    let toHide = document.getElementById("toHide");
    
    if(toHide.style.display != "grid") {
        toHide.style.display = "grid";
    }
    else{
        toHide.style.display = "none";
    }

    let showMore = document.getElementById("showMore");
    if(showMore.innerHTML != "Show Less") {
        showMore.innerHTML = "Show Less";
    }
    else{
        showMore.innerHTML = "Show More";
    }
}

//This function is used to show the books under their respective  categories
function showCat(idName) {
    let thisId = idName;
    let toSlide = document.getElementById(thisId);
    if(toSlide.style.display != "grid") toSlide.style.display = 'grid'; else toSlide.style.display = 'none';

    let downArrow = document.getElementById(`${thisId}Arrow`);
    if(downArrow.className.includes("toggleDown")) {
        downArrow.classList.add("toggleUp");
        downArrow.classList.remove("toggleDown");
    }
    else {
        downArrow.classList.remove("toggleUp");
        downArrow.classList.add("toggleDown");
    }
}

// In the donation section

//To select the money
function price(value, id) {
    let val = value;
    let unId = id;
    toString(unId);

    let curId = document.getElementById(unId);
    curId.style.backgroundColor = "#aa5f00"
    
    let curVal = document.getElementById("curVal");
    curVal.innerHTML = "$" + val;
}

//To remove the styling of the box
function remPrice(value, id){
    let val = value;
    let unId = id;
    toString(unId);
    
    let curId = document.getElementById(unId);
    curId.style.backgroundColor = "transparent"
}

//To show the modal
function remBook() {
    let modal = document.getElementById("modal");
    modal.classList.add("hidden");
}

//To change the content of the modal on clicking a particular book.
function showBook(url, name, author, type) {
    let bookLink = url;
    let bookName = name;
    let bookAuthor = author;
    let bookType = type;
    let modal = document.getElementById("modal");
    modal.classList.remove("hidden");

    document.getElementById('name').innerHTML = bookName;
    document.getElementById('author').innerHTML = bookAuthor;
    document.getElementById('type').innerHTML = bookType;
    document.getElementById('image').src = `Books/${bookLink}.jpg`;
}

//ye function nav ko show karne ke liye hai
function showNav() {
    let toggledNav = document.getElementById("toggledNav");
    if(toggledNav.className.includes("hidden")) toggledNav.classList.remove("hidden");
    else toggledNav.classList.add("hidden");
}


const searchFun =()=>{
    const fitler = document.getElementById('input').value.toUpperCase();
    console.log(fitler);
    
    // const searching  = document.getElementById("contents1");
    // console.log(searching);
    // const box  = searching.getElementsbyClassName("box");
    // const info  = document.getElementbyClassName("info");
    const box = document.querySelectorAll(".box");
    
    // console.log(info);
    for(let i=0; i<box.length; i++){ 
        const bookName=box[i].getElementsByTagName('h3');
        if(!bookName[0].innerHTML.toUpperCase().includes(fitler)){
            console.log(bookName[0].innerHTML);
            box[i].hidden = true;
        }else{
            box[i].hidden = false;
        }
    }
    // const hr = info.querySelector("h3");
    // console.log(hr);

}