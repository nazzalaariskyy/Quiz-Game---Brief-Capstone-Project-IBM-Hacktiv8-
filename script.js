let timerInterval;
let timeLeft = 10;
let score = 0;

document.getElementById("start-btn").onclick = () => {
  currentQuestion = 0;
  score = 0;
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";
  loadQuestion(currentQuestion);
};

const starContainer = document.querySelector('.star-container');

for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = `${Math.random() * 50}vh`;
  star.style.left = `${Math.random() * 100}vw`;
  star.style.animationDuration = `${1 + Math.random() * 2}s`;
  starContainer.appendChild(star);
}

const questions = [
  {
    text: "Apa itu bahasa pemrograman?",
    options: ["Bahasa yang digunakan manusia sehari-hari", "Bahasa untuk membuat makanan", "Bahasa untuk memberi instruksi ke komputer", "Bahasa dari alien"],
    answer: 2
  },
  {
    text: "JavaScript biasanya digunakan untuk?",
    options: ["Membersihkan virus", "Menghias halaman web agar interaktif", "Menggambar di kertas", "Melamar kerja"],
    answer: 1
  },
  {
    text: "Python itu nama?",
    options: ["Hewan", "Game", "Anomali", "Bahasa pemrograman"],
    answer: 3
  },
  {
    text: "HTML digunakan untuk membuat?",
    options: ["Batagor", "Rumah", "Halaman web", "Film"],
    answer: 2
  },
  {
    text: "Yang termasuk bahasa pemrograman adalah?",
    options: ["Jawa", "HTML", "Python", "Sunda"],
    answer: 2
  },
  {
    text: "Apa arti CSS dalam pengembangan web?",
    options: ["Computer Software System", "Creative Style Setting", "Cascading Style Sheets", "Coding System Script"],
    answer: 2
  },
  {
    text: "Di bahasa Python, simbol # digunakan untuk apa?",
    options: ["Membuat pepes balado", "Tools menjadi kaya", "Membuat variabel", "Menulis komentar"],
    answer: 3
  },
  {
    text: "Apa fungsi dari console.log() di JavaScript?",
    options: ["Membuatnya menerimaku apa adanya", "Melindungi kode dari bug", "Menampilkan pesan di konsol browser", "Membuat tampilan HTML"],
    answer: 2
  },
  {
    text: "Bahasa pemrograman apa yang biasa digunakan untuk membuat aplikasi Android?",
    options: ["SundaScript", "Kotlin", "MySQL", "CapCut"],
    answer: 1
  },
  {
    text: 'Apa output dari print("Hello, World!") di Python?',
    options: ["Helo, World!", "Hello, World", "Hello, World!", "hello, world!"],
    answer: 2
  }
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(questions);

let currentQuestion = 0;

const questionText = document.getElementById("question");
const answersDiv = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");

const optionsContainer = document.getElementById("answers");

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  loadQuestion(currentQuestion);
}

function loadQuestion(index) {
  const question = questions[index];
  questionText.innerText = question.text;

  const questionIndicator = document.getElementById("question-indicator");
  questionIndicator.textContent = `Soal ${index + 1} dari ${questions.length}`;

  answersDiv.innerHTML = "";

  question.options.forEach((option, idx) => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-secondary option-btn d-block mb-2";
    btn.innerText = option;
    btn.onclick = () => selectAnswer(btn, idx);
    optionsContainer.appendChild(btn);
  });

  nextBtn.disabled = true;

    // Reset timer
  clearInterval(timerInterval);     // stop timer sebelumnya
  timeLeft = 10;                    // set ulang jadi 10 detik
  timerEl.textContent = timeLeft + "s";

  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft + "s";
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      disableOptions();
      nextBtn.disabled = false;
    }
  }, 1000);
}

function selectAnswer(btn, idx) {
  clearInterval(timerInterval);
  const question = questions[currentQuestion];

  const allBtns = document.querySelectorAll(".option-btn");
  allBtns.forEach((b, i) => {
    b.disabled = true;
    b.classList.remove("btn-outline-secondary");

    if (i === question.answer) {
      b.classList.add("correct");
    } else if (i === idx) {
      b.classList.add("wrong");
    }
  });

  if (idx === question.answer) {
  score++;
}
  nextBtn.disabled = false;
}

const timerEl = document.getElementById("timer");

function disableOptions() {
  const allBtns = document.querySelectorAll(".option-btn");
  allBtns.forEach(b => b.disabled = true);
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion(currentQuestion);
  } else {
  // Quiz selesai
  questionText.innerText = `Quiz selesai! Skor kamu: ${score} dari ${questions.length}`;
  optionsContainer.innerHTML = "";
  timerEl.textContent = "";

showResult();

  nextBtn.innerText = "Kembali ke Awal";
  nextBtn.disabled = false;

  nextBtn.onclick = () => {
    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("start-screen").style.display = "block";

    // Reset tombol next
    nextBtn.innerText = "Next";
    nextBtn.onclick = () => {
      currentQuestion = 0;
      score = 0;
      document.getElementById("start-screen").style.display = "none";
      document.getElementById("quiz-screen").style.display = "block";
      loadQuestion(currentQuestion);
    };
  };
}};

function showResult() {
  const quizContainer = document.getElementById("quiz-screen");

  quizContainer.innerHTML = `
    <h3>Quiz selesai! Skor kamu: ${score} dari ${questions.length}</h3>
    <img id="result-image" src="" alt="" class="img-fluid mt-2 d-block mx-auto" style="max-height: 200px; display: none;">
    <div id="result-message" class="mt-3 text-center"></div>
    <div style="text-align: right">
      <button class="btn btn-primary mt-3" onclick="location.reload()">Kembali ke Awal</button>
    </div>
  `;

  const resultMessage = document.getElementById('result-message');
  const resultImage = document.getElementById('result-image');

  if (score >= 8) {
    resultMessage.innerHTML = "Hormat ege, ada sepuh nihh. Minggir pemula, sepuh mau lewat 🙇‍♀️💯";
    resultImage.src = "bootstrap-5.3.7-dist/nilai/bagus.jpg";
  } else if (score >= 5) {
    resultMessage.innerHTML = "Ingat kata user miya 'Late game gw buat lu kocar kacir'. Tetep semangat belajar lagi yach 😄👏";
    resultImage.src = "bootstrap-5.3.7-dist/nilai/medium.jpg";
  } else if (score >= 1) {
    resultMessage.innerHTML = "Mayan!! Yang penting ga 0 sih nilainya 😅";
    resultImage.src = "bootstrap-5.3.7-dist/nilai/jelek.jpg";
  } else {
    resultMessage.innerHTML = "Karepmu le";
    resultImage.src = "bootstrap-5.3.7-dist/nilai/0.jpg";
  }
  resultImage.style.display = 'block';
}


