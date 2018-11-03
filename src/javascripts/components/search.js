import $ from 'jquery';
import stockComponent from './stockComponent';

let ticker = '';

const searchBar = () => {
  $('#ticker').on('keyup', (e) => {
    if (e.keyCode === 13) {
      ticker = $('#ticker').val();
      stockComponent.infoPrinter(ticker);
    }
  });
};

export default { searchBar };
