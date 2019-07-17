import React from 'react';
import './App.css';

const styles = {
  main: {
    backgroundColor: 'skyblue',
    width: '325px',
    height: '450px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    margin: 'auto'
  },
  headerText: {
    color: 'black',
    fontSize: 32,
    textAlign: 'center'
  },
  saveBox: {
    position: 'absolute',
    border: '2px gray solid',
    width: '60%',
    height: '20%',
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 'auto'
  },
  startStop: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    margin: 'auto'
  }
};

function App() {
  return (
    <div style={styles.main}>
      <div style={styles.header}>
        <p style={styles.headerText}>CSS Copier</p>
      </div>
      <div style={styles.saveBox}>

      </div>
      <div style={styles.startStop}>

      </div>
    </div>
  );
}

export default App;