import $ from 'jquery';
import response from '../db/response';

const searchBar = () => {
  $('#ticker').on('keyup', (e) => {
    if (e.keyCode === 13) {
      response.companyInfo();
    }
  });
};

export default { searchBar };
