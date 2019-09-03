const express = require('express');
const app = express();

const numbers = [
  {1: 'One'},
  {2: 'Two'},
  {3: 'Three'},
  {4: 'Four'},
  {5: 'Five'},
];

const a = [
  '', 'one ',
  'two ', 'three ',
  'four ',  'five ',
  'six ', 'seven ',
  'eight ', 'nine ',
  'ten ', 'eleven ',
  'twelve ', 'thirteen ',
  'fourteen ', 'fifteen ',
  'sixteen ', 'seventeen ',
  'eighteen ', 'nineteen '
];
const b = [
  '', '', 
  'twenty', 'thirty',
  'forty', 'fifty', 
  'sixty', 'seventy',
  'eighty', 'ninety'];

function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; const str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    return str;
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/numbers', (req, res) => {
  res.send(numbers);
});

app.get('/api/numbers/:num', (req, res) => {
  const number = numbers.find((n) => n[req.params.num]);
  if (!number) res.status(404).send('The given number was not found');
  res.send(number);
});

app.post('/api/numbers', (req, res) => {
  const number = {
    numbers.length() + 1: inWords(numbers.length + 1), 
  };
});

// Read PORT env variable if available else use 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
