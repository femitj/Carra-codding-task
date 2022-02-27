import React from 'react';
import './App.css';
import Layout from './components/layout';
import Home from './views/home';
import { CatalogueContextProvider } from './store/context/CatalogueContext';

function App() {
  return (
    <CatalogueContextProvider>
      <Layout>
        <Home />
      </Layout>
    </CatalogueContextProvider>
  );
}

export default App;
