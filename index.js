const foods = [
  {
    name: "Veggie Delight",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc: "https://source.unsplash.com/random?pizza",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc: "https://source.unsplash.com/random?steak",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc: "https://source.unsplash.com/random?salmon",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc: "https://source.unsplash.com/random?pasta",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc: "https://source.unsplash.com/random?salad",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc: "https://source.unsplash.com/random?friedChicken",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc: "https://source.unsplash.com/random?risotto",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc: "https://source.unsplash.com/random?burger",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc: "https://source.unsplash.com/random?paneerTikka",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 3.4,
},
{
    name: "BBQ Ribs",
    imageSrc: "https://source.unsplash.com/random?ribs",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
},
{
    name: "Caesar Salad",
    imageSrc: "https://source.unsplash.com/random?caesarSalad",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
},
{
    name: "Fish Tacos",
    imageSrc: "https://source.unsplash.com/random?fishTacos",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
},
{
    name: "Chocolate Cake",
    imageSrc: "https://source.unsplash.com/random?chocolateCake",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
},
];
let forestar=foods.filter((i)=>{ return i.rating>=4});
let lessForestare=foods.filter((i)=>{return i.rating<4});
let veg=foods.filter((i)=>{ return i.type=='veg'})
let nonVeg=foods.filter((i)=>{ return i.type=="non-veg"})
const items = document.getElementById("items");

const allitem=document.getElementById("allitem");
const vegitems=document.getElementById("veg");
const nonveg=document.getElementById("nonveg");
let searchBarr=document.getElementById("searchBarrInpt");
const searcButton=document.getElementById("searchButton");
const foreMorebtn =document.getElementById("foremore")
const foreLessbtn =document.getElementById("bellowFore")

foreMorebtn.addEventListener("click",()=>{ 
    render(forestar)
})

foreLessbtn.addEventListener("click",()=>{ 
    render(lessForestare)})
 
searcButton.addEventListener("click",()=>{
    render(searchByName(searchBarr.value))
});

allitem.addEventListener("click", () => {
   render(foods)
});

vegitems.addEventListener("click", () => {
    render(nonVeg)
 });
 nonveg.addEventListener("click", () => {
    render(veg)
 });

const render=(data)=>{
const result = data.map((item) => {
        let liked1 = () => {
            if (!item.isLiked) {
                return `class="hide"`;
            } else {
                return " ";
            }
        };
        let liked = liked1();
        let dislike = (() => {
            if (item.isLiked) {
                return `class="hide"`;
            } else {
                return " ";
            }
        })();
        return    `<div  class="item">
        <img class="itemsimg" src=${item.imageSrc} alt="">
        <span class="type">${item.type}</span>
        <h1>${item.name}</h1>
        <div >
        <span>${item.time}</span>
        <div class="responce">
        <img src="./indeximg/dislike.png" alt="dislike" onclick="toggleClass(this,'hide')" ${dislike} >
        <img src="./indeximg/like.jpg" alt="like" class="hide" onclick="toggleClasss(this,'hide')" ${liked}>
        <img src="./indeximg/comment.png" alt="comment">
        </div>
</div>
</div>`;
});
console.log(result);
items.innerHTML = result.join('');
}

function searchByName(query) {
    // Convert query to lowercase for case-insensitive search
    const lowerCaseQuery = query.toLowerCase();
    
    // Filter items based on the query
    const searchResults = foods.filter(i => i.name.toLowerCase().includes(lowerCaseQuery));
    
    return searchResults;
}

function toggleClass(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
}


function toggleClass(element, className) {
  if (element.classList.contains(className)) {
      element.classList.remove(className);
  } else {
      element.classList.add(className);
  }
  if (element.nextElementSibling.classList.contains(className)){
    element.nextElementSibling.classList.remove(className)
  }
  else{element.nextElementSibling.classList.add(className)}
}
function toggleClasss(element, className) {
  if (element.classList.contains(className)) {
      element.classList.remove(className);
  } else {
      element.classList.add(className);
  }
  if (element.previousElementSibling.classList.contains(className)){
    element.previousElementSibling.classList.remove(className)
  }
  else{element.previousElementSibling.classList.add(className)}
  console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
}
render(foods);
