import $ from 'jquery';
import auth from '../../../data/auth';

const loginEvent = () => $('#login').on('click', auth.googleAuth);

const logoutEvent = () => $('#logout').on('click', auth.logout);

const bindAuthEvents = () => {
  loginEvent();
  logoutEvent();
};

export default { bindAuthEvents };
