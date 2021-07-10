import styles from '../../styles/Home.module.css';
import { FC } from 'react';
import { SearchOutlined } from "@ant-design/icons";
import { Spin } from 'antd';

export interface ISearchProps {
  location: string;
  handleSetLocation: (value: string) => void;
}

const SearchBar: FC<ISearchProps> = ({ location, handleSetLocation }) => {
  return (
    <section className={styles.searchbar}>
      <h3>Find Property for Sale</h3>
      <div className={styles.searchContainer}>
        <div className={styles.criteriaItem}>
          <label>Location</label>
          <input
            value={location}
            type='text'
            placeholder='Location'
            onChange={({ target }) => handleSetLocation(target.value)}
          />
        </div>
        <div className={styles.criteriaItem}>
          <label>Property Type</label>
          <select>
            <option value='House'>House</option>
            <option value='Townhouse'>Townhouse</option>
          </select>
        </div>
        <div className={styles.criteriaItem}>
          <label>Min Price</label>
          <input type='number' placeholder='0' step='1000' min='0' />
        </div>
        <div className={styles.criteriaItem}>
          <label>Max Price</label>
          <input type='number' placeholder='5 000 000' step='1000' min='0' />
        </div>
        <div className={styles.criteriaItem}>
          <label>Bedrooms</label>
          <input type='number' placeholder='+1' min='0' />
        </div>
        <div className={styles.criteriaItem}>
          <label>Bathrooms</label>
          <input type='number' placeholder='1+' min='0' />
        </div>
        <div className={styles.button}>
          <SearchOutlined style={{ color: '#ffffff' }} />
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
