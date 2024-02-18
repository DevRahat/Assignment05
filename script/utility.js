function addTableElement(seat,cls,sP){
    let table=document.getElementById('tableBody');
    
    let row=document.createElement('tr');
 
    let r1=document.createElement('td');
    let r2=document.createElement('td');
    let r3=document.createElement('td');
    
    r1.innerText=seat;
    r2.innerText=cls;
    r3.innerText=sP;
 
    row.appendChild(r1);
    row.appendChild(r2);
    row.appendChild(r3);
 
    table.appendChild(row);
 }