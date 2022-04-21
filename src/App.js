import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Menu } from "./components/Menu";
import { ContentProvider } from "./utils/ContentProvider";
import React from 'react';

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <ContentProvider>
          <Menu />
        </ContentProvider>
      </div>
      <Footer />
    </>
  );
}

export default App;
