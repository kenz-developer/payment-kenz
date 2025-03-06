function copyToClipboard(id) {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text).then(() => {
        Swal.fire({
            title: "Berhasil Disalin!",
            text: "Nomor: " + text,
            icon: "success",
            confirmButtonColor: "#3b82f6"
        });
    });
}

function showQR() {
    Swal.fire({
        title: "Scan QR untuk Pembayaran",
        text: "Gunakan QR ini untuk melakukan pembayaran.",
        imageUrl: "https://kenz.cloudx.biz.id/download/1741234541877.jpg", // Ganti dengan QR aslimu
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: "QR Code",
        confirmButtonColor: "#ff5722"
    });
}