let quote = document.querySelector(".quote");
let person = document.getElementById("person");
let btnNewQuote = document.getElementById("newQuote");

//Lets create an array of Objects for the quotes

const quotes = [{
    quote: `"Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive."`,
    person: `Unknown`,
}, {
    quote: `"What we have once enjoyed we can never lose. All that we love deeply becomes a part of us."`,
    person: `Helen Keller`,
}, {
    quote: `"Loved you yesterday, love you still, always have, always will."`,
    person: `Elaine Davis`,
}, {
    quote: `"Love is always patient and kind. It is never jealous. Love is never boastful or conceited. It is never rude or selfish. It does not take offense and is not resentful. Love takes no pleasure in other people’s sins, but delights in the truth. It is always ready to excuse, to trust, to hope, and to endure whatever comes."`,
    person: `1 Corinthians 13:4-7`,
}, {
    quote: `"You, yourself, as much as anybody in the entire universe, deserve your love and affection."`,
    person: `Buddha`,
}, {
    quote: `"Love isn’t something you find. Love is something that finds you."`,
    person: `Loretta Young`,
}, {
    quote: `"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage."`,
    person: `Lao Tzu`,
}, {
    quote: `"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."`,
    person: `Marilyn Monroe`,
}, {
    quote: `"You know you're in love when you can't fall asleep because reality is finally better than your dreams."`,
    person: `Dr Seuss`,
}, {
    quote: `"A friend is someone who knows all about you and still loves you."`,
    person: `Elbert Hubbard`,
}, {
    quote: `"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."`,
    person: `Martin Luther King Jr`,
}, {
    quote: `"We accept the love we think we deserve."`,
    person: `Stephen Chbosky`,
}, {
    quote: `"It is better to be hated for what you are than to be loved for what you are not."`,
    person: `Andre Gide`,
}, {
    quote: `"As he read, I fell in love the way you fall asleep: slowly, and then all at once."`,
    person: `John Green`,
}, {
    quote: `"It is not a lack of love, but a lack of friendship that makes unhappy marriages."`,
    person: `Friedrich Nietzsche`,
}, {
    quote: `"Love all, trust a few, do wrong to none."`,
    person: `William Shakespeare`,
}, {
    quote: `"Have you ever been in love? Horrible isn't it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up."`,
    person: `Neil Gaiman`
}, ];

//select the document, add EventListener, function
function randomQuotes() {
    // console.log(quotes.length);
    // console.log("click");
    let randomQuote = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[randomQuote].quote
    person.innerText = quotes[randomQuote].person
}

btnNewQuote.addEventListener('click', randomQuotes);