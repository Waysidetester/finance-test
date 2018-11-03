import axios from 'axios';

const baseUrl = 'https://api.iextrading.com/1.0';


const companyInfo = (searchCrit) => {
  axios.get(`${baseUrl}/stock/${searchCrit}/company`);
};

export default { companyInfo };
