import React from 'react';

import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';
import ToastProvider from '../Toast/ToastProvider';
import ToastInputProvider from '../ToastPlayground/ToastInputProvider';

function App() {
  return (
    <ToastProvider>
      <ToastInputProvider>
        <ToastPlayground />
        <Footer />
      </ToastInputProvider>
    </ToastProvider>
  );
}

export default App;
