import React from 'react';
import ReactDOM from 'react-dom/client';
import MyBrowser from './MyBrowser';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyBrowser expandedFolders={['VC']} />
  </React.StrictMode>
);
