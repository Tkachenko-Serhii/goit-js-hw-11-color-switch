const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  startBtn: document.querySelector("button[data-action='start']"),
  stopBtn: document.querySelector("button[data-action='stop']"),
};

refs.startBtn.addEventListener("click", () => {
  timer.startColorSet();
});
refs.stopBtn.addEventListener("click", () => {
  timer.stopColorSet();
});

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const timer = {
  intervalId: null,
  isActive: false,

  startColorSet() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    this.intervalId = setInterval(() => {
      const indexColor = randomIntegerFromInterval(0, colors.length - 1);
      document.body.style.backgroundColor = colors[indexColor];
    }, 1000);
  },

  stopColorSet() {
    this.isActive = false;
    clearInterval(this.intervalId);
  },
};
