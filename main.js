var qoutes = [
  {
    words: "“Be the change that you wish to see in the world.”",
    writter: "― Oscar Wilde",
  },
  {
    words:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    writter: "― Marilyn Monroe",
  },
  {
    words:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    writter: "― Albert Einstein",
  },
  {
    words: "“So many books, so little time.”",
    writter: "― Frank Zappa",
  },
  {
    words: "“A room without books is like a body without a soul.”",
    writter: "― Marcus Tullius Cicero",
  },
  {
    words:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    writter: "― Bernard M. Baruch",
  },
  {
    words:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    writter: "― Dr. Seuss",
  },
  {
    words: "“You only live once, but if you do it right, once is enough.”",
    writter: "― Mae West",
  },
  {
    words:
      "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
    writter: "― Robert Frost",
  },
  {
    words: "“A friend is someone who knows all about you and still loves you.”",
    writter: "― Elbert Hubbard",
  },
  {
    words:
      "“To live is the rarest thing in the world. Most people exist, that is all.”",
    writter: "― Oscar Wilde",
  },
  {
    words: "“Without music, life would be a mistake.”",
    writter: "― Ralph Waldo Emerson",
  },
  {
    words:
      "“It is better to be hated for what you are than to be loved for what you are not.”",
    writter: "― Andre Gide, Autumn Leaves",
  },
];

function newQuote() {
  const random = Math.floor(Math.random() * qoutes.length);
  document.getElementById("words").innerHTML = qoutes[random].words;
  document.getElementById("writter").innerHTML = qoutes[random].writter;
}
