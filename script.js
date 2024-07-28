const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
  ];
// Use moviesList array for displaing the Name in the dropdown menu

const selectMovie  =  document.querySelector("#selectMovie");

moviesList.forEach(curr=>{
    const option = document.createElement('option');
    option.textContent = curr.movieName;
    option.value = curr.movieName;
    selectMovie.appendChild(option);
    });
//event for all the option create
selectMovie.addEventListener('change',updateDetails)

const movieName  = document.querySelector('#movieName');
const moviePrice  = document.querySelector("#moviePrice");

function updateDetails(){
    let selectedMovieName = selectMovie.value;
    let selectedMovie = moviesList.find(curr=>curr.movieName===selectedMovieName);
    if(selectedMovie){
    movieName.textContent = selectedMovie.movieName;
    moviePrice.textContent = `$ ${selectedMovie.price}`;
        
    }
    
}

    


//Add eventLister to each unoccupied seat
const seats = document.querySelectorAll("#seatCont .seat");
seats.forEach(seat=>{
    if(!seat.classList.contains("occupied")){
       seat.addEventListener('click',updateDetailS);
    }
})

//add functionalities on updateDetail1;
const totalPrice = document.querySelector("#totalPrice");

 const numbofseats = document.querySelector("#numberOfSeat");

function updateDetailS(){
    
     const selectedDropdown =  selectMovie.value;
     let selectedMovie = moviesList.find(curr=>curr.movieName===selectedDropdown);
     
     let num = parseFloat(totalPrice.textContent.replace("$","").trim());
    const selectholdersec = document.querySelector("#selectedSeatsHolder");
    
    if(this.classList.contains("selected")){
        this.classList.remove("selected");
        num = num-selectedMovie.price;
        
        let numberofseats = document.querySelectorAll("#seatCont .selected")
        numbofseats.textContent = numberofseats.length;
        // selectholdersec.innerHTML = '';
        
    }
    else{
        this.classList.add("selected");
        count = parseFloat(numbofseats.textContent);
         num = num+selectedMovie.price;
        
        let numberofseats = document.querySelectorAll("#seatCont .selected")
        numbofseats.textContent = numberofseats.length;

    }
    totalPrice.textContent = `$ ${num}`;

    
    
   
    
}
 

//Add eventLsiter to continue Button


const continuebtn = document.querySelector("#proceedBtn");

continuebtn.addEventListener('click',updateDetail2);

function updateDetail2(){
   const selectedseats = document.querySelectorAll("#seatCont .selected");
 
    if(selectedseats.length>0){
        alert("Yayy! Your Seats have been booked");
        selectedseats.forEach(curr=>{
            curr.classList.remove("selected");
            curr.classList.add("occupied");
            totalPrice.textContent = `$ ${0}`;
            numbofseats.textContent = `${0}`;
            
        })
    }
    else{
        alert("Oops no seat Selected");
    }
}


//Add eventListerner to Cancel Button
 const cancelbtn = document.querySelector("#cancelBtn");
const holdersec = document.querySelector("#selectedSeatsHolder");
cancelbtn.addEventListener("click",updateDetails3);

function updateDetails3(){
    const selected = document.querySelectorAll("#seatCont .selected");
    
    if(selected.length>0){
        selected.forEach(curr=>curr.classList.remove("selected"));
        totalPrice.textContent = `$ ${0}`;
         numbofseats.textContent = `${0}`;
        holdersec.innerHTML='';
        let span = document.createElement('span');
        span.classList.add("noSelected");
        span.textContent = "No Seat Selected";
    }
}