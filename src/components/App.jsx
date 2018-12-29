import React from 'react';
import Popup from 'react-popup';
import { Helmet } from 'react-helmet';
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';

import Person from './Person/Person';
import './App.css';
import './Popup.css';

const App = () => (
  <div className="App">
    <Helmet
      title="Person Information"
      meta={[
        { name: 'title', content: 'Person Information' },
        { name: 'description', content: 'This recipe talks about React Helmet' },
      ]}
    />

    <Header title="Welcome to Codejobs" />
    <Content>
      <Person />
    </Content>
    <Footer />
    <Popup />
  </div>
);

export default App;
