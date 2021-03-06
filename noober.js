async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides


// loop for each ride 

for (let i=0; i<json.length;i++){
let ride=json[i]
console.log(ride)

if (ride.length>1) {levelOfService = 'Noober Pool', borderColor ='border-gray-900'
} else if (ride[0].purpleRequested == true) {levelOfService = 'Noober Purple', borderColor= 'border-purple-500'
} else if (ride[0].numberOfPassengers > 3) {levelOfService = 'Noober XL', borderColor = 'border-gray-900'
} else {levelOfService = 'Noober X', borderColor ='border-gray-900'}

console.log(levelOfService)
let outputElement = document.querySelector('.rides')

outputElement.insertAdjacentHTML('beforeend',`
  <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
  <i class="fas fa-car-side"></i>
  <span>${levelOfService}</span>
</h1>`) 

for (let a=0; a<ride.length; a++){
  let leg = ride[a] 
  console.log(leg)

 // declare all key variables  
let passengerName 
let numberOfPassengers
let passengerPhone
let passengerPickupAddressLine1 
let passengerPickupAddressLine2
let passengerDropoffAddressLine1
let passengerDropoffAddressLine2
let levelOfService 

// define all key variables
passengerName=leg.passengerDetails.first+" "+leg.passengerDetails.last
numberOfPassengers=leg.numberOfPassengers
passengerPhone= leg.passengerDetails.phoneNumber
passengerPickupAddressLine1=leg.pickupLocation.address 
passengerPickupAddressLine2=leg.pickupLocation.city+", "+leg.pickupLocation.state+" "+leg.pickupLocation.zip
passengerDropoffAddressLine1=leg.dropoffLocation.address
passengerDropoffAddressLine2=leg.dropoffLocation.city+", "+leg.dropoffLocation.state+" "+leg.dropoffLocation.zip 

  let outputElement = document.querySelector('.rides')
  outputElement.insertAdjacentHTML('beforeend',`<div class="border-4 ${borderColor} p-4 my-4 text-left">
  <div class="flex">
    <div class="w-1/2">
      <h2 class="text-2xl py-1">${passengerName}</h2>
      <p class="font-bold text-gray-600">${passengerPhone}</p>
    </div>
    <div class="w-1/2 text-right">
      <span class="rounded-xl bg-gray-600 text-white p-2">
        ${numberOfPassengers} passengers
      </span>
    </div>
  </div>
  <div class="mt-4 flex">
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">PICKUP</div>
      <p>${passengerPickupAddressLine1}</p>
      <p>${passengerPickupAddressLine2}</p>
    </div>
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">DROPOFF</div>
      <p>${passengerDropoffAddressLine1}</p>
      <p>${passengerDropoffAddressLine2}</p>
    </div>
  </div>
</div>
  `)
  }
}

} 

window.addEventListener('DOMContentLoaded', pageLoaded)



