fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
  .then((data) => data.json())
  .then((quotedata) => {
    const quoteText = quotedata.quotes[0].text;
    const quoteElement = document.getElementById("quoteElement");
    quoteElement.innerHTML = quoteText;
  });
