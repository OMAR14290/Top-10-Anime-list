const ADD = document.getElementById("ADD");
const addsection = document.querySelector(".addsection");
const uploadbtn = document.querySelector(".add");
const image = document.getElementById("image");
const preview = document.getElementById('input');
const nameanime = document.getElementById("name");
const rating = document.getElementById('rating');
const submitbtn = document.querySelector(".submit");
const listofanime = document.querySelector(".listcont");
let raking = 0;
ADD.addEventListener("click", () => {
    addsection.style.display = "flex";
})

uploadbtn.addEventListener("click", () => {
    preview.click();
})
preview.addEventListener("change", () => {
    const file = preview.files[0];

    if(file){
        image.src = URL.createObjectURL(file);
        image.style.display = "block";
        uploadbtn.replaceWith(image);
    }
})

image.addEventListener("click", () => {
    image.src = "";
    image.replaceWith(uploadbtn);
})


submitbtn.addEventListener("click", AddList);

function AddList(){
    if(nameanime.value === "" || rating.value === ""){
         alert("you must give us a name and rating");
    }else{
            raking++;
            const list = document.createElement('div');
            list.className = "list";
            list.innerHTML = `
                  <p class='order'><img src='${image.src}' alt=''>${raking}</p>
          <div>
          <span class='nam'>${nameanime.value}</span>
          <h5>Rating is: <span>${rating.value}/10</span></h5>
          </div>
          
            `;
            listofanime.appendChild(list);
            const deletebtn = document.createElement("img");
            deletebtn.src = "delete_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
            list.appendChild(deletebtn);
            deletebtn.className = "delete";
            list.draggable = true;
            deletebtn.addEventListener('click', dlete);
                
                
            
              savedata();
    }
    nameanime.value = '';
    rating.value = "";
    image.replaceWith(uploadbtn);
}



function dlete(event){
    if(event.target.className === "delete"){
        event.target.parentElement.remove();
    savedata();
    }
    
}
function savedata(){
    localStorage.setItem('data', listofanime.innerHTML);
}
function getdata(){
    listofanime.innerHTML = localStorage.getItem("data");

    const lists = listofanime.querySelectorAll(".list");
    lists.forEach(list => {
        list.addEventListener('click', dlete);
        
    });
}

getdata();

