import React from 'react';
import {render} from 'react-dom';
import App from './app.jsx';
// import { AppContainer } from 'react-hot-loader';

// const render = Component => {
//   ReactDOM.render(
//     <AppContainer>
//       <Component />
//     </AppContainer>,
//     document.getElementById('root')
//   );
// }

// render(App)

if (module.hot) {
  module.hot.accept('./app.jsx', () => {
  App = require('./app.jsx').default;
  render(<App />, document.getElementById('root'))
  });
};

// render(<App/>, document.getElementById('root'));