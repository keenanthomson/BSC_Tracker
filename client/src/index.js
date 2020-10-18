import React from 'react';
import ReactDOM from 'react-dom';
import 'react-hot-loader/patch';
import App from './app.jsx';
import { AppContainer } from 'react-hot-loader';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
}

render(App)

if (module.hot) {
  module.hot.accept('./app.jsx', () => render(App))
};

// render(<App/>, document.getElementById('root'));