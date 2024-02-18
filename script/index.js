const seats=document.querySelector('.seat-div');
const totalSeat=document.getElementById('total-seat');
let totalSeatValue=+totalSeat.innerText;
let ticketCount=document.getElementById('select-ticket');
let ticketBuy=+ticketCount.innerText;
const ticketPrice=document.getElementById('price');
const tPrice=+ticketPrice.innerText;

seats.addEventListener('click',function(event){
   const seatId=event.target.id;
   setBackgroundColorById(seatId);
   
})