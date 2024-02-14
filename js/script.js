const form = document.getElementById("konversi-form");
const suhuInput = document.getElementById("suhu");
const satuanSelect = document.getElementById("satuan");
const hasilKonversiDiv = document.getElementById("hasil-konversi");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const suhu = Number(suhuInput.value);
    const satuan = satuanSelect.value;

    let hasilKonversi;
    if (satuan === "celsius") {
        hasilKonversi = (suhu * 9 / 5) + 32;
        hasilKonversiDiv.textContent = `Suhu dalam Fahrenheit: ${hasilKonversi.toFixed(2)}°F`;
    } else {
        hasilKonversi = (suhu - 32) * 5 / 9;
        hasilKonversiDiv.textContent = `Suhu dalam Celcius: ${hasilKonversi.toFixed(2)}°C`;
    }
});

document.getElementById('reverseBtn').addEventListener('click', function() {
    var satuan = document.getElementById('satuan').value;
    
    // Menukar satuan suhu
    if (satuan === 'celsius') {
        document.getElementById('satuan').value = 'fahrenheit';
    } else {
        document.getElementById('satuan').value = 'celsius';
    }
});

document.getElementById('konversi-form').addEventListener('reset', function() {
    // Menghapus nilai inputan
    document.getElementById('suhu').value = '';
});

