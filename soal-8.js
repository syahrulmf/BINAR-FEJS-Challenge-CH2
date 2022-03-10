const dataPenjualanNovel = [
  {
    idProduct: 'BOOK002421',
    namaProduk: 'Pulang - Pergi',
    penulis: 'Tere Liye',
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: 'BOOK002351',
    namaProduk: 'Selamat Tinggal',
    penulis: 'Tere Liye',
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Garis Waktu',
    penulis: 'Fiersa Besari',
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
]; 

function getInfoPenjualan(dataPenjualan){
  let result = {}

  const hitungKeuntungan = dataPenjualan.map(e => {
    return e.totalTerjual * (e.hargaJual - e.hargaBeli)
  });

  const totalKeuntungan = hitungKeuntungan.reduce((prev, curr) => {
    return prev + curr
  });

  const hitungModal = dataPenjualan.map(e => {
    return e.hargaBeli * (e.totalTerjual + e.sisaStok)
  });

  const totalModal = hitungModal.reduce((prev, curr) => {
    return prev + curr
  });

  const persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;

  const produkBukuTerlaris = dataPenjualan.reduce((prev, curr, i) => {
    return curr.totalTerjual > (prev.totalTerjual || 0) ? curr : prev.namaProduk;
  });

  const penulisTerlaris = dataPenjualan.reduce((prev, curr) => {
    return curr.totalTerjual > (prev.totalTerjual || 0) ? curr : prev.penulis;
  });

  result.totalKeuntungan = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(totalKeuntungan);
  result.totalModal = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(totalModal);
  result.persentaseKeuntungan = persentaseKeuntungan.toFixed(2)  + ' %';
  result.penulisTerlaris = penulisTerlaris;
  result.bukuTerlaris = produkBukuTerlaris;

  return result
}

console.log(getInfoPenjualan(dataPenjualanNovel));