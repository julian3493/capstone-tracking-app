import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import TracksPage from '../components/TracksPage';
import store from '../redux/store';

it('it tests the render TracksPage correctly', () => {
  const tracksPage = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <TracksPage />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(tracksPage).toMatchSnapshot();
});

describe('render correctly the topbar component', () => {
  it('renders the topbar', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <TracksPage />
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
          <TracksPage />
        </BrowserRouter>
      </Provider>,
    );
    const topbar = document.querySelector('.top');
    expect(topbar.firstChild.innerHTML).toEqual('Tracks');
  });
});

describe('render correctly the TracksPage content', () => {
  it('should display a tracks container', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <TracksPage />
        </BrowserRouter>
      </Provider>,
    );
    const container = document.querySelector('.track-rows');
    expect(container).toBeDefined();
  });
});

it('should render a logout button', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <TracksPage />
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
        <TracksPage />
      </BrowserRouter>
    </Provider>,
  );
  const nav = document.querySelector('.nav-div');
  expect(nav).toBeDefined();
});
