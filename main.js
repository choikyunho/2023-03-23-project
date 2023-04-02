const QUOTES = "quotes";


function getQuotes() {
  const quotesMsg = document.querySelector(".quotesMsg");
  let savedQuotes = localStorage.getItem(QUOTES);

  if (!savedQuotes) {
      localStorage.setItem(
      QUOTES, JSON.stringify(["열심히 살지맙시다.", "열심히삽시다.","그래도 열심히 삽시다.",]));
      savedQuotes = localStorage.getItem(QUOTES);
  }

      let quotesArray = JSON.parse(savedQuotes);

      quotesMsg.innerText = quotesArray[Math.floor(Math.random() * quotesArray.length)];
}

getQuotes();
setInterval(getQuotes, 10000); //명언이 10초마다 자동으로 바뀌는 코드


function onClickAdd(){
    const newQuotes = document.querySelector(".newQuotes");
    newQuotes.style.display = "inline-block";   
}

function onClickRegist() {
    const quotesMsg = document.querySelector(".quotesMsg");
    const newQuotes = document.querySelector(".newQuotes");
    const newQuotesInput = document.querySelector(".newQuotesInput");
  
    if (!newQuotesInput.value) {
      return;
    }
    let savedQuotes = localStorage.getItem(QUOTES);

    let quotesArray = JSON.parse(savedQuotes);
    quotesArray.push(newQuotesInput.value);

    localStorage.setItem(QUOTES,JSON.stringify(quotesArray));

    // quotesMsg.innerText = newQuotesInput.value;
    quotesMsg.innerHTML = `<span>${newQuotesInput.value}</span>`;

    newQuotes.style.display="none";
    newQuotesInput.value=""
  
  }

