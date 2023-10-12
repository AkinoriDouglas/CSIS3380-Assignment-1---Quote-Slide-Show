// Student Name: Akinori Ikeda
// Student Number: 300351701

let quotes = [];

// To create objects with quote, source, citation, and year properties
var quote1 = {
    quote: "If you can dream it, you can do it.", 
    source: "Walt Disney", 
    citation: "Book", 
    year: "1980"
};
var quote2 = {
    quote: "We may encounter many defeats but we must not be defeated.", 
    source: "Maya Angelou", 
    citation: "Interview", 
    year: "1954"
};
var quote3 = {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", 
    source: "Nelson Mandela", 
    citation: "Speech", 
    year: "1993"
};
var quote4 = {
    quote: "The best and most beautiful things in the world cannot be seen or even heard, but must be felt with the heart.", 
    source: "Helen Keller", 
    citation: "Interview", 
    year: "1932"
};
var quote5 = {
    quote: "The only thing that feels better than winning is winning when nobody thought you could.", 
    source: "Hank Aaron",
    citation: "Textbook", 
    year: "1982"
};

quotes.push(quote1, quote2, quote3, quote4, quote5);
console.log(quotes);



//getRandomQuote() function
function getRandomQuote() {
  // To hold random number from 0 to the total length of array
  var randNumber = Math.floor(Math.random() * quotes.length);

  // To hold random quote that was pulled from the quotes array based on randNumber
  var randQuote = quotes[randNumber];

  return randQuote;
}




//printQuote() function
function printQuote() {
  // To hold the random quote that was returned from the getRandomQuote()
  let randomQuote = getRandomQuote();

  // To generate the output with quote and quote's source in it
  let outputHTML = "<p class='quote'>" + randomQuote.quote + "</p>" + "<p class='source'>" + randomQuote.source;

  // To see if the quote contains citation property and add the citation to the output
  if(randomQuote.citation !== undefined) {
    outputHTML += "<span class='citation'>" + randomQuote.citation + "</span>";
  }

  // To see if the quote contains year property and add the year to the output
  if(randomQuote.year !== undefined) {
    outputHTML += "<span class='year'>" + randomQuote.year + "</span>";
  }
  outputHTML += "</p>";
  document.getElementById('quote-box').innerHTML = outputHTML;
}


console.log(getRandomQuote());

//To click event listener for the print quote button
document.getElementById('load-quote').addEventListener("click", printQuote, false);
