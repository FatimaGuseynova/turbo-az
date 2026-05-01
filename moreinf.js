const query = new URLSearchParams(location.search)
const id = query.get("id")

let car = data.find(function (item) {
    return item.id == id
})

let demo1 = document.getElementById("demo1")

let carMore = `
<div class="bg-gray-100 font-sans min-h-screen pb-10">

    <div class="max-w-4xl mx-auto p-4">

        <!-- Заголовок -->
        <h1 class="text-2xl font-bold mb-4 text-gray-800">
            ${car.brand} ${car.model}, 2.0 L, ${car.year} il, ${car.odometer} ${car.odometerUnit}
        </h1>

        <div class="flex flex-col md:flex-row gap-6">
            
            <!-- Левая колонка: Фото и Описание -->
            <div class="flex-grow space-y-6">
                <!-- Контейнер для фото -->
                <div class="bg-white overflow-hidden rounded-2xl shadow-sm">
                    <img class="w-full h-[400px] object-cover" src="${car.images}" alt="Car image">
                </div>

                <!-- Описание -->
                <div class="bg-white p-6 rounded-2xl shadow-sm text-gray-700 leading-relaxed border-l-4 border-red-600">
                    Amerikanın daxili bazarından şəxsi istifadə üçün alınıb.
                    Avtomobil ideal vəziyyətdədir. Udar olmayıb.
                    Original 19 lik M disklər. Arxa çəkəndir, 4 çəkən deyil.
                </div>
            </div>

            <!-- Правая колонка: Цена и Контакты (В СТОЛБИК) -->
            <div class="w-full md:w-[350px] space-y-4">
                <div class="bg-white p-6 rounded-2xl shadow-md flex flex-col gap-5 sticky top-4">
                    
                    <!-- Цена -->
                    <div class="text-3xl font-black text-red-600 border-b pb-4 text-center">
                        ${car.price} ${car.currency}
                    </div>

                    <!-- Продавец -->
                    <div class="flex items-center gap-3">
                        <div class="bg-gray-100 min-w-[50px] h-[50px] rounded-full flex items-center justify-center text-gray-500 font-bold text-xl border">
                            N
                        </div>
                        <div>
                            <p class="font-bold text-lg text-gray-800">Nigar</p>
                            <p class="text-gray-400 text-sm">${car.city}</p>
                        </div>
                    </div>

                    <!-- Кнопки действий -->
                    <div class="flex flex-col gap-2">
                        <button class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-xl transition-all active:scale-95 shadow-sm">
                            Nömrəni göstər
                        </button>
                        <button class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl transition-all active:scale-95 shadow-sm">
                            Mesaj yaz
                        </button>
                    </div>

                </div>
            </div>
        </div>

        <!-- Характеристики внизу -->
        <div class="bg-white p-6 rounded-2xl shadow-sm mt-6 grid grid-cols-2 gap-x-12 gap-y-3">
            <div class="space-y-3">
                <div class="flex justify-between border-b pb-1"><span class="text-gray-400">Şəhər:</span> <span class="font-medium">${car.city}</span></div>
                <div class="flex justify-between border-b pb-1"><span class="text-gray-400">Marka:</span> <span class="font-medium">${car.brand}</span></div>
                <div class="flex justify-between border-b pb-1"><span class="text-gray-400">Model:</span> <span class="font-medium">${car.model}</span></div>
                <div class="flex justify-between border-b pb-1"><span class="text-gray-400">Buraxılış ili:</span> <span class="font-medium">${car.year}</span></div>
                <div class="flex justify-between border-b pb-1"><span class="text-gray-400">Ban növü:</span> <span class="font-medium">${car.banType}</span></div>
                <div class="flex justify-between border-b pb-1"><span class="text-gray-400">Rəng:</span> <span class="font-medium">Qara</span></div>
            </div>
            <div class="space-y-3">
                <div class="flex justify-between border-b pb-1"><span class="text-gray-400">Sürətlər qutusu:</span> <span class="font-medium">Avtomat</span></div>
                <div class="flex justify-between border-b pb-1"><span class="text-gray-400">Ötürücü:</span> <span class="font-medium">Arxa</span></div>
                <div class="flex justify-between border-b pb-1"><span class="text-gray-400">Yeni:</span> <span class="font-medium">${car.odometer == 0 ? "Bəli" : "Xeyr"}</span></div>
                <div class="flex justify-between border-b pb-1"><span class="text-gray-400">Yürüş:</span> <span class="font-medium">${car.odometer} ${car.odometerUnit}</span></div>
                <div class="flex justify-between border-b pb-1"><span class="text-gray-400">Vəziyyəti:</span> <span class="font-medium">Vuruğu yoxdur</span></div>
                <div class="flex justify-between border-b pb-1"><span class="text-gray-400">Bazar:</span> <span class="font-medium">Amerika</span></div>
            </div>
        </div>

    </div>
</div>

`
demo1.innerHTML = carMore