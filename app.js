var parent = document.querySelector(".main")

const uicreation = ({title,image,description}) => {
   var divElement = `<div class="card col-4 padding p-4 " style="width: 18rem;">
   <img id="image" src="${image}" class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${title}</h5>
     <p class="card-text">${description}</p>
     <a href="#" class="btn btn-primary">Go somewhere</a>
   </div>
 </div>`
    parent.innerHTML += divElement
    
    
}

const getCountryData = (num) => {
    fetch(`https://fakestoreapi.com/products/${num}`)
        .then(function (response) {
            // console.log(response, "==>> response of fetch")
            return response.json()
        }).then(function(data){
            // console.log(data.image, "==>> my data as json")
            uicreation(data)
        })
}
for(i=1 ; i<6;i++){
    getCountryData(i)
}