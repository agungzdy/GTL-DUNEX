# HALIM SORT CENTER MW
Quiz singkat tentang scorecard Halim Sort Center MW.

Alamat publik: **https://raw.githack.com/agungzdy/GTL-DUNEX/main/index.html**

## Cara menjalankan
1. Buka [index.html](index.html) di browser, atau jalankan server lokal:
   - `python3 -m http.server 8000`
2. Akses link singkat game: **http://localhost:8000**

Link ini langsung membuka lobby game dan mudah dibagikan ke perangkat lain di jaringan yang sama dengan mengganti `localhost` menggunakan IP komputer yang menjalankan server. Game sudah responsif untuk handphone; buka link yang sama dari browser handphone.

## Publikasi

Untuk akses bersama tanpa pengaturan DNS, bagikan URL berikut:

**https://raw.githack.com/agungzdy/GTL-DUNEX/main/index.html**

URL ini membaca versi terbaru dari branch `main` dan tidak memerlukan domain pribadi.

## Akses langsung tanpa GitHub

Web ini dapat dijalankan langsung dari Google Apps Script sehingga pengguna cukup membuka satu URL di browser HP:

1. Buka spreadsheet target: https://docs.google.com/spreadsheets/d/1bMOQCJyt4DYoCf4H0I-kEMyl7Ikq2j89SmdrygkwvNA/edit?usp=sharing
2. Buka **Extensions > Apps Script**.
3. Salin isi [apps-script.gs](apps-script.gs) ke file script Apps Script.
4. Di Apps Script, klik **+ > HTML**, beri nama file `index` (tanpa `.html`), lalu salin seluruh isi [index.html](index.html) ke file tersebut.
5. Klik **Deploy > New deployment**, pilih **Web app**, lalu atur:
   - **Execute as:** Me
   - **Who has access:** Anyone
6. Klik **Deploy**, salin URL yang berakhiran `/exec`, lalu bagikan URL tersebut kepada pengguna.
7. Buka URL itu dari browser HP. Tidak perlu GitHub atau server lokal.

## Integrasi ke Google Sheets
1. Buka spreadsheet target: https://docs.google.com/spreadsheets/d/1bMOQCJyt4DYoCf4H0I-kEMyl7Ikq2j89SmdrygkwvNA/edit?usp=sharing
2. Jika web app sudah dibuat mengikuti langkah di atas, gunakan URL `/exec` yang sama sebagai URL webhook.
3. Buka menu Admin pada web, aktifkan sinkronisasi Google Sheet, masukkan URL `/exec` tersebut, lalu simpan.
4. Jalankan quiz dan periksa sheet `Scorecard`.

Setiap hasil akhir pemain akan otomatis tersimpan ke sheet `Scorecard`.
