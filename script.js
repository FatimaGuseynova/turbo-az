let menudr = document.getElementById("menudr")

function menud() {
    menudr.classList.toggle("hidden")
}


let markalar = document.getElementById("markalar")
let empty = ""
let modeller = document.getElementById("modeller")


function renderMarks() {
    let marks = data.map(function (item) {
        return item.brand
    })
    let smth = new Set(marks)
    let uniqueMarks = Array.from(smth)
    uniqueMarks.map(function (item) {
        empty += `<option value="${item}">${item}</option>`
    })
    markalar.innerHTML += empty


}
renderMarks()

markalar.onchange = function(){
     let filterMarks = data.filter(function(item){
        return markalar.value == item.brand
     })
     renderCars(filterMarks)

}



let showCars = document.getElementById("showCars")
let credit = document.getElementById("credit")
let barter = document.getElementById("barter")
let creditbart = document.getElementById("creditbart")

function renderCars(array) {
    let cars = array.map(function (item) {
        return `
            <div class="bg-white w-[90%] rounded-2xl shadow-sm overflow-hidden justify-between flex flex-col ">
            <div style="background-image: url('${item.images}')" class="relative h-[150px] w-[100%] bg-cover bg-center p-3 flex flex-col justify-between">
                
                <div class="flex justify-between items-center w-full">
                    <div id="creditbart">
                        <span id="credit" class=" bg-orange-400 ${item.credit === true ? 'initial' : 'hidden'} rounded-full p-1 text-[10px] text-white mr-1"><i class="fa-solid fa-percent"></i></span>
                        <span id="barter" class="bg-green-400 ${item.barter === true ? 'initial' : 'hidden'} rounded-full p-1 text-[10px] text-white"><i class="fa-solid fa-arrows-rotate"></i></span>
                    </div>
                    <span class="text-white text-lg"><i class="fa-regular fa-heart"></i></span>
                </div>

                <div class="flex justify-end">
                    <span class="bg-white rounded-[5px] text-[12px] p-1 flex items-center space-x-0.5">
                        <i class="fa-solid fa-crown text-yellow-500"></i>
                        <i class="fa-solid fa-diamond text-red-400"></i>
                    </span>
                </div>
            </div>

            <div class="p-3">
                <h3 class="font-bold text-[18px]">${item.price} ₼</h3>
                <h5 class="text-[14px] font-semibold text-gray-800">${item.brand} ${item.model}</h5>
                <h6 class="text-[12px] text-gray-600">${item.year}, ${item.engine} L, ${item.odometer} ${item.odometerUnit}</h6>
                <p class="text-gray-400 text-[12px] mt-1">${item.city}, ${item.dates}</p>
            </div>
        </div>
        `


    })
    showCars.innerHTML = cars.join(" ")
}

renderCars(data)

let lengthArr = document.getElementById("lengthArr")

lengthArr.innerHTML += `${data.length} yeni elan`

function kreditle(){
    let kreditle = data.filter(function(item){
        return item.credit == true
    })
    renderCars(kreditle)
}
function barterle(){
    let barterle = data.filter(function(item){
        return item.barter == true
    })
    renderCars(barterle)
}


