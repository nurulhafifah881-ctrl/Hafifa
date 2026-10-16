const form = document.getElementById("formLogin");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const pesan = document.getElementById("pesan");

// Menampilkan alert Bootstrap (tipe: danger / success)
function tampilkanPesan(tipe, teks) {
  pesan.innerHTML = `<div class="alert alert-${tipe}" role="alert">${teks}</div>`;
}

form.addEventListener("submit", function (event) {
  event.preventDefault(); // mencegah form diproses/reload halaman

  const email = inputEmail.value.trim();
  const password = inputPassword.value;
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errors = [];

  if (email === "") {
    errors.push("Email tidak boleh kosong.");
  } else if (!polaEmail.test(email)) {
    errors.push("Format email tidak valid.");
  }

  if (password === "") {
    errors.push("Password tidak boleh kosong.");
  } else if (password.length < 8) {
    errors.push("Password minimal 8 karakter.");
  }

  if (errors.length > 0) {
    tampilkanPesan("danger", errors.join("<br>"));
  } else {
    tampilkanPesan("success", "Validasi berhasil! Selamat datang, " + email);
    form.reset();
  }
});