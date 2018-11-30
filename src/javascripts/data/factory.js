import axios from 'axios';

const baseUrl = 'https://api.iextrading.com/1.0/';

// ************************************************

// API calls

const companyInfo = ticker => axios.get(`${baseUrl}stock/${ticker}/company`);

// end API calls

export default { companyInfo };
