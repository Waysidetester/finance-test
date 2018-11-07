import $ from 'jquery';
import axios from 'axios';

const baseUrl = 'https://api.iextrading.com/1.0/';

// ************************************************

// DOM printers

const companyInfoPrinter = (data) => {
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

// end DOM printers

// ************************************************

// API calls

const companyInfo = () => {
  const ticker = $('#ticker').val();
  axios.get(`${baseUrl}stock/${ticker}/company`)
    .then((data) => {
      companyInfoPrinter(data.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

// end API calls

export default { companyInfo };
