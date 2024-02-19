let count = 0;

const seatButton = document.getElementsByClassName('seat-btn');

for (const seatBtn of seatButton) {
    seatBtn.addEventListener('click', function (e) {

        
        const seatNum = e.target.innerText;
        const ticketPrice = document.getElementById('ticket-price').innerText;
        const convertPrice = parseInt(ticketPrice);

        
        const tbody = document.getElementById('t-body');
        
        const seatClass = document.createElement('p')
        seatClass.innerText = 'Economy';
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        td1.innerText = seatNum
        const td2 = document.createElement('td');
        td2.innerText = seatClass.innerText
        const td3 = document.createElement('td');
        td3.innerText = convertPrice
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        if (tbody.childNodes.length > 4) {
            alert("You can take a maximum of 4 seats")
            return
        }
        tbody.append(tr);

      
        document.getElementById('seat-qty').innerText = count + 1;
        count++;

       
        const letSeat = document.getElementById('seat-left').innerText;
        const leftSeat = parseInt(letSeat);
        setInnerText('seat-left', leftSeat - 1);

       
        const totalPrice = document.getElementById('total-price').innerText;
        const convertTotalPrice = parseInt(totalPrice);
        setInnerText('total-price', convertTotalPrice + convertPrice);

    
        setInnerText('grand-total', convertTotalPrice + convertPrice)

       
        const selectedSeats = e.target
        selectedSeats.classList.add('bg-[#1DD100]');
        selectedSeats.classList.add('text-white');


    })
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}


function cpBtn() {
    const input = document.getElementById('input-filed').value;
    const couponCode = input.split(' ').join('').toUpperCase();
    if (couponCode === 'NEW15') {
        const grandTotal = document.getElementById('grand-total').innerText;
        const discount = grandTotal * 0.15;
        document.getElementById('grand-total').innerText = grandTotal - discount;
        const couponBox = document.getElementById('input-box');
        couponBox.style.display = 'none';
        document.getElementById('discount-container').innerText = `Discount Price: ${discount}`;
    } else if (couponCode === "COUPLE20") {
        const grandTotal = document.getElementById('grand-total').innerText;
        const discount = grandTotal * 0.20;
        document.getElementById('grand-total').innerText = grandTotal - discount;
        const couponBox = document.getElementById('input-box');
        couponBox.style.display = 'none';
        document.getElementById('discount-container').innerText = `Discount Price : ${discount}`
    }
    else {
        alert('invalid code..')
        document.getElementById('input-filed').value = '';
    }

}

document.getElementById('reload-btn').addEventListener('click', function () {
    location.reload(this.replaceWith());
})