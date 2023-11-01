const orderBtn = document.getElementById("getStart");
const packageSection = document.querySelector("#package-section");

// tombol order
const lowOrderBtn = document.getElementById("lowOrder");
const HighOrderBtn = document.getElementById("highOrder");

// fungsi popup menu
orderBtn.addEventListener("click", function () {
  packageSection.style.display = "flex";
  packageSection.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  packageSection.style.margin = "auto";
  packageSection.style.position = "fixed";
  packageSection.style.top = "0";
});

packageSection.addEventListener("click", function (event) {
  if (event.target === packageSection) {
    packageSection.style.display = "none";
  }
});

// fungsi order save ke local storage
lowOrderBtn.addEventListener("click", function () {
  // Ambil data dari localStorage jika sudah ada, atau set nilai awal jika belum ada
  var lowOrderQuantity = parseInt(localStorage.getItem("lowOrderQuantity")) || 0;
  var lowOrderTotal = parseInt(localStorage.getItem("lowOrderTotal")) || 0;

  // Tambah jumlah dan total
  lowOrderQuantity += 1;
  lowOrderTotal += 250000;

  // Simpan data ke localStorage
  localStorage.setItem("lowOrderQuantity", lowOrderQuantity);
  localStorage.setItem("lowOrderTotal", lowOrderTotal);

  // berhasil simpan data
  alert("berhasil simpan data");
});

// Ambil tombol "highOrder" dari DOM
var highOrderButton = document.getElementById("highOrder");

// Tambahkan event listener untuk saat tombol "highOrder" ditekan
highOrderButton.addEventListener("click", function () {
  // Ambil data dari localStorage jika sudah ada, atau set nilai awal jika belum ada
  var highOrderQuantity = parseInt(localStorage.getItem("highOrderQuantity")) || 0;
  var highOrderTotal = parseInt(localStorage.getItem("highOrderTotal")) || 0;

  // Tambahkan jumlah dan total
  highOrderQuantity += 1;
  highOrderTotal += 500000;

  // Simpan data ke localStorage
  localStorage.setItem("highOrderQuantity", highOrderQuantity);
  localStorage.setItem("highOrderTotal", highOrderTotal);

  // berhasil simpan data
  alert("berhasil simpan data");
});
