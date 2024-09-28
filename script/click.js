document.getElementById('btn-button').addEventListener('click',function(){
    document.getElementById('PH-Poribohon').scrollIntoView({
        behavior:"smooth"
    })
})

const selectedSeats = [];
const seatLimit = 4;
const perSeatPrice = 550;
let totalPrice = 0;
let grandTotal = 0;
const seats = document.querySelectorAll(".seat");

for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];

// select seat and change the background colour and show other page 
    seat.addEventListener("click", function () {
        if (seat.classList.contains('bg-lime-500')) {
            seat.classList.remove('bg-lime-500');

            const availableSeatElement = document.getElementById('available-seat');
            let availableSeat = parseInt(availableSeatElement.innerText);
            availableSeat++;
            availableSeatElement.innerText = availableSeat;


            const seatName = seat.innerText;
            const selectedIndex = selectedSeats.indexOf(seatName);
            if (selectedIndex !== -1) {
                selectedSeats.splice(selectedIndex, 1);
            }

            totalPrice -= perSeatPrice;
        } else {
            if (selectedSeats.length >= seatLimit) {
                alert(`You can select only ${seatLimit} seat.`);
                return;
            }

            seat.classList.add('bg-lime-500');

            const availableSeatElement = document.getElementById('available-seat');
            let availableSeat = parseInt(availableSeatElement.innerText);
            if (availableSeat > 0) {
                availableSeat--;
                availableSeatElement.innerText = availableSeat;

                const seatName = seat.innerText;
                selectedSeats.push(seatName);
                totalPrice += perSeatPrice;

                let grandTotalElement = document.getElementById('price-total');
                let grandTotalText = grandTotalElement.innerText.trim();
                let newGrandTotal = totalPrice;
                grandTotalElement.innerText = `BDT ${newGrandTotal}`;

            }
        }

        // when we select some seat then this section is show top off cuopon
        const selectCount = document.getElementById('select-count')
        selectCount.innerText = selectedSeats.length;

        const seatTypes = seat.innerText
        const seatContainer = document.getElementById('seat-show')
        const p = document.createElement("p")
        p.innerText = seatTypes;
        seatContainer.appendChild(p)

        const economy = "Economy"
        const economyContainer = document.getElementById('economy-show')
        const p2 = document.createElement("p")
        p2.innerText = economy;
        economyContainer.appendChild(p2)

        const priceContainer = document.getElementById('price-show');
        const p3 = document.createElement("p");
        p3.innerText = perSeatPrice;
        priceContainer.appendChild(p3)

        const totalContainer = document.getElementById('total-BDT');
        totalContainer.innerText = `BDT ${totalPrice}`;


    });
}

// get some discount by hidden coupon

const btn = document.getElementById("cupon-button")
btn.addEventListener("click", function () {
    const inputElement = document.getElementById("input-field").value;
    const cuponCoad = inputElement;

    if (totalPrice === 2200) {



        if (cuponCoad === "NEW15") {

            const discountCoupleElement = document.getElementById("price-total");
            const discountCoupleAmount = totalPrice * 0.15;
            const discountPrice = totalPrice - discountCoupleAmount;
            discountCoupleElement.innerText = discountPrice;
            const cuponDiv = document.getElementById('cupon-devider');
            cuponDiv.classList.add('hidden');
        }
        else if (cuponCoad === "Couple20") {
            const discountCoupleElement = document.getElementById("price-total");
            const discountCoupleAmount = totalPrice * 0.2;
            const discountCouplePrice = totalPrice - discountCoupleAmount;
            discountCoupleElement.innerText = discountCouplePrice;
            const cuponDiv = document.getElementById('cupon-devider');
            cuponDiv.classList.add('hidden');
        }
        else {
            alert("Wrong Coupon")
        }
    }
    else {
        alert("Select minimum 4 seat")
    }



})

// continue button function

const nextButton = document.getElementById("submit-button");
const inputElement2 = document.getElementById("input-number");

nextButton.addEventListener("click", function () {
    const inputValue = inputElement2.value.trim();

    if (inputValue !== "") {

        const successSection = document.getElementById("success-section");
        successSection.classList.remove('hidden');

        const continueButton= document.getElementById('next');
        continueButton.addEventListener("click", function () {
            successSection.classList.add('hidden');
            window.location.reload()
        });
    }
});

inputElement2.addEventListener("input", function () {
    nextButton.disabled = inputElement2.value.trim() === "";


});




