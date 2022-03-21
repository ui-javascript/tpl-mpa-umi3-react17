import React from 'react';
import ReactDOM  from 'react-dom';
import styles from '../index/index.less';

const App = () => {
  return (
    <div>
      <h1 className={styles.title}>Page index111</h1>
    </div>
  );
}
export default App;

ReactDOM.render(<App />, document.getElementById('root'));
