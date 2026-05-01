let menudr = document.getElementById("menudr")

function menud() {
    menudr.classList.toggle("hidden")
}

// show cars, kredit, barter
let showCars = document.getElementById("showCars")
let credit = document.getElementById("credit")
let barter = document.getElementById("barter")
let creditbart = document.getElementById("creditbart")

function renderCars(array) {
    let cars = array.map(function (item) {
        return `
        <div class="bg-white w-[90%] rounded-2xl shadow-sm overflow-hidden justify-between flex flex-col ">
          <a href="moreinf.html?id=${item.id}" target="_blank">  <div style="background-image: url('${item.images}')" class="relative h-[150px] w-[100%] bg-cover bg-center p-3 flex flex-col justify-between">
                
                <div class="flex justify-between items-center w-full">
                    <div id="creditbart">
                        <span id="credit" class=" bg-orange-400 ${item.credit === true ? 'initial' : 'hidden'} rounded-full p-1 text-[10px] text-white mr-1"><i class="fa-solid fa-percent"></i></span>
                        <span id="barter" class="bg-green-400 ${item.barter === true ? 'initial' : 'hidden'} rounded-full p-1 text-[10px] text-white"><i class="fa-solid fa-arrows-rotate"></i></span>
                    </div>
                </div>

                <div class="flex justify-end">
                    <span class="bg-white rounded-[5px] text-[12px] p-1 flex items-center space-x-0.5">
                        <i class="fa-solid fa-crown text-yellow-500"></i>
                        <i class="fa-solid fa-diamond text-red-400"></i>
                    </span>
                </div>
            </div>
            </a>

            <div class="p-3">
                <h3 class="font-bold text-[18px]">${item.price} ${item.currency}</h3>
                <h5 class="text-[14px] font-semibold text-gray-800">${item.brand} ${item.model}</h5>
                <h6 class="text-[12px] text-gray-600">${item.year}, ${item.engine} L, ${item.odometer} ${item.odometerUnit}</h6>
                <p class="text-gray-400 text-[12px] mt-1">${item.city}, ${item.dates}</p>
                                    <span class="text-black inline-flex items-end justify-end text-lg text-end w-[100%]"><i onclick="heart(this, ${item.id})" class="heartRed fa-regular fa-heart"></i></span>

            </div>
        </div>
        `


    })
    showCars.innerHTML = cars.join(" ")
}

renderCars(data)

let lengthArr = document.getElementById("lengthArr")

lengthArr.innerHTML += `${data.length} yeni elan`

function kreditle() {
    let kreditle = data.filter(function (item) {
        return item.credit == true
    })
    renderCars(kreditle)
}
function barterle() {
    let barterle = data.filter(function (item) {
        return item.barter == true
    })
    renderCars(barterle)
}



let empty = ""





let brand = document.getElementById("brand")

let markalarShow = Array.from(new Set(data.map(function (item) {
    return item.brand
})))



// show all selects

function ShowSelect(detail, valueStr, detailShow) {
    let empty = `<option selected disabled value="">${valueStr}</option>`

    let MarkalarSelect = detailShow.map(function (item) {
        empty += `<option value="${item}">${item}</option>`
    })

    detail.innerHTML = empty
}
ShowSelect(brand, "Marka", markalarShow)


// cities
let city = document.getElementById("city")

let citiesShow = Array.from(new Set(data.map(item => item.city)))

ShowSelect(city, "Şəhər", citiesShow)

city.onchange = function () {
    let showCarsSelect = data.filter(function (item) {
        if (city.value == item.city) {
            return item
        }
    })
    renderCars(showCarsSelect)

}

// models
let model = document.getElementById("model")
brand.onchange = function () {
    let showCarsSelect1 = data.filter(function (item) {
        return brand.value == item.brand
    })

    renderCars(showCarsSelect1)
    model.disabled = false
    let filterMarks = data.filter(function (item) {
        if (item.brand == brand.value) {
            return item
        }

    })
    let models = Array.from(new Set(filterMarks.map(function (item) {
        return item.model
    })))
    ShowSelect(model, "Model", models)
}
model.onchange = function () {
    let showCarsSelect = data.filter(function (item) {
        if (model.value == item.model) {
            return item
        }
    })
    renderCars(showCarsSelect)

}

