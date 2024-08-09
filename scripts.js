
const questions = {
    general: [
        { question: "Apa ibukota Indonesia?", answers: ["Jakarta", "Bandung", "Surabaya", "Medan"], correct: "Jakarta" },
        { question: "Siapakah penemu pesawat yang pertama kali?", answers: ["Wright Bersaudara", "Thomas Alva Edison", "Alexander Graham Bell", "Nikola Tesla"], correct: "Wright Bersaudara" },
        { question: "Nama alat transportasi darat yang memiliki jalur khusus adalah…?", answers: ["Kereta Api", "Bus", "Sepeda", "Mobil"], correct: "Kereta Api" },
        { question: "Sebutkan nama penulis dari cerita Harry Potter!", answers: ["J.K. Rowling", "George R.R. Martin", "J.R.R. Tolkien", "Stephen King"], correct: "J.K. Rowling" },
        { question: "Mata uang negara kesatuan Republik Indonesia adalah Rupiah, sementara Yen adalah mata uang dari negara…?", answers: ["Jepang", "China", "Korea Selatan", "Vietnam"], correct: "Jepang" },
        { question: "Sebutkan nama Ibukota dari negara Spanyol!", answers: ["Madrid", "Barcelona", "Sevilla", "Valencia"], correct: "Madrid" },
        { question: "Siapakah tokoh yang menjahit bendera merah putih?", answers: ["Fatmawati", "R.A. Kartini", "Cut Nyak Dien", "Dewi Sartika"], correct: "Fatmawati" },
        { question: "Sebutkan nama negara termuda yang tergabung dalam ASEAN!", answers: ["Timor Leste", "Myanmar", "Laos", "Brunei"], correct: "Timor Leste" },
        { question: "Bangsa Indonesia akan memperingati kemerdekaan yang ke berapa tahun pada tahun 2023?", answers: ["78", "77", "79", "80"], correct: "78" },
        { question: "Sistem politik apakah yang dianut oleh negara Indonesia?", answers: ["Demokratis", "Monarki", "Oligarki", "Teokrasi"], correct: "Demokratis" },
        { question: "Apa ibu kota negara Kanada?", answers: ["Toronto", "Vancouver", "Montreal", "Ottawa"], correct: "Ottawa" },
        { question: "Apa nama planet terbesar di tata surya kita?", answers: ["Mars", "Venus", "Jupiter", "Saturnus"], correct: "Jupiter" },
        { question: "Siapa penulis novel 'Laskar Pelangi'?", answers: ["Andrea Hirata", "Pramoedya Ananta Toer", "Ayu Utami", "Habiburrahman El Shirazy"], correct: "Andrea Hirata" },
        { question: "Apa nama benua yang terletak di sebelah selatan Bumi?", answers: ["Afrika", "Australia", "Asia", "Amerika Selatan"], correct: "Australia" },
        { question: "Apa nama organ manusia yang berfungsi untuk memompa darah ke seluruh tubuh?", answers: ["Paru-paru", "Hati", "Ginjal", "Jantung"], correct: "Jantung" },
        { question: "Siapa presiden Amerika Serikat pertama?", answers: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], correct: "George Washington" },
        { question: "Apa nama proses pembuatan makanan yang menggunakan panas untuk menghilangkan air?", answers: ["Fermentasi", "Kukus", "Pengeringan", "Pemanggangan"], correct: "Pengeringan" },
        { question: "Apa nama sistem pencernaan pada manusia yang bertugas menyerap nutrisi?", answers: ["Usus Kecil", "Usus Besar", "Lambung", "Hati"], correct: "Usus Kecil" },
        { question: "Apa nama presiden Indonesia yang pertama kali?", answers: ["Soekarno", "Suharto", "Jokowi", "B.J. Habibie"], correct: "Soekarno" },
        { question: "Apa nama pulau terbesar di Indonesia?", answers: ["Sumatera", "Jawa", "Kalimantan", "Sulawesi"], correct: "Kalimantan" },
        { question: "Apa nama pegunungan tertinggi di dunia?", answers: ["Alps", "Himalaya", "Rockies", "Andes"], correct: "Himalaya" },
        { question: "Apa nama mata uang resmi Jepang?", answers: ["Won", "Ringgit", "Yuan", "Yen"], correct: "Yen" },
        { question: "Apa nama bintang terdekat dari Bumi setelah matahari?", answers: ["Sirius", "Betelgeuse", "Proxima Centauri", "Alpha Centauri"], correct: "Proxima Centauri" },
        { question: "Siapa penulis novel 'To Kill a Mockingbird'?", answers: ["Harper Lee", "J.D. Salinger", "Ernest Hemingway", "Mark Twain"], correct: "Harper Lee" },
        { question: "Apa nama laut terbesar di dunia?", answers: ["Laut Mediterania", "Laut Karibia", "Laut Cina Selatan", "Lautan Pasifik"], correct: "Lautan Pasifik" },
        { question: "Apa nama unsur kimia dengan simbol Au?", answers: ["Argon", "Silver", "Gold", "Copper"], correct: "Gold" },
        { question: "Apa nama ibu kota negara Australia?", answers: ["Sydney", "Melbourne", "Brisbane", "Canberra"], correct: "Canberra" },
        { question: "Apa nama penulis novel 'One Hundred Years of Solitude'?", answers: ["Gabriel García Márquez", "Mario Vargas Llosa", "Jorge Luis Borges", "Pablo Neruda"], correct: "Gabriel García Márquez" },
        { question: "Siapa penemu teori relativitas?", answers: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Galileo Galilei"], correct: "Albert Einstein" },
        { question: "Apa nama ibukota dari Swedia?", answers: ["Oslo", "Helsinki", "Stockholm", "Copenhagen"], correct: "Stockholm" },
        { question: "Siapa yang menciptakan teori evolusi melalui seleksi alam?", answers: ["Charles Darwin", "Louis Pasteur", "Gregor Mendel", "Jean-Baptiste Lamarck"], correct: "Charles Darwin" },
        { question: "Apa nama sungai terpanjang di dunia?", answers: ["Sungai Amazon", "Sungai Nil", "Sungai Yangtze", "Sungai Mississippi"], correct: "Sungai Nil" },
        { question: "Apa nama ilmiah untuk spesies panda raksasa?", answers: ["Ailuropoda melanoleuca", "Ursus arctos", "Ursus maritimus", "Ailuropoda microcephala"], correct: "Ailuropoda melanoleuca" },
        { question: "Siapa presiden keempat Amerika Serikat?", answers: ["James Madison", "James Monroe", "John Quincy Adams", "Andrew Jackson"], correct: "James Madison" },
        { question: "Apa nama bahan bakar fosil yang digunakan sebagai sumber energi utama di pembangkit listrik?", answers: ["Minyak Bumi", "Gas Alam", "Batubara", "Uranium"], correct: "Batubara" },
        { question: "Apa nama satelit alami Bumi?", answers: ["Phobos", "Deimos", "Titan", "Bulan"], correct: "Bulan" },
        { question: "Apa nama astronom yang pertama kali mengamati cincin Saturnus?", answers: ["Tycho Brahe", "Johannes Kepler", "Galileo Galilei", "Christiaan Huygens"], correct: "Christiaan Huygens" },
        { question: "Apa nama buku yang ditulis oleh George Orwell tentang totalitarianisme?", answers: ["Brave New World", "1984", "Animal Farm", "Fahrenheit 451"], correct: "1984" },
        { question: "Apa nama ibu kota dari Portugal?", answers: ["Madrid", "Lisbon", "Barcelona", "Oporto"], correct: "Lisbon" },
        { question: "Apa nama senyawa kimia yang membentuk garam dapur?", answers: ["Natrium Klorida", "Kalsium Karbonat", "Magnesium Sulfat", "Sodium Bikarbonat"], correct: "Natrium Klorida" },
        { question: "Apa nama sistem tata surya yang kita huni?", answers: ["Galaksi Andromeda", "Galaksi Milky Way", "Galaksi Triangulum", "Galaksi Sombrero"], correct: "Galaksi Milky Way" },
        { question: "Siapa yang menulis buku 'War and Peace'?", answers: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Ivan Turgenev"], correct: "Leo Tolstoy" },
        { question: "Apa nama meteorologi yang mengukur kecepatan angin?", answers: ["Thermometer", "Barometer", "Anemometer", "Hygrometer"], correct: "Anemometer" },
        { question: "Apa nama benua terkecil di dunia?", answers: ["Afrika", "Oceania", "Antartika", "Eropa"], correct: "Oceania" },
        { question: "Apa nama planet yang dikenal sebagai 'Planet Merah'?", answers: ["Mars", "Venus", "Jupiter", "Mercury"], correct: "Mars" },
        { question: "Apa nama ilmuwan yang dikenal dengan hukum gravitasi?", answers: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"], correct: "Isaac Newton" },
        { question: "Apa nama kota terbesar di Australia?", answers: ["Sydney", "Melbourne", "Brisbane", "Adelaide"], correct: "Sydney" },
        { question: "Apa nama negara dengan jumlah pulau terbanyak di dunia?", answers: ["Indonesia", "Filipina", "Swedia", "Kanada"], correct: "Swedia" },
        { question: "Apa nama prinsip dasar dalam teori ekonomi mikro yang menyatakan bahwa manusia bertindak rasional untuk memaksimalkan utilitas?", answers: ["Hukum Permintaan", "Hukum Penawaran", "Hukum Marginal Utility", "Hukum Gossen"], correct: "Hukum Marginal Utility" },
        { question: "Siapa penulis buku 'Pride and Prejudice'?", answers: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Mary Shelley"], correct: "Jane Austen" },
        { question: "Apa nama gunung tertinggi di Afrika?", answers: ["Kilimanjaro", "Mount Kenya", "Mount Elgon", "Mount Meru"], correct: "Kilimanjaro" },
        { question: "Apa nama ilmiah dari spesies Gajah Afrika?", answers: ["Loxodonta africana", "Elephas maximus", "Loxodonta cyclotis", "Elephas africanus"], correct: "Loxodonta africana" },
        { question: "Siapa presiden pertama Prancis setelah Revolusi Prancis?", answers: ["Napoleon Bonaparte", "Louis XVI", "Charles de Gaulle", "Louis Napoleon"], correct: "Napoleon Bonaparte" },
        { question: "Apa nama proses perubahan air menjadi uap?", answers: ["Kondensasi", "Penguapan", "Pembekuan", "Pelelehan"], correct: "Penguapan" },
        { question: "Apa nama planet yang dikenal dengan cincin?", answers: ["Jupiter", "Saturnus", "Neptunus", "Uranus"], correct: "Saturnus" },
        { question: "Apa nama organ tubuh manusia yang memproduksi insulin?", answers: ["Hati", "Pankreas", "Ginjal", "Lambung"], correct: "Pankreas" },
        { question: "Apa nama ilmiah untuk spesies penguin Emperor?", answers: ["Aptenodytes forsteri", "Pygoscelis adeliae", "Eudyptes chrysolophus", "Spheniscus demersus"], correct: "Aptenodytes forsteri" },
        { question: "Apa nama sistem penulisan yang digunakan di Jepang?", answers: ["Kanji", "Hiragana", "Katakana", "Hangeul"], correct: "Kanji" },
        { question: "Apa nama hukum fisika yang menyatakan bahwa untuk setiap aksi ada reaksi yang sama dan berlawanan?", answers: ["Hukum Newton I", "Hukum Newton II", "Hukum Newton III", "Hukum Kekekalan Energi"], correct: "Hukum Newton III" },
        { question: "Apa yang dimaksud dengan Pancasila sebagai dasar negara?", answers: ["Dasar hukum negara", "Panduan moral", "Sumber hukum tertinggi", "Ideologi negara"], correct: "Ideologi negara" },
        { question: "Apa prinsip utama dari sila pertama Pancasila?", answers: ["Keadilan sosial", "Ketuhanan Yang Maha Esa", "Persatuan Indonesia", "Kemanusiaan yang Adil dan Beradab"], correct: "Ketuhanan Yang Maha Esa" },
        { question: "Apa fungsi dari UUD 1945 dalam sistem pemerintahan Indonesia?", answers: ["Sebagai undang-undang dasar", "Sebagai undang-undang pelaksana", "Sebagai pedoman partai politik", "Sebagai dokumen sejarah"], correct: "Sebagai undang-undang dasar" },
        { question: "Apa makna dari semboyan 'Bhinneka Tunggal Ika'?", answers: ["Berbeda-beda tetapi tetap satu", "Satu bangsa satu negara", "Bersatu dalam keragaman", "Satu tujuan satu cita-cita"], correct: "Berbeda-beda tetapi tetap satu" },
        { question: "Apa yang menjadi landasan hukum untuk pembentukan pemerintah daerah di Indonesia?", answers: ["UUD 1945", "Undang-Undang Otonomi Daerah", "Undang-Undang Pemerintahan Pusat", "Keputusan Presiden"], correct: "Undang-Undang Otonomi Daerah" },
        { question: "Apa peran MPR dalam sistem ketatanegaraan Indonesia?", answers: ["Mengangkat presiden", "Membuat undang-undang", "Menjaga stabilitas politik", "Mengubah UUD"], correct: "Mengubah UUD" },
        { question: "Apa hak yang dijamin oleh Pasal 28 UUD 1945?", answers: ["Hak atas pendidikan", "Hak atas kesehatan", "Hak untuk berkumpul", "Hak atas pekerjaan"], correct: "Hak untuk berkumpul" },
        { question: "Apa tujuan dari sistem demokrasi Pancasila?", answers: ["Menciptakan pemerintahan yang adil dan bijaksana", "Menjamin hak asasi manusia", "Meningkatkan kesejahteraan rakyat", "Membagi kekuasaan secara merata"], correct: "Menciptakan pemerintahan yang adil dan bijaksana" },
        { question: "Apa yang dimaksud dengan desentralisasi dalam konteks pemerintahan Indonesia?", answers: ["Pemerintahan pusat mengambil keputusan untuk daerah", "Pemerintahan daerah memiliki kekuasaan untuk mengatur daerahnya", "Pemerintahan pusat dan daerah bekerja sama", "Kekuasaan tertinggi berada di pusat"], correct: "Pemerintahan daerah memiliki kekuasaan untuk mengatur daerahnya" },
        { question: "Apa fungsi dari Dewan Perwakilan Daerah (DPD)?", answers: ["Membuat undang-undang", "Mengawasi kebijakan pemerintah", "Mewakili daerah dalam legislasi", "Menjaga hubungan internasional"], correct: "Mewakili daerah dalam legislasi" },
        { question: "Apa makna dari sila kedua Pancasila, 'Kemanusiaan yang Adil dan Beradab'?", answers: ["Menghargai hak asasi manusia", "Menjaga persatuan bangsa", "Menjamin kebebasan beragama", "Mendukung kemajuan teknologi"], correct: "Menghargai hak asasi manusia" },
        { question: "Apa tugas utama dari Lembaga Negara di Indonesia?", answers: ["Membuat kebijakan ekonomi", "Menjalankan pemerintahan", "Melaksanakan fungsi legislatif dan yudikatif", "Mengatur hubungan internasional"], correct: "Melaksanakan fungsi legislatif dan yudikatif" },
        { question: "Apa peran dan fungsi dari BPK (Badan Pemeriksa Keuangan)?", answers: ["Melakukan audit keuangan pemerintah", "Mengatur kebijakan moneter", "Menjaga hubungan dengan luar negeri", "Menyusun anggaran negara"], correct: "Melakukan audit keuangan pemerintah" },
        { question: "Apa yang dimaksud dengan hak dan kewajiban warga negara?", answers: ["Hak adalah apa yang dapat diperoleh warga negara, kewajiban adalah apa yang harus dilakukan", "Hak adalah kewajiban negara, kewajiban adalah hak negara", "Hak dan kewajiban adalah hal yang sama", "Hak adalah hak individu, kewajiban adalah hak negara"], correct: "Hak adalah apa yang dapat diperoleh warga negara, kewajiban adalah apa yang harus dilakukan" },
        { question: "Apa yang dimaksud dengan sistem pemerintahan Presidensial?", answers: ["Presiden sebagai kepala negara dan kepala pemerintahan", "Presiden sebagai kepala negara, perdana menteri sebagai kepala pemerintahan", "Presiden dan parlemen berbagi kekuasaan", "Presiden hanya sebagai simbol negara"], correct: "Presiden sebagai kepala negara dan kepala pemerintahan" },
        { question: "Apa tujuan utama dari otonomi daerah di Indonesia?", answers: ["Memberikan kekuasaan lebih kepada pemerintah pusat", "Meningkatkan partisipasi masyarakat dalam pemerintahan daerah", "Mengurangi peran pemerintah daerah", "Mengintegrasikan kebijakan pemerintah pusat"], correct: "Meningkatkan partisipasi masyarakat dalam pemerintahan daerah" },
    ],
    math: [
        { question: "Berapakah 2 + 2?", answers: ["3", "4", "5", "6"], correct: "4" },
        { question: "Berapakah hasil dari 5 x 6?", answers: ["30", "25", "35", "40"], correct: "30" },
        { question: "Apa hasil dari 9 / 3?", answers: ["2", "3", "6", "9"], correct: "3" },
        { question: "Berapa kuadrat dari 7?", answers: ["49", "56", "42", "64"], correct: "49" },
        { question: "Jika x + 3 = 10, berapakah nilai x?", answers: ["7", "8", "6", "5"], correct: "7" },
        { question: "Apa hasil dari 12 - 4 x 2?", answers: ["4", "8", "10", "12"], correct: "4" },
        { question: "Berapakah nilai dari 3^2?", answers: ["6", "9", "12", "15"], correct: "9" },
        { question: "Apa hasil dari 15 % 4?", answers: ["3", "2", "1", "4"], correct: "3" },
        { question: "Jika A = 5 dan B = 3, berapakah A + B?", answers: ["8", "7", "6", "9"], correct: "8" },
        { question: "Berapakah volume dari kubus dengan sisi 4?", answers: ["64", "48", "16", "32"], correct: "64" },
        { question: "Berapakah 7 + 8?", answers: ["14", "15", "16", "17"], correct: "15" },
        { question: "Apa hasil dari 20 - 5 x 3?", answers: ["15", "10", "25", "5"], correct: "5" },
        { question: "Berapakah 9 + 6 x 2?", answers: ["15", "18", "21", "24"], correct: "21" },
        { question: "Berapa hasil dari 2^3?", answers: ["6", "8", "10", "12"], correct: "8" },
        { question: "Jika a = 4 dan b = 5, berapakah a x b?", answers: ["20", "15", "25", "30"], correct: "20" },
        { question: "Berapakah hasil dari 15 + 7 - 4?", answers: ["18", "20", "22", "24"], correct: "18" },
        { question: "Apa hasil dari 12 / 4 x 2?", answers: ["6", "8", "10", "12"], correct: "6" },
        { question: "Berapa hasil dari 8 x 3 - 10?", answers: ["14", "20", "24", "22"], correct: "14" },
        { question: "Jika x^2 = 16, berapakah nilai x?", answers: ["4", "-4", "8", "-8"], correct: "4" },
        { question: "Berapakah luas dari segitiga dengan alas 10 dan tinggi 5?", answers: ["25", "50", "75", "100"], correct: "25" },
        { question: "Apa hasil dari 7 x 6 / 3?", answers: ["14", "18", "21", "28"], correct: "14" },
        { question: "Berapa sisa pembagian 23 dengan 5?", answers: ["3", "2", "4", "1"], correct: "3" },
        { question: "Jika 5x + 2 = 17, berapakah nilai x?", answers: ["3", "2", "4", "5"], correct: "3" },
        { question: "Apa hasil dari 100 - 3^3?", answers: ["91", "96", "87", "100"], correct: "91" },
        { question: "Berapa hasil dari (4 + 6) x 2?", answers: ["18", "20", "24", "22"], correct: "20" },
        { question: "Jika panjang dan lebar sebuah persegi panjang adalah 7 dan 3, berapakah luasnya?", answers: ["21", "30", "20", "25"], correct: "21" },
        { question: "Jika 5 + 3 × 2 = x, maka x adalah…", answers: ["11", "16", "13", "10"], correct: "11" },
        { question: "Berapakah hasil dari 7 × (4 + 2)?", answers: ["42", "36", "40", "50"], correct: "42" },
        { question: "Apa hasil dari 8 ÷ 2 + 5?", answers: ["9", "11", "10", "12"], correct: "9" },
        { question: "Jika 3x - 5 = 16, berapakah nilai x?", answers: ["7", "9", "6", "8"], correct: "7" },
        { question: "Berapakah hasil dari (6 + 2)²?", answers: ["64", "36", "49", "16"], correct: "64" },
        { question: "Jika 2x + 3 = 15, berapakah nilai x?", answers: ["5", "6", "7", "8"], correct: "6" },
        { question: "Berapakah hasil dari 20 ÷ 4 × 3?", answers: ["15", "18", "12", "20"], correct: "15" },
        { question: "Apa hasil dari 9² - 7 × 3?", answers: ["50", "55", "52", "57"], correct: "50" },
        { question: "Jika a = 6 dan b = 4, berapakah (a + b)²?", answers: ["100", "64", "36", "80"], correct: "100" },
        { question: "Berapakah hasil dari 14 - 3 × (2 + 4)?", answers: ["-2", "0", "2", "8"], correct: "-2" },
        { question: "Berapakah hasil dari 12 + 8 × 3?", answers: ["36", "28", "24", "32"], correct: "36" },
        { question: "Jika 4x - 7 = 13, berapakah nilai x?", answers: ["5", "4", "6", "7"], correct: "5" },
        { question: "Apa hasil dari (9 - 3) × 4?", answers: ["24", "30", "20", "18"], correct: "24" },
        { question: "Berapakah hasil dari 15 ÷ (2 + 3)?", answers: ["3", "5", "4", "6"], correct: "3" },
        { question: "Jika 7 × (x - 2) = 21, berapakah nilai x?", answers: ["5", "4", "3", "6"], correct: "4" },
        { question: "Apa hasil dari 6² - 8?", answers: ["28", "20", "36", "44"], correct: "28" },
        { question: "Berapakah hasil dari 8 × (5 - 3)?", answers: ["16", "24", "20", "32"], correct: "16" },
        { question: "Jika 9a = 72, berapakah nilai a?", answers: ["8", "9", "10", "12"], correct: "8" },
        { question: "Apa hasil dari 3 + 6 × 2?", answers: ["15", "18", "12", "21"], correct: "15" },
        { question: "Berapakah hasil dari 25 ÷ 5 × 2?", answers: ["10", "15", "5", "8"], correct: "10" },
        { question: "Jika 2x - 4 = 10, berapakah nilai x?", answers: ["6", "7", "8", "9"], correct: "7" },
        { question: "Apa hasil dari (4 + 6) ÷ 2?", answers: ["5", "6", "4", "7"], correct: "5" },
        { question: "Berapakah hasil dari 10 × (3 + 2)?", answers: ["50", "60", "40", "70"], correct: "50" },
        { question: "Jika 5x = 45, berapakah nilai x?", answers: ["9", "8", "7", "10"], correct: "9" },
        { question: "Apa hasil dari 12 ÷ 3 × 2?", answers: ["8", "10", "6", "4"], correct: "8" },
        { question: "Berapakah hasil dari 18 - 4 × 2?", answers: ["10", "12", "8", "14"], correct: "10" },
        { question: "Jika 3(x + 4) = 21, berapakah nilai x?", answers: ["3", "2", "4", "5"], correct: "1" },
        { question: "Apa hasil dari 7² - (5 + 2)?", answers: ["43", "48", "45", "40"], correct: "43" },
        { question: "Berapakah hasil dari 16 ÷ (2 + 2)?", answers: ["4", "5", "3", "6"], correct: "4" },
        { question: "Jika 2x + 3 = 15, berapakah nilai x?", answers: ["6", "5", "4", "7"], correct: "6" },
        { question: "Apa hasil dari 11 × 2 - 8?", answers: ["14", "22", "18", "20"], correct: "14" },
        { question: "Berapakah hasil dari 14 ÷ 2 + 7?", answers: ["14", "12", "11", "16"], correct: "14" }
    ],
    culture: [
        { question: "Tari Kecak berasal dari?", answers: ["Bali", "Jawa", "Sumatera", "Sulawesi"], correct: "Bali" },
        { question: "Apa nama pakaian adat dari Sumatera Barat?", answers: ["Batik", "Baju Kurung", "Baju Pengantin", "Baju Koko"], correct: "Baju Pengantin" },
        { question: "Apa nama upacara adat untuk mengantar mayat di Bali?", answers: ["Ngaben", "Rite", "Mekepung", "Mecaru"], correct: "Ngaben" },
        { question: "Seni tari tradisional yang berasal dari Jawa Tengah adalah?", answers: ["Gamelan", "Bedaya", "Tari Piring", "Saman"], correct: "Bedaya" },
        { question: "Apa nama festival tahunan yang diadakan di Kota Solo?", answers: ["Solo Batik Carnival", "Festival Budaya Bali", "Festival Krakatau", "Festival Bandung"], correct: "Solo Batik Carnival" },
        { question: "Apa nama rumah adat suku Dayak?", answers: ["Rumah Betang", "Rumah Joglo", "Rumah Gadang", "Rumah Joglo"], correct: "Rumah Betang" },
        { question: "Apa nama alat musik tradisional yang berasal dari Kalimantan?", answers: ["Angklung", "Kecapi", "Gong", "Kolintang"], correct: "Gong" },
        { question: "Apa nama ritual yang dilakukan untuk memohon hujan di Bali?", answers: ["Melasti", "Omed-Omedan", "Kecak", "Ngaben"], correct: "Melasti" },
        { question: "Tari tradisional yang berasal dari daerah Minangkabau adalah?", answers: ["Tari Saman", "Tari Piring", "Tari Topeng", "Tari Jaipong"], correct: "Tari Piring" },
        { question: "Apa nama upacara adat yang dilakukan di Jawa Barat untuk meminta keselamatan?", answers: ["Ritual Ngaben", "Upacara Seren Taun", "Pesta Laut", "Ritual Wayang Kulit"], correct: "Upacara Seren Taun" },
        { question: "Apa nama tarian tradisional dari Aceh yang terkenal?", answers: ["Tari Saman", "Tari Piring", "Tari Kecak", "Tari Jaipong"], correct: "Tari Saman" },
        { question: "Apa nama rumah adat suku Minangkabau?", answers: ["Rumah Gadang", "Rumah Betang", "Rumah Joglo", "Rumah Tongkonan"], correct: "Rumah Gadang" },
        { question: "Apa nama festival budaya yang diadakan di Yogyakarta?", answers: ["Festival Sekaten", "Festival Solo Batik", "Festival Bali", "Festival Krakatau"], correct: "Festival Sekaten" },
        { question: "Apa nama tarian yang berasal dari Papua dan biasanya dilakukan dengan menari sambil membawa tombak?", answers: ["Tari Cendrawasih", "Tari Yospan", "Tari Kecak", "Tari Piring"], correct: "Tari Yospan" },
        { question: "Apa nama pakaian adat pria dari Jawa Tengah?", answers: ["Batik", "Kebaya", "Beskap", "Baju Kurung"], correct: "Beskap" },
        { question: "Apa nama alat musik tradisional dari Bali yang dimainkan dengan cara dipukul?", answers: ["Gamelan", "Angklung", "Gong", "Kolintang"], correct: "Gamelan" },
        { question: "Apa nama upacara adat yang diadakan di Nusa Tenggara Timur untuk merayakan panen padi?", answers: ["Kebo-Keboan", "Ritual Nyepi", "Upacara Pa'go", "Pesta Rakyat"], correct: "Pesta Rakyat" },
        { question: "Apa nama tarian tradisional dari Sulawesi Selatan yang melibatkan gerakan kaki?", answers: ["Tari Ma'gong", "Tari Paduppa", "Tari Cendrawasih", "Tari Kecak"], correct: "Tari Paduppa" },
        { question: "Apa nama rumah adat suku Batak yang memiliki bentuk unik?", answers: ["Rumah Bolon", "Rumah Gadang", "Rumah Betang", "Rumah Tongkonan"], correct: "Rumah Bolon" },
        { question: "Apa nama festival tahunan yang diadakan di Bali untuk merayakan Tahun Baru Hindu?", answers: ["Hari Raya Nyepi", "Festival Kecak", "Upacara Melasti", "Pesta Panen"], correct: "Hari Raya Nyepi" },
        { question: "Apa nama pakaian adat dari Kalimantan Selatan?", answers: ["Baju Kurung", "Baju Adat Banjar", "Batik", "Kebaya"], correct: "Baju Adat Banjar" },
        { question: "Apa nama alat musik tradisional yang terbuat dari bambu dan dimainkan dengan cara dipukul?", answers: ["Angklung", "Kolintang", "Gong", "Gamelan"], correct: "Angklung" },
        { question: "Apa nama tarian dari Bali yang sering dipertunjukkan di pura?", answers: ["Tari Legong", "Tari Jaipong", "Tari Piring", "Tari Saman"], correct: "Tari Legong" },
        { question: "Apa nama upacara adat yang dilakukan untuk memohon keselamatan di daerah Madura?", answers: ["Ritual Kebo-Keboan", "Pesta Laut", "Ritual Seren Taun", "Upacara Nyadran"], correct: "Ritual Kebo-Keboan" },
        { question: "Apa nama festival tahunan yang diadakan di kota Padang Panjang untuk memperingati Hari Kebangkitan Nasional?", answers: ["Festival Padang Panjang", "Festival Budaya Minangkabau", "Festival Solo Batik", "Festival Tanjung Karang"], correct: "Festival Budaya Minangkabau" },
        { question: "Apa nama pakaian adat yang dikenakan oleh wanita suku Sasak di Lombok?", answers: ["Baju Kurung", "Kebaya Sasak", "Kebaya Jawa", "Baju Adat Sasak"], correct: "Baju Adat Sasak" },
        { question: "Apa nama rumah adat dari suku Jawa Barat?", answers: ["Rumah Betang", "Rumah Joglo", "Rumah Gadang", "Rumah Tongkonan"], correct: "Rumah Joglo" },
        { question: "Apa nama alat musik tradisional yang dimainkan dengan cara digoyang dari suku Betawi?", answers: ["Tifa", "Keroncong", "Gong", "Tanjidor"], correct: "Tanjidor" },
        { question: "Apa nama tarian yang berasal dari suku Dayak Kalimantan?", answers: ["Tari Piring", "Tari Kecak", "Tari Topeng", "Tari Dayak"], correct: "Tari Dayak" },
        { question: "Apa nama festival budaya yang diadakan di Bali dan melibatkan upacara ogoh-ogoh?", answers: ["Hari Raya Nyepi", "Upacara Melasti", "Festival Kecak", "Pesta Panen"], correct: "Hari Raya Nyepi" },
        { question: "Apa nama pakaian adat wanita suku Toraja?", answers: ["Baju Kurung", "Baju Adat Toraja", "Baju Pengantin", "Kebaya"], correct: "Baju Adat Toraja" },
        { question: "Apa nama festival yang diadakan di Flores untuk merayakan panen padi?", answers: ["Festival Komodo", "Festival Kelimutu", "Pesta Rakyat", "Festival Panen"], correct: "Pesta Rakyat" },
        { question: "Apa nama alat musik yang terbuat dari bambu dan dimainkan dengan cara dipukul dari suku Minangkabau?", answers: ["Gamelan", "Kolintang", "Angklung", "Gong"], correct: "Kolintang" },
        { question: "Apa nama tarian tradisional dari suku Bali yang terkenal dengan gerakan cepat dan anggun?", answers: ["Tari Legong", "Tari Kecak", "Tari Saman", "Tari Piring"], correct: "Tari Legong" },
        { question: "Apa nama rumah adat suku Bugis yang terkenal dengan atapnya yang melengkung?", answers: ["Rumah Betang", "Rumah Gadang", "Rumah Joglo", "Rumah Tongkonan"], correct: "Rumah Tongkonan" },
        { question: "Apa nama upacara adat yang dilakukan oleh suku Toraja untuk merayakan kematian?", answers: ["Ngaben", "Ritual Kebo-Keboan", "Pesta Laut", "Ritual Pa'go"], correct: "Ngaben" },
        { question: "Apa nama tarian tradisional yang dilakukan oleh suku Sasak di Lombok dengan gerakan yang dinamis?", answers: ["Tari Piring", "Tari Saman", "Tari Adat Sasak", "Tari Kecak"], correct: "Tari Adat Sasak" },
        { question: "Apa nama alat musik tradisional dari suku Dayak yang terbuat dari kayu dan dimainkan dengan cara dipukul?", answers: ["Gong", "Tifa", "Kecapi", "Angklung"], correct: "Tifa" },
        { question: "Apa nama upacara adat untuk merayakan panen yang dilakukan oleh suku Bali?", answers: ["Upacara Melasti", "Ritual Ngaben", "Pesta Panen", "Upacara Omed-Omedan"], correct: "Pesta Panen" },
        { question: "Apa nama festival tahunan di Yogyakarta yang memperingati hari kelahiran Nabi Muhammad?", answers: ["Festival Sekaten", "Festival Solo Batik", "Festival Panen", "Festival Krakatau"], correct: "Festival Sekaten" },
        { question: "Apa nama rumah adat dari suku Batak yang memiliki bentuk atap yang mirip dengan perahu?", answers: ["Rumah Gadang", "Rumah Bolon", "Rumah Betang", "Rumah Joglo"], correct: "Rumah Bolon" },
        { question: "Apa nama tarian yang dilakukan dengan gerakan kaki dan berasal dari suku Minangkabau?", answers: ["Tari Jaipong", "Tari Kecak", "Tari Piring", "Tari Saman"], correct: "Tari Piring" }
    ],
    physics: [
        { question: "Apa rumus Hukum Newton kedua?", answers: ["F = ma", "E = mc^2", "a = F/m", "P = mv"], correct: "F = ma" },
        { question: "Apa satuan dari gaya dalam sistem internasional?", answers: ["Newton", "Joule", "Watt", "Pascal"], correct: "Newton" },
        { question: "Apa nama hukum yang menyatakan bahwa setiap aksi memiliki reaksi yang sama dan berlawanan?", answers: ["Hukum Newton I", "Hukum Newton II", "Hukum Newton III", "Hukum Ohm"], correct: "Hukum Newton III" },
        { question: "Berapa kecepatan cahaya dalam ruang hampa?", answers: ["300,000 km/s", "150,000 km/s", "100,000 km/s", "200,000 km/s"], correct: "300,000 km/s" },
        { question: "Apa nama gaya yang menyebabkan benda jatuh ke Bumi?", answers: ["Gaya Normal", "Gaya Gravitasi", "Gaya Gesek", "Gaya Elektromagnet"], correct: "Gaya Gravitasi" },
        { question: "Apa hukum yang menyatakan bahwa tekanan gas sebanding dengan suhu jika volume konstan?", answers: ["Hukum Boyle", "Hukum Charles", "Hukum Gay-Lussac", "Hukum Avogadro"], correct: "Hukum Gay-Lussac" },
        { question: "Apa nama proses perubahan zat dari cair ke gas?", answers: ["Menyublim", "Mencair", "Membeku", "Penguapan"], correct: "Penguapan" },
        { question: "Apa nama alat yang digunakan untuk mengukur tekanan?", answers: ["Termometer", "Barometer", "Ampermeter", "Voltmeter"], correct: "Barometer" },
        { question: "Apa nama hukum yang menyatakan bahwa energi tidak dapat diciptakan atau dimusnahkan, hanya berubah bentuk?", answers: ["Hukum Kekekalan Energi", "Hukum Newton", "Hukum Ohm", "Hukum Termodinamika"], correct: "Hukum Kekekalan Energi" },
        { question: "Apa nama partikel subatom yang memiliki muatan positif?", answers: ["Neutron", "Elektron", "Proton", "Meson"], correct: "Proton" },
        { question: "Apa rumus hukum Ohm?", answers: ["V = IR", "P = IV", "F = ma", "E = mc^2"], correct: "V = IR" },
        { question: "Apa satuan dari daya dalam sistem internasional?", answers: ["Watt", "Newton", "Joule", "Ampere"], correct: "Watt" },
        { question: "Apa nama hukum yang menyatakan bahwa gaya gesek sebanding dengan gaya normal?", answers: ["Hukum Newton I", "Hukum Newton II", "Hukum Newton III", "Hukum Gesek"], correct: "Hukum Gesek" },
        { question: "Apa nama gaya yang menyebabkan benda tetap dalam gerakan lurus?", answers: ["Gaya Normal", "Gaya Gravitasi", "Gaya Gesek", "Gaya Inersia"], correct: "Gaya Inersia" },
        { question: "Berapa besar percepatan gravitasi Bumi?", answers: ["9.8 m/s^2", "10 m/s^2", "8.9 m/s^2", "9.0 m/s^2"], correct: "9.8 m/s^2" },
        { question: "Apa nama proses perubahan zat dari gas ke cair?", answers: ["Menyublim", "Mencair", "Kondensasi", "Penguapan"], correct: "Kondensasi" },
        { question: "Apa nama hukum yang menyatakan bahwa suhu mutlak gas sebanding dengan volume jika tekanan konstan?", answers: ["Hukum Boyle", "Hukum Charles", "Hukum Gay-Lussac", "Hukum Avogadro"], correct: "Hukum Charles" },
        { question: "Apa nama alat yang digunakan untuk mengukur suhu?", answers: ["Termometer", "Barometer", "Ampermeter", "Voltmeter"], correct: "Termometer" },
        { question: "Apa nama partikel subatom yang tidak memiliki muatan?", answers: ["Neutron", "Elektron", "Proton", "Meson"], correct: "Neutron" },
        { question: "Apa nama gaya yang bekerja pada benda yang bergerak dalam lintasan melingkar?", answers: ["Gaya Sentral", "Gaya Gesek", "Gaya Gravitasi", "Gaya Normal"], correct: "Gaya Sentral" },
        { question: "Apa hukum yang menyatakan bahwa tekanan pada gas ideal berbanding terbalik dengan volumenya jika suhu tetap konstan?", answers: ["Hukum Boyle", "Hukum Charles", "Hukum Gay-Lussac", "Hukum Avogadro"], correct: "Hukum Boyle" },
        { question: "Apa nama proses perubahan zat dari padat ke gas?", answers: ["Sublimasi", "Penguapan", "Mencair", "Kondensasi"], correct: "Sublimasi" },
        { question: "Apa nama energi yang dimiliki oleh benda karena gerakannya?", answers: ["Energi Kinetik", "Energi Potensial", "Energi Kimia", "Energi Termal"], correct: "Energi Kinetik" },
        { question: "Apa nama hukum yang menyatakan bahwa setiap gaya memiliki reaksi yang sama dan berlawanan?", answers: ["Hukum Newton I", "Hukum Newton II", "Hukum Newton III", "Hukum Ohm"], correct: "Hukum Newton III" },
        { question: "Apa satuan dari energi dalam sistem internasional?", answers: ["Joule", "Newton", "Watt", "Ampere"], correct: "Joule" },
        { question: "Apa nama gaya yang mencegah dua permukaan saling meluncur satu sama lain?", answers: ["Gaya Gesek", "Gaya Normal", "Gaya Gravitasi", "Gaya Sentral"], correct: "Gaya Gesek" },
        { question: "Apa yang dimaksud dengan usaha dalam fisika?", answers: ["Energi yang dikeluarkan untuk memindahkan benda", "Gaya yang diterapkan pada benda", "Perubahan kecepatan benda", "Hasil perkalian gaya dan jarak"], correct: "Energi yang dikeluarkan untuk memindahkan benda" },
        { question: "Apa rumus usaha dalam fisika?", answers: ["W = F x d", "W = F / d", "W = m x a", "W = P x t"], correct: "W = F x d" },
        { question: "Satuan usaha dalam sistem internasional adalah?", answers: ["Joule", "Newton", "Watt", "Pascal"], correct: "Joule" },
        { question: "Jika gaya yang diterapkan pada benda adalah 10 N dan jarak perpindahannya 5 m, berapa usaha yang dilakukan?", answers: ["50 Joule", "10 Joule", "5 Joule", "15 Joule"], correct: "50 Joule" },
        { question: "Apa yang mempengaruhi besar usaha yang dilakukan pada benda?", answers: ["Besar gaya dan jarak perpindahan", "Besar gaya dan kecepatan", "Jarak perpindahan dan massa benda", "Kecepatan dan waktu"], correct: "Besar gaya dan jarak perpindahan" },
        { question: "Apa yang dimaksud dengan daya dalam fisika?", answers: ["Usaha per satuan waktu", "Energi per satuan waktu", "Gaya per satuan jarak", "Perubahan energi per satuan waktu"], correct: "Usaha per satuan waktu" },
        { question: "Apa rumus daya dalam fisika?", answers: ["P = W / t", "P = W x t", "P = F / d", "P = F x d"], correct: "P = W / t" },
        { question: "Satuan daya dalam sistem internasional adalah?", answers: ["Watt", "Joule", "Newton", "Pascal"], correct: "Watt" },
        { question: "Jika usaha yang dilakukan adalah 100 Joule dalam waktu 10 detik, berapa daya yang dihasilkan?", answers: ["10 Watt", "100 Watt", "10 Joule", "1 Watt"], correct: "10 Watt" },
        { question: "Apa yang dimaksud dengan energi kinetik?", answers: ["Energi yang dimiliki oleh benda karena geraknya", "Energi yang dimiliki oleh benda karena posisinya", "Energi yang disimpan dalam benda", "Energi yang ditransfer dalam bentuk panas"], correct: "Energi yang dimiliki oleh benda karena geraknya" },
        { question: "Apa rumus energi kinetik?", answers: ["Ek = 1/2 mv^2", "Ek = mgh", "Ek = F x d", "Ek = P x t"], correct: "Ek = 1/2 mv^2" },
        { question: "Apa yang dimaksud dengan energi potensial?", answers: ["Energi yang dimiliki oleh benda karena posisinya", "Energi yang dimiliki oleh benda karena geraknya", "Energi yang disimpan dalam benda", "Energi yang ditransfer dalam bentuk panas"], correct: "Energi yang dimiliki oleh benda karena posisinya" },
        { question: "Apa rumus energi potensial gravitasi?", answers: ["Ep = mgh", "Ep = 1/2 mv^2", "Ep = F x d", "Ep = P x t"], correct: "Ep = mgh" },
        { question: "Apa yang dimaksud dengan hukum kekekalan energi?", answers: ["Energi tidak dapat diciptakan atau dimusnahkan, hanya berubah bentuk", "Energi total selalu sama dalam sistem tertutup", "Energi kinetik dan potensial selalu seimbang", "Energi tidak dapat dikonversi"], correct: "Energi tidak dapat diciptakan atau dimusnahkan, hanya berubah bentuk" },
        { question: "Apa yang terjadi jika energi kinetik bertambah?", answers: ["Energi potensial berkurang", "Usaha bertambah", "Daya bertambah", "Energi total berkurang"], correct: "Usaha bertambah" },
        { question: "Apa yang dimaksud dengan mesin sederhana?", answers: ["Alat yang memudahkan pekerjaan dengan mengubah arah atau besarnya gaya", "Alat yang mengukur usaha", "Alat yang meningkatkan energi kinetik", "Alat yang menyimpan energi"], correct: "Alat yang memudahkan pekerjaan dengan mengubah arah atau besarnya gaya" },
        { question: "Apa yang dimaksud dengan vektor kecepatan?", answers: ["Besaran yang hanya memiliki arah", "Besaran yang hanya memiliki besar", "Besaran yang memiliki besar dan arah", "Besaran yang mengukur jarak total"], correct: "Besaran yang memiliki besar dan arah" },
        { question: "Apa yang dimaksud dengan gerak lurus beraturan?", answers: ["Gerak dengan percepatan konstan", "Gerak dengan kecepatan konstan", "Gerak dengan percepatan berubah-ubah", "Gerak dengan arah berubah-ubah"], correct: "Gerak dengan kecepatan konstan" },
        { question: "Apa yang terjadi pada energi kinetik ketika massa objek berlipat ganda dan kecepatannya tetap?", answers: ["Energi kinetik tetap", "Energi kinetik berkurang", "Energi kinetik berlipat ganda", "Energi kinetik meningkat empat kali lipat"], correct: "Energi kinetik berlipat ganda" },
        { question: "Hukum Hooke menjelaskan hubungan antara?", answers: ["Gaya dan percepatan", "Gaya dan perpindahan", "Gaya dan tegangan", "Gaya dan regangan"], correct: "Gaya dan perpindahan" },
        { question: "Apa yang dimaksud dengan titik berat sebuah benda?", answers: ["Titik di mana seluruh massa benda terkonsentrasi", "Titik di mana gaya gravitasi bekerja", "Titik di mana benda berada dalam keadaan seimbang", "Titik di mana benda mulai bergerak"], correct: "Titik di mana seluruh massa benda terkonsentrasi" },
        { question: "Apa yang dimaksud dengan momentum dalam fisika?", answers: ["Produk massa dan percepatan", "Produk massa dan kecepatan", "Produk gaya dan waktu", "Produk energi dan waktu"], correct: "Produk massa dan kecepatan" },
        { question: "Dalam hukum gravitasi Newton, gaya gravitasi antara dua benda sebanding dengan?", answers: ["Jarak antara dua benda", "Massa benda pertama", "Massa kedua benda", "Kuadrat jarak antara dua benda"], correct: "Massa kedua benda" },
        { question: "Apa yang terjadi jika kecepatan awal dan percepatan sebuah benda diketahui?", answers: ["Posisi akhir dapat dihitung", "Kecepatan akhir dapat dihitung", "Jarak tempuh dapat dihitung", "Semua benar"], correct: "Semua benar" },
        { question: "Apa yang dimaksud dengan gaya gesekan statis?", answers: ["Gaya yang diperlukan untuk memulai gerak benda", "Gaya yang diperlukan untuk menghentikan benda yang bergerak", "Gaya yang bekerja pada benda saat bergerak", "Gaya yang bekerja pada benda saat diam"], correct: "Gaya yang diperlukan untuk memulai gerak benda" },
        { question: "Apa yang dimaksud dengan inersia?", answers: ["Kemampuan benda untuk mengubah keadaan geraknya", "Kecenderungan benda untuk mempertahankan keadaan geraknya", "Gaya yang diperlukan untuk menggerakkan benda", "Gaya yang diperlukan untuk menghentikan benda yang bergerak"], correct: "Kecenderungan benda untuk mempertahankan keadaan geraknya" },
        { question: "Apa yang terjadi pada energi potensial ketika benda diangkat ke ketinggian lebih tinggi?", answers: ["Energi potensial berkurang", "Energi potensial tetap", "Energi potensial meningkat", "Energi potensial berubah menjadi energi kinetik"], correct: "Energi potensial meningkat" },
        { question: "Apa yang dimaksud dengan hukum kekekalan momentum?", answers: ["Momentum total dalam sistem tertutup tetap", "Energi total dalam sistem tertutup tetap", "Massa total dalam sistem tertutup tetap", "Kecepatan total dalam sistem tertutup tetap"], correct: "Momentum total dalam sistem tertutup tetap" },
        { question: "Apa yang dimaksud dengan titik fokus pada cermin cekung?", answers: ["Titik di mana sinar-sinar datang berpotongan", "Titik di mana sinar-sinar pantul berpotongan", "Titik di mana sinar-sinar melewati cermin", "Titik di mana sinar-sinar datang dan pantul berpotongan"], correct: "Titik di mana sinar-sinar pantul berpotongan" },
        { question: "Apa yang terjadi pada panjang gelombang ketika frekuensi gelombang dinaikkan?", answers: ["Panjang gelombang tetap", "Panjang gelombang berkurang", "Panjang gelombang meningkat", "Panjang gelombang berubah secara acak"], correct: "Panjang gelombang berkurang" },
        { question: "Apa yang dimaksud dengan hukum Archimedes?", answers: ["Gaya apung pada benda yang dicelupkan dalam cairan sama dengan berat cairan yang dipindahkan", "Gaya apung pada benda yang dicelupkan dalam cairan sama dengan berat benda itu", "Gaya apung pada benda yang dicelupkan dalam cairan berbanding lurus dengan volume benda", "Gaya apung pada benda yang dicelupkan dalam cairan berbanding terbalik dengan massa benda"], correct: "Gaya apung pada benda yang dicelupkan dalam cairan sama dengan berat cairan yang dipindahkan" }
    ],
    worldFlags: [
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/225px-Flag_of_India.svg.png", answers: ["India", "Pakistan", "Bangladesh", "Sri Lanka"], correct: "India" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/225px-Flag_of_France.svg.png", answers: ["France", "Germany", "Italy", "Spain"], correct: "France" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/270px-Flag_of_the_United_States.svg.png", answers: ["United States", "Canada", "Mexico", "Brazil"], correct: "United States" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/225px-Flag_of_Italy.svg.png", answers: ["Italy", "Spain", "France", "Portugal"], correct: "Italy" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/225px-Flag_of_Indonesia.svg.png", answers: ["Indonesia", "Malaysia", "Singapore", "Thailand"], correct: "Indonesia" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/225px-Flag_of_Japan.svg.png", answers: ["Japan", "South Korea", "China", "Vietnam"], correct: "Japan" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/225px-Flag_of_South_Korea.svg.png", answers: ["South Korea", "North Korea", "China", "Japan"], correct: "South Korea" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/214px-Flag_of_Brazil.svg.png", answers: ["Brazil", "Argentina", "Chile", "Peru"], correct: "Brazil" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/240px-Flag_of_Argentina.svg.png", answers: ["Argentina", "Uruguay", "Paraguay", "Chile"], correct: "Argentina" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/270px-Flag_of_Canada.svg.png", answers: ["Canada", "United States", "Mexico", "Australia"], correct: "Canada" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/270px-Flag_of_Australia_%28converted%29.svg.png", answers: ["Australia", "New Zealand", "United Kingdom", "South Africa"], correct: "Australia" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/250px-Flag_of_the_United_Kingdom_%283-5%29.svg.png", answers: ["United Kingdom", "Australia", "New Zealand", "Canada"], correct: "United Kingdom" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/270px-Flag_of_New_Zealand.svg.png", answers: ["New Zealand", "Australia", "United Kingdom", "South Africa"], correct: "New Zealand" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/225px-Flag_of_Russia.svg.png", answers: ["Russia", "Ukraine", "Belarus", "Poland"], correct: "Russia" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/250px-Flag_of_Germany.svg.png", answers: ["Germany", "Austria", "Switzerland", "Netherlands"], correct: "Germany" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/225px-Flag_of_Spain.svg.png", answers: ["Spain", "Portugal", "France", "Italy"], correct: "Spain" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/225px-Flag_of_Portugal.svg.png", answers: ["Portugal", "Spain", "France", "Italy"], correct: "Portugal" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/263px-Flag_of_Mexico.svg.png", answers: ["Mexico", "Spain", "Argentina", "Brazil"], correct: "Mexico" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/225px-Flag_of_the_People%27s_Republic_of_China.svg.png", answers: ["China", "Japan", "South Korea", "Vietnam"], correct: "China" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/225px-Flag_of_South_Africa.svg.png", answers: ["South Africa", "Nigeria", "Kenya", "Ghana"], correct: "South Africa" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/225px-Flag_of_Kenya.svg.png", answers: ["Kenya", "South Africa", "Nigeria", "Ghana"], correct: "Kenya" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/225px-Flag_of_Ghana.svg.png", answers: ["Ghana", "Nigeria", "South Africa", "Kenya"], correct: "Ghana" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/270px-Flag_of_Nigeria.svg.png", answers: ["Nigeria", "Ghana", "South Africa", "Kenya"], correct: "Nigeria" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/246px-Flag_of_Finland.svg.png", answers: ["Finland", "Sweden", "Norway", "Denmark"], correct: "Finland" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/150px-Flag_of_Switzerland.svg.png", answers: ["Switzerland", "Finland", "Norway", "Denmark"], correct: "switzerland" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/207px-Flag_of_Norway.svg.png", answers: ["Norway", "Sweden", "Finland", "Denmark"], correct: "Norway" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/199px-Flag_of_Denmark.svg.png", answers: ["Denmark", "Sweden", "Norway", "Finland"], correct: "Denmark" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/209px-Flag_of_Iceland.svg.png", answers: ["Iceland", "Norway", "Sweden", "Finland"], correct: "Iceland" },

        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tuvalu.svg/270px-Flag_of_Tuvalu.svg.png", answers: ["Tuvalu", "Kiribati", "Nauru", "Palau"], correct: "Tuvalu" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/225px-Flag_of_Bhutan.svg.png", answers: ["Bhutan", "Nepal", "Mongolia", "Laos"], correct: "Bhutan" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_Djibouti.svg/260px-Flag_of_Djibouti.svg.png", answers: ["Djibouti", "Eritrea", "Somalia", "Sudan"], correct: "Djibouti" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/225px-Flag_of_Suriname.svg.png", answers: ["Suriname", "Guyana", "Paraguay", "Venezuela"], correct: "Suriname" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Vanuatu.svg/250px-Flag_of_Vanuatu.svg.png", answers: ["Vanuatu", "Fiji", "Tonga", "Samoa"], correct: "Vanuatu" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Flag_of_the_Comoros.svg/250px-Flag_of_the_Comoros.svg.png", answers: ["Comoros", "Seychelles", "Madagascar", "Mauritius"], correct: "Comoros" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kiribati.svg/270px-Flag_of_Kiribati.svg.png", answers: ["Kiribati", "Tuvalu", "Nauru", "Marshall Islands"], correct: "Kiribati" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Guinea-Bissau.svg/270px-Flag_of_Guinea-Bissau.svg.png", answers: ["Equatorial Guinea", "Gabon", "Congo", "Angola"], correct: "Equatorial Guinea" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_Malawi.svg/225px-Flag_of_Malawi.svg.png", answers: ["Malawi", "Zambia", "Mozambique", "Zimbabwe"], correct: "Malawi" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg/270px-Flag_of_the_Federated_States_of_Micronesia.svg.png", answers: ["Micronesia", "Marshall Islands", "Palau", "Nauru"], correct: "Micronesia" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Grenada.svg/250px-Flag_of_Grenada.svg.png", answers: ["Grenada", "Barbados", "Saint Lucia", "Saint Vincent and the Grenadines"], correct: "Grenada" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Flag_of_Lesotho.svg/225px-Flag_of_Lesotho.svg.png", answers: ["Lesotho", "Eswatini", "Botswana", "Namibia"], correct: "Lesotho" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/270px-Flag_of_East_Timor.svg.png", answers: ["Timor-Leste", "Brunei", "Papua New Guinea", "Malaysia"], correct: "Timor-Leste" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Flag_of_Togo.svg/243px-Flag_of_Togo.svg.png", answers: ["Togo", "Benin", "Burkina Faso", "Ghana"], correct: "Togo" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/270px-Flag_of_Brunei.svg.png", answers: ["Brunei", "Malaysia", "Singapore", "Indonesia"], correct: "Brunei" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_Eritrea.svg/270px-Flag_of_Eritrea.svg.png", answers: ["Eritrea", "Djibouti", "Ethiopia", "Sudan"], correct: "Eritrea" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_Solomon_Islands.svg/270px-Flag_of_the_Solomon_Islands.svg.png", answers: ["Solomon Islands", "Vanuatu", "Papua New Guinea", "Fiji"], correct: "Solomon Islands" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/250px-Flag_of_Belize.svg.png", answers: ["Belize", "Honduras", "Guatemala", "El Salvador"], correct: "Belize" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/225px-Flag_of_Suriname.svg.png", answers: ["Suriname", "Guyana", "Paraguay", "Venezuela"], correct: "Suriname" },
            
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/270px-Flag_of_North_Korea.svg.png", answers: ["North Korea", "South Korea", "China", "Japan"], correct: "North Korea" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/225px-Flag_of_Laos.svg.png", answers: ["Laos", "Vietnam", "Thailand", "Cambodia"], correct: "Laos" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/270px-Flag_of_Malaysia.svg.png", answers: ["Malaysia", "Indonesia", "Brunei", "Singapore"], correct: "Malaysia" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/270px-Flag_of_Mongolia.svg.png", answers: ["Mongolia", "China", "Japan", "North Korea"], correct: "Mongolia" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/225px-Flag_of_Vietnam.svg.png", answers: ["Vietnam", "Laos", "Cambodia", "Thailand"], correct: "Vietnam" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/225px-Flag_of_Uruguay.svg.png", answers: ["Uruguay", "Argentina", "Paraguay", "Chile"], correct: "Uruguay" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/225px-Flag_of_Venezuela.svg.png", answers: ["Venezuela", "Colombia", "Ecuador", "Peru"], correct: "Venezuela" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/225px-Flag_of_Colombia.svg.png", answers: ["Colombia", "Venezuela", "Ecuador", "Peru"], correct: "Colombia" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/225px-Flag_of_Ecuador.svg.png", answers: ["Ecuador", "Colombia", "Peru", "Bolivia"], correct: "Ecuador" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_Guyana.svg/250px-Flag_of_Guyana.svg.png", answers: ["Guyana", "Suriname", "Venezuela", "Brazil"], correct: "Guyana" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/270px-Flag_of_Paraguay.svg.png", answers: ["Paraguay", "Argentina", "Uruguay", "Bolivia"], correct: "Paraguay" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/240px-Flag_of_Argentina.svg.png", answers: ["Argentina", "Uruguay", "Chile", "Paraguay"], correct: "Argentina" },
        { question: "Bendera negara mana ini?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Bolivia_%28state%29.svg/220px-Flag_of_Bolivia_%28state%29.svg.png", answers: ["Bolivia", "Peru", "Ecuador", "Venezuela"], correct: "Bolivia" },
    ]
};

let currentCategory = "";
let currentQuestionIndex = 0;
let score = 0;
let timer;
let userAnswered = false;
let correctAnswers = 0; // Variabel untuk menyimpan jumlah jawaban benar
let incorrectAnswers = 0; // Variabel untuk menyimpan jumlah jawaban salah

function startGame(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;
    userAnswered = false;
    correctAnswers = 0;
    incorrectAnswers = 0;

    shuffleArray(questions[currentCategory]);

    // Batasi hanya 10 soal
    questions[currentCategory] = questions[currentCategory].slice(0, 10);

    document.getElementById('category-selection').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    startTimer();
    displayQuestion();
}


function shuffleArray(array) {
    const seed = Date.now(); // Gunakan waktu sekarang sebagai seed
    let currentIndex = array.length, temporaryValue, randomIndex;
    
    while (0 !== currentIndex) {
        randomIndex = Math.floor(random(seed + currentIndex) * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function random(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function displayQuestion() {
    const question = questions[currentCategory][currentQuestionIndex];
    document.getElementById('question').innerText = question.question;

    // Menambahkan tampilan gambar bendera jika ada
    if (question.img) {
        const imgElement = document.createElement('img');
        imgElement.src = question.img;
        imgElement.alt = "Flag Image";
        imgElement.style.width = "200px"; // Sesuaikan ukuran gambar
        imgElement.classList.add("my-3");
        document.getElementById('question').appendChild(imgElement);
    }
    
    // Update soal keterangan
    document.getElementById('question-number').innerText = `Soal ${currentQuestionIndex + 1} dari ${questions[currentCategory].length}`;
    
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = "";
    
    // Acak urutan jawaban
    const shuffledAnswers = shuffleArray([...question.answers]);
    
    shuffledAnswers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-outline-primary');
        button.innerText = `${String.fromCharCode(65 + index)}. ${answer}`;
        button.onclick = () => handleAnswer(answer, button);
        answersDiv.appendChild(button);
    });

    // Add explanation about colors
    const explanationDiv = document.getElementById('explanation');
    explanationDiv.innerHTML = `
        <p><strong>Keterangan :</strong></p>
        <ul>
            <li class="text-success">Hijau: Jawaban Benar</li>
            <li class="text-danger">Merah: Jawaban Salah</li>
        </ul>
    `;
}

function handleAnswer(answer, button) {
    const question = questions[currentCategory][currentQuestionIndex];
    const buttons = document.querySelectorAll('#answers button');

    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);

    // Check if the selected answer is correct
    if (answer === question.correct) {
        score += 50;
        correctAnswers++;
        button.style.backgroundColor = '#28a745'; // Hijau untuk jawaban benar
        button.style.color = 'white'; // Warna teks putih
    } else {
        incorrectAnswers++;

        // Show correct answer in green and selected answer in red
        buttons.forEach(btn => {
            if (btn.innerText.includes(question.correct)) {
                btn.style.backgroundColor = '#28a745'; // Hijau untuk jawaban benar
                btn.style.color = 'white'; // Warna teks putih
            } else if (btn === button) {
                btn.style.backgroundColor = '#dc3545'; // Merah untuk jawaban salah
                btn.style.color = 'white'; // Warna teks putih
            }
        });

        // Reduce remaining time by 3 seconds
        remainingTime -= 5;
        if (remainingTime < 0) remainingTime = 0; // Ensure time doesn't go negative

        // Update the timer display
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        document.getElementById('time').innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    userAnswered = true;

    // Allow a brief moment for the user to see the result
    setTimeout(() => {
        nextQuestion();
    }, 2000); // 2 seconds delay before moving to the next question
}



function nextQuestion() {
    if (!userAnswered) {
        alert("Silakan jawab pertanyaan sebelum melanjutkan.");
        return;
    }
    userAnswered = false;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentCategory].length) {
        displayQuestion();
    } else {
        endGame();
    }
}

function startTimer() {
    switch (currentCategory) {
        case 'general':
        case 'culture':
        case 'worldFlags':
            remainingTime = 90; // 1.5 minutes
            break;
        case 'physics':
            remainingTime = 120; // 2 minutes
            break;
        case 'math':
            remainingTime = 180; // 3 minutes
            break;
        default:
            remainingTime = 180; // Default to 3 minutes if category is unknown
    }

    timer = setInterval(() => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        document.getElementById('time').innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        remainingTime--;

        if (remainingTime < 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}


function endGame() {
    clearInterval(timer);
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('game-over').style.display = 'block';
    document.getElementById('score').innerText = score;
    
    // Calculate and display the maximum score
    const maxScore = 10 * 50; // 10 questions, 50 points each
    document.getElementById('max-score').innerText = maxScore;

    // Display statistics
    document.getElementById('correct-answers').innerText = `Jawaban Benar: ${correctAnswers}`;
    document.getElementById('incorrect-answers').innerText = `Jawaban Salah: ${incorrectAnswers}`;
}

function restartGame() {
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('category-selection').style.display = 'block';
}
