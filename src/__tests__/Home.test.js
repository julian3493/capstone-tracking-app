import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Home from '../components/Home';
import store from '../redux/store';

it('it tests the render Home correctly', () => {
  const home = renderer
    .create(<Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>)
    .toJSON();
  expect(home).toMatchSnapshot();
});


describe('render correctly the topbar component', () => {
  it('renders the topbar', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    const topbar = document.querySelector('.top');
    expect(topbar).toBeDefined();
  });

  it('renders the page title', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    const topbar = document.querySelector('.top');
    expect(topbar.firstChild.innerHTML).toEqual('App Tracker');
  });
});

describe('render correctly the login and create buttons', () => {
  it('show a login button', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    const options = document.querySelector('.options');
    expect(options.firstChild.innerHTML).toEqual('<a href=\"/login\">Login</a>');
  });

  it('show a create account button', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    const options = document.querySelector('.options');
    expect(options.lastChild.innerHTML).toEqual('<a href=\"/registration\">Create Account</a>');
  });
});