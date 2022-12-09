AOS.init();
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQ = document.getElementById("newQ");
const tweetMe = document.getElementById("tweetMe");
let realData = "";
let quotesData = "";
let sendAuthor="";

const tweetNow = () => {

    let tweetPost = `https://twitter.com/intent/tweet/?text=${quotesData.text} ${sendAuthor}`;
    window.open(tweetPost);
};

const getNewQuotes = () => {
    let rnum = Math.floor(
        Math.random() * 10 * (Math.random() * 10) * (Math.random() * 10)
    );
    quotesData = realData[rnum];
    quotesData.author == null
        ? (sendAuthor = `~Author: Unknown`)
        : (sendAuthor = `~By: ${quotesData.author}`);
    quotes.innerText = `${quotesData.text}`;
    author.innerText = `${sendAuthor}`;
};

const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();

        getNewQuotes();
    } catch (error) { }
};
tweetMe.addEventListener("click", tweetNow);
newQ.addEventListener("click", getNewQuotes);
getQuotes();