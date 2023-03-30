
setTimeout(() => {
const currencyRegex = /(?<!\S)\S*₺\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2})?\S*(?!\S)/;
const currencyElements = document.querySelectorAll('span');

const currencyValues = [];
for (const element of currencyElements) {
  let text = element.innerText;
  if (!text) continue;
  text = text.trim();
  const matches = text.match(currencyRegex)
  
  if (matches) {

    for (const match of matches) {

      currencyValues.push(match);
      if (element.childNodes.length === 1) {
        element.innerText = element.innerText + ' (PLN ' + parseInt(match.substring(1)) * 0.25 + ')';
      }
    }
  }
}
}, 500 )
