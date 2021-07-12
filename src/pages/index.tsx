import AppBar from '../components/appbar';
import SearchBar from '../components/searchbar';
import PropertyListItem from '../components/property-list-item';
import styles from '../styles/Home.module.css';
import { List } from 'antd';
import { useState } from 'react';

const Home = ({ properties = [] }) => {
  const [location, setLocation] = useState('');

  const handleSetLocation = (value: string) => {
    setLocation(value);
  };

  return (
    <div className={styles.container}>
      <head>
        <title>Ben Nleya | RE/MAX™ of Southern Africa</title>
        <meta name='description' content='Next App for Remax agent Ben Nleya' />
        <link rel='icon' href='/favicon.ico' />
      </head>

      <AppBar />

      <SearchBar location={location} handleSetLocation={handleSetLocation} />

      <main className={styles.main}>
        <h1 style={{ fontWeight: 300 }}>Property in {location}</h1>
        <p>{properties.length} propert{properties.length !== 1 ? 'ies' : 'y'} found</p>
        <List dataSource={properties} renderItem={(item, index) => <PropertyListItem key={index} property={item} />} />
      </main>

      {/* <footer className={styles.footer}>
        <a href='https://binay.co.za' target='_blank' rel='noopener noreferrer'>
          Powered by Binay Digital Solutions
        </a>
      </footer> */}
    </div>
  );
}

export default Home;