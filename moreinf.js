const query = new URLSearchParams(location.search)
const id = query.get("id")

let car = data.find(function (item) {
    return item.id == id
})

let demo1 = document.getElementById("demo1")

let carMore = `
    <div class="bg-gray-100 font-sans">

        <div class="max-w-6xl mx-auto p-4">

            <h1 class="text-2xl font-bold mb-4">
                ${car.brand} ${car.model}, 2.0 L, ${car.year} il, ${car.odometer} ${car.odometerUnit}
            </h1>

            <div class="grid grid-cols-3 gap-6">

                <div class="col-span-2">
                    <div class="flex gap-2 mt-3 overflow-x-auto">
                        <img class="w-[400px] h-[350px] object-cover rounded" src="${car.images}">
                    </div>
                </div>
                <div class="bg-white p-4 rounded-xl shadow">

                    <div class="text-2xl font-bold mb-3">
                        ${car.price} ${car.currency}
                    </div>

                    <div class="mb-4">
                        <p class="font-semibold">Nigar</p>
                        <p class="text-gray-500 text-sm">${car.city}</p>
                    </div>

                    <button class="w-full bg-green-500 text-white py-2 rounded-lg mb-2">
                        Nömrəni göstər
                    </button>

                    <button class="w-full bg-blue-500 text-white py-2 rounded-lg">
                        Mesaj yaz
                    </button>

                </div>
            </div>
            <div class="bg-white p-6 rounded-xl shadow mt-6 grid grid-cols-2 gap-6">

                <div class="space-y-2">
                    <p><span class="text-gray-500">Şəhər:</span> ${car.city}</p>
                    <p><span class="text-gray-500">Marka:</span> ${car.brand}</p>
                    <p><span class="text-gray-500">Model:</span> ${car.model}</p>
                    <p><span class="text-gray-500">Buraxılış ili:</span> ${car.year}</p>
                    <p><span class="text-gray-500">Ban növü:</span> ${car.banType}</p>
                    <p><span class="text-gray-500">Rəng:</span> Qara</p>
                    <p><span class="text-gray-500">Mühərrik:</span> 2.0 L / 245 a.g / Benzin</p>
                    <p><span class="text-gray-500">Yürüş:</span> ${car.odometer} ${car.odometerUnit}</p>
                </div>
                <div class="space-y-2">
                    <p><span class="text-gray-500">Sürətlər qutusu:</span> Avtomat</p>
                    <p><span class="text-gray-500">Ötürücü:</span> Arxa</p>
                    <p><span class="text-gray-500">Yeni:</span> ${car.odometer == 0 ? "Beli" : "Xeyr"}</p>
                    <p><span class="text-gray-500">Yerlərin sayı:</span> 5</p>
                    <p><span class="text-gray-500">Sahiblər:</span> 0</p>
                    <p><span class="text-gray-500">Vəziyyəti:</span> Vuruğu yoxdur</p>
                    <p><span class="text-gray-500">Bazar:</span> Amerika</p>
                </div>

            </div>
            <div class="bg-white p-6 rounded-xl shadow mt-6 text-gray-700 leading-relaxed">
                Amerikanın daxili bazarından şəxsi istifadə üçün alınıb.
                Avtomobil ideal vəziyyətdədir. Udar olmayıb.
                Original 19 lik M disklər. Arxa çəkəndir, 4 çəkən deyil.
            </div>

        </div>

`
demo1.innerHTML = carMore