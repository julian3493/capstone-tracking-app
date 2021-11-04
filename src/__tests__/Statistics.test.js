import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Statistics from '../components/Statistics';
import store from '../redux/store';

describe('render correctly the topbar component', () => {
  it('renders the topbar', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Statistics />
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
          <Statistics />
        </BrowserRouter>
      </Provider>,
    );
    const topbar = document.querySelector('.top');
    expect(topbar.firstChild.innerHTML).toEqual('Statistics');
  });
});

describe('render correctly the Statistics content', () => {
  it('should display a stats container', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Statistics />
        </BrowserRouter>
      </Provider>,
    );
    const container = document.querySelector('.stats-body');
    expect(container).toBeDefined();
  });

  it('should display a stats container title', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Statistics />
        </BrowserRouter>
      </Provider>,
    );
    const container = document.querySelector('.stats-body');
    expect(container.firstChild.innerHTML).toEqual('Total consumed');
  });

  it('should display 5 stats', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Statistics />
        </BrowserRouter>
      </Provider>,
    );
    const stats = document.getElementsByClassName('p-stat');
    expect(stats.length).toEqual(5);
  });
});

it('should render a logout button', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Statistics />
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
        <Statistics />
      </BrowserRouter>
    </Provider>,
  );
  const nav = document.querySelector('.nav-div');
  expect(nav).toBeDefined();
});
