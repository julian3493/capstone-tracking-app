import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Dashboard from '../components/Dashboard';
import store from '../redux/store';

it('it tests the render Dashboard correctly', () => {
  const dashboard = renderer
    .create(<Provider store={store}>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </Provider>)
    .toJSON();
  expect(dashboard).toMatchSnapshot();
});

describe('render correctly the topbar component', () => {
  it('renders the topbar', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Dashboard />
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
          <Dashboard />
        </BrowserRouter>
      </Provider>,
    );
    const topbar = document.querySelector('.top');
    expect(topbar.firstChild.innerHTML).toEqual('Dashboard');
  });
});

describe('render correctly the dashboard content', () => {
  it('should display a form', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </Provider>,
    );
    const form = document.querySelector('.track-form');
    expect(form).toBeDefined();
  });

  it('should have a select input', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </Provider>,
    );
    const form = document.querySelector('.track-form');
    const select = document.querySelector('select');
    expect(form.children[1]).toEqual(select);
  });

  it('should have a date input', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </Provider>,
    );
    const form = document.querySelector('.track-form');
    expect(form.children[2].type).toEqual('date');
  });

  it('should have a number input for time', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </Provider>,
    );
    const form = document.querySelector('.track-form');
    expect(form.children[3].type).toEqual('number');
  });

  it('should have a number input for watts', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </Provider>,
    );
    const form = document.querySelector('.track-form');
    expect(form.children[4].type).toEqual('number');
  });
});

it('should render a logout button', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Dashboard />
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
        <Dashboard />
      </BrowserRouter>
    </Provider>,
  );
  const nav = document.querySelector('.nav-div');
  expect(nav).toBeDefined();
});