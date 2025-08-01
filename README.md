# Judul Proyek
Quiz Web App

## Deskripsi
Aplikasi kuis berbasis web yang menampilkan pertanyaan secara interaktif terkait dunia pemrograman dengan timer dan skor otomatis. Dibuat sebagai bagian dari Assignment Capstone Project Hacktiv8.

## Teknologi yang Digunakan
- HTML, CSS, JavaScript
- Bootstrap 5.3
- Netlify (untuk deployment)
Bootstrap dipilih karena lebih cepat dalam hal code dan instalasi. Banyak code template sepertu button, card yang siap pakai. Untuk proses instalasi juga lebih cepat hanya memerlukan download file Bootstrap. Pemilihan Netlify karena paling simple untuk deployment dan sudah memenuhi akan keperluan project ini yang hanya terdiri dari HTML, CSS, dan JavaScript tanpa backend.

## Fitur
- Tampilan kuis dengan pertanyaan dan pilihan ganda
Tampilan kuis yang simple dan cantik sehingga tidak membingungkan user. Tersedia dengan 4 pilihan jawaban yang berbeda.
- Feedback langsung terhadap jawaban yang dipilih
Setelah memilih jawaban, maka benar atau salah jawaban itu akan muncul. Kolom jawaban dengan warna hijau menandakan jawaban itu benar. Jika salah maka jawaban yang dipilih akan berwarna merah. Namun setiap jawaban yang salah akan langsung diberi kunci jawaban.
- kuis acak
Setiap ingin mengakses kuis ini maka otomatis soal akan diacak nomor urutannya.
- Timer per soal
per soal akan disediakan waktu pengerjaan selama 10 detik. Jika waktu habis maka otomatis user tidak bisa memilih jawaban dan hanya bisa untuk melanjutkan ke soal selanjutnya.
- Skor otomatis
Setelah mengerjakan kuis maka diakhir akan tersedia screen result dan menampilkan skor dengan jumlah jawaban yang benar. Masing masing tingkat dengan jumlah jawaban yang benar memiliki respon gambar dan kata kata interaktif yang berbeda.
tingkat 1 (benar soal 10, 9, 8) = Good
tingkat 2 (benar soal 7, 6, 5) = Medium
tingkat 3 (benar soal 4, 3, 2, 1) = Bad
tingkat 4 (tidak ada soal yang benar) = Nice Try

## Setup / Cara Menjalankan
1. Clone repositori ini:
   ```bash
   git clone https://github.com/nazzalaariskyy/Quiz-Game---Brief-Capstone-Project-IBM-Hacktiv8-.git
2. Buka file index.html di browser.
3. Nikmati kuis interaktifnya!

## AI support explanation
- Menyusun struktur dan tampilan UI kuis.
Memakai AI dari model IBM Granite untuk membantu membuatkan desain dari UI kuis game beserta dengan code.
- Membantu dalam debugging kode.
membantu menyelesaikan permasalahan logika dan debugging code.
