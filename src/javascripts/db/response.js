import $ from 'jquery';
import axios from 'axios';

const compInfoPrinter = (data) => {
  console.log(data);
  let newString = '';
  newString += `<p>${data.symbol}</p>`;
  newString += `<p>${data.CEO}</p>`;
  newString += `<p>${data.companyName}</p>`;
  newString += `<p>${data.description}</p>`;
  newString += `<p>${data.exchange}</p>`;
  newString += `<p>${data.industry}</p>`;
  newString += `<p>${data.issueType}</p>`;
  newString += `<p>${data.sector}</p>`;
  newString += `<p>${data.tags}</p>`;
  newString += `<p>${data.website}</p>`;
  $('#printHere').html(`<p>${newString}</p>`);
};

const companyInfo = () => {
  const ticker = $('#ticker').val();
  axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/company`)
    .then((data) => {
      compInfoPrinter(data.data);
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default { companyInfo };
