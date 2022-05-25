const quoteText = document.querySelector("#text"),
authorName = document.querySelector("#author"),
quoteBtn = document.querySelector("button"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");

const randomQuote = () => {
    fetch("https://api.quotable.io/random").then(response => response.json()).then(result =>{
      console.log(result);
      quoteText.innerText = result.content;
      authorName.innerText = result.author;  
    });
}

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", () => {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
  window.open(tweetUrl, "_blank");
});

quoteBtn.addEventListener("click", randomQuote);