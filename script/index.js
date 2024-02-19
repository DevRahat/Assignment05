const allBtn=document.getElementsByClassName('add-btn');

let count=0;
let seatCount=40;
for(const btn of allBtn){
   btn.addEventListener("click", function(e){
      count=count+1;
      setInnerText('select-ticket',count);
      seatCount=seatCount-1;
      setInnerText('total-seat',seatCount);
      
      const price=550;
      const quality="Business";
      const seatId=e.target.innerText;
      addTableElement(seatId,quality,price);
      
      totalCost('ticketPrice',parseInt(price));
      grandTotalCost('grandTotal',parseInt(price));
       e.target.style.backgroundColor="yellow";
       
   });
}

function setInnerText(id,value){
   document.getElementById(id).innerText=value;
}

function totalCost(id,value){
      const totalCost=document.getElementById(id).innerText;
      const convertedTotalCost=parseInt(totalCost);
      const sum =convertedTotalCost+parseInt(value);
      setInnerText("ticketPrice",sum);
}
function grandTotalCost(){
   const totalCost=document.getElementById("ticketPrice").innerText;
   const convertedTotalCost=parseInt(totalCost);
   let code=document.getElementById('code').value;
   if(code=="NEW15"){
      setInnerText("grandTotal",convertedTotalCost-(0.15*convertedTotalCost));
   }else if(code=="Couple 20"){
      setInnerText("grandTotal",convertedTotalCost-(.20*convertedTotalCost));
   }else{
      setInnerText("grandTotal",convertedTotalCost);
   }

}

const modal=document.querySelector('.modal');
const showModal=document.querySelector('.showModal');
const closeModal=document.querySelector('.close-modal');

showModal.addEventListener('click', function(){
   modal.classList.remove('hidden');
})

closeModal.addEventListener('click',function(){
   modal.classList.add('hidden');
})


   