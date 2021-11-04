import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import More from '../components/More';
import store from '../redux/store';

describe('render correctly the topbar component', () => {
  it('renders the topbar', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <More />
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
          <More />
        </BrowserRouter>
      </Provider>,
    );
    const topbar = document.querySelector('.top');
    expect(topbar.firstChild.innerHTML).toEqual('More');
  });
});

describe('render correctly the More content', () => {
  it('should display a message', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <More />
        </BrowserRouter>
      </Provider>,
    );
    const message = document.querySelector('.more-content');
    expect(message).toBeDefined();
  });
});

it('should render a logout button', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <More />
      </BrowserRouter>
    </Provider>,
  );
  const logoutBtn = document.querySelector('.logoutBtn');
  expect(logoutBtn).toBeDefined();
});

it('should render a navigation component', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <More />
      </BrowserRouter>
    </Provider>,
  );
  const nav = document.querySelector('.nav-div');
  expect(nav).toBeDefined();
});
