const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Syny"
    },
    {
      text:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Bruce"
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Mac"
    },
    {
      text: "In the middle of every difficulty lies opportunity.",
      author: " Nick"
    },
    {
      text:
        "If you haven't found something strange during the day, it hasn't been much of a day.",
      author: "Sylivia"
    },
    {
      text:
        "The best years of your life are the ones in which you decide your problems are your own.You do not blame them on your mother, the ecology, or the president. You realize that you control your own destiny.",
      author: "Josiane"
    },
    {
      text:
        "The opposite of talking isn't listening. The opposite of talking is waiting.",
      author: "Gift"
    }
  ];
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  var colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964"
  ];
  const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
  function displayQuote() {
    const quoteElement = document.getElementById("quote");
    const newQuote = getRandomQuote();
    quoteElement.innerHTML = `"${newQuote.text}" - ${newQuote.author}`;
  }
  const newQuoteButton = document.getElementById("new-quote");
  newQuoteButton.addEventListener("click", displayQuote);
  
  displayQuote();
  