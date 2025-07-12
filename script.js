document.addEventListener("DOMContentLoaded", function () {
    const tombolBeli = document.querySelectorAll(".beli-btn");
    const modal = document.getElementById("checkoutModal");
    const closeBtn = document.querySelector(".close-btn");
    const formCheckout = document.getElementById("checkoutForm");

    // Cek elemen penting
    if (!tombolBeli || !modal || !closeBtn || !formCheckout) {
        console.error("Beberapa elemen tidak ditemukan di halaman.");
        return;
    }

    // Tampilkan modal saat tombol "Beli" diklik
    tombolBeli.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const namaProduk = btn.getAttribute("data-nama") || "Produk";
            const hargaProduk = btn.getAttribute("data-harga") || "0";
            
            console.log(`Produk: ${namaProduk}, Harga: Rp ${hargaProduk}`);
            modal.style.display = "flex";
        });
    });

    // Tutup modal saat klik tombol X
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Tutup modal saat klik di luar modal
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Submit form checkout
    formCheckout.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("Terima kasih, pesanan Anda sedang diproses!");
        modal.style.display = "none";
        formCheckout.reset();
    });
});
