import $ from 'jquery';
import response from '../../db/response';

const companyInfoPrinter = (data) => {
  let newString = '';
  newString += `<p>Ticker: ${data.symbol}</p>`;
  newString += `<p>CEO: ${data.CEO}</p>`;
  newString += `<p>Company Name: ${data.companyName}</p>`;
  newString += `<p>Business Details: ${data.description}</p>`;
  newString += `<p>Exchange Traded On: ${data.exchange}</p>`;
  newString += `<p>Industry: ${data.industry}</p>`;
  newString += `<p>Share Type: ${data.issueType}</p>`;
  newString += `<p>${data.sector}</p>`;
  newString += `<p>Related Tags: ${data.tags}</p>`;
  newString += `<p>Company Site: ${data.website}</p>`;
  $('#companyHere').html(`<p>${newString}</p>`);
};

const infoPrinter = (searchedComp) => {
  response.companyInfo(searchedComp)
    .then((data) => {
      companyInfoPrinter(data.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default { infoPrinter };
