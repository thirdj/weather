import React from 'react';
import styles from '../public/stylesheets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div className={styles.app1}>
        Hello World
      </div>
    );
  }
}

export default App;