// buttons

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn31 = document.getElementById("btn31")

function showAll() {
    renderCars(data)
    btn1.style.backgroundColor = "red"
    btn2.style.backgroundColor = "rgb(243, 244, 246)"
    btn3.style.backgroundColor = "rgb(243, 244, 246)"
}

function showAll31() {
    renderCars(data)
    btn31.style.backgroundColor = "red"
}

function showNew() {
    let newCars = data.filter(function (item) {
        if (item.odometer == 0) {
            return item
        }
    })
    renderCars(newCars)
    btn2.style.backgroundColor = "red"
    btn1.style.backgroundColor = "rgb(243, 244, 246)"
    btn3.style.backgroundColor = "rgb(243, 244, 246)"
}

function showOld() {
    let oldCars = data.filter(function (item) {
        if (item.odometer != 0) {
            return item
        }
    })
    renderCars(oldCars)
    btn3.style.backgroundColor = "red"
    btn2.style.backgroundColor = "rgb(243, 244, 246)"
    btn1.style.backgroundColor = "rgb(243, 244, 246)"

}


// azn
let currency = document.getElementById("currency")

let azn = Array.from(new Set(data.map(function (item) {
    return item.currency
})))

ShowSelect(currency, "Valyuta", azn)

currency.onchange = function () {
    let showCarsSelect = data.filter(function (item) {
        if (currency.value == item.currency) {
            return item
        }
    })
    renderCars(showCarsSelect)

}


// ban
let banType = document.getElementById("banType")
let banSelect = Array.from(new Set(data.map(function (item) {
    return item.banType
})))


ShowSelect(banType, "Ban növü", banSelect)
banType.onchange = function () {
    let showCarsSelect = data.filter(function (item) {
        if (banType.value == item.banType) {
            return item
        }
    })
    renderCars(showCarsSelect)

}


// years
let minyear = document.getElementById("minyear")
let maksyear = document.getElementById("maksyear")

let years = Array.from(new Set(data.map(function (item) {
    return item.year
})))

years = years.sort()

ShowSelect(minyear, "il, min", years)
ShowSelect(maksyear, "maks", years)
maksyear.onchange = function () {
    let showCarsSelect = data.filter(function (item) {
        if ((+maksyear.value >= +item.year) && (+minyear.value <= +item.year)) {
            return item
        }
    })
    renderCars(showCarsSelect)

}
minyear.onchange = function () {
    let showCarsSelect = data.filter(function (item) {
        if ((+maksyear.value >= +item.year) && (+minyear.value <= +item.year)) {
            return item
        }
    })
    renderCars(showCarsSelect)

}

let price1 = document.getElementById("price1")
let price2 = document.getElementById("price2")

price2.oninput = function () {
    let showCarsSelect = data.filter(function (item) {
        if ((+price2.value >= +item.price) && (+price1.value <= +item.price)) {
            return item
        }
    })
    renderCars(showCarsSelect)

}
price1.oninput = function () {
    let showCarsSelect = data.filter(function (item) {
        if ((+price2.value >= +item.price) && (+price1.value <= +item.price)) {
            return item
        }
    })
    renderCars(showCarsSelect)

}


// sifirla

function sifirla() {
    renderCars(data)
}
// hidden filter

hiddenFilter = document.getElementById("hiddenFilter")
let morefit = document.getElementById("morefit")

function moreFilter() {
    hiddenFilter.classList.toggle("hidden")
    if (hiddenFilter.classList.contains("hidden")) {
        morefit.textContent = "Daha çox göstər"   // показать
    } else {
        morefit.textContent = "Gizlət"             // скрыть
    }
}

// mobile
let filtersCars = document.querySelectorAll(".filtersCars")

function filterMobile() {
    filtersCars.forEach(item => {
        item.classList.remove("hidden")
        item.style.display = "flex"
    })

    hiddenFilter.classList.remove("hidden")
}

// heart

let heartRed = document.querySelectorAll(".heartRed")

let likes = []
function heart(el, id) {
    el.style.color = "red"
    let liked = data.find(function (item) {
        if (id == item.id) {
            return item
        }
    })
    likes.unshift(liked)


}
function likedCars() {
    renderCars(likes)
}
