import response from '../db/response';

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

const infoPrinter = (searchCrit) => {
  response.companyInfo(searchCrit)
    .then((data) => {
      compInfoPrinter(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default { infoPrinter };
