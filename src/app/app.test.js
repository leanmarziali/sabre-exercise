import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

describe('App Component', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render correctly in "debug" mode', () => {
    // Renders only the single component, not including its children.
    const component = shallow(<App debug />);
    expect(component).toMatchSnapshot();
  });
});
