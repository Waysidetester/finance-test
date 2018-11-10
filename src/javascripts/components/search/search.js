import $ from 'jquery';
// import response from '../../db/response';
import stock from '../stock/stockComponent';

const searchBar = () => {
  $('#ticker').on('keyup', (e) => {
    if (e.keyCode === 13) {
      const searchParam = $('#ticker').val();
      stock.infoPrinter(searchParam);
    }
  });
};

export default { searchBar };
