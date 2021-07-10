import styles from '../../styles/PropertyListItem.module.css';
import { FC, useState } from 'react';
import { IProperty } from '../../models/property';
import { EnvironmentOutlined, HeartFilled, HeartOutlined, SearchOutlined } from '@ant-design/icons';
import { Card, Modal } from 'antd';
import { formatToMoneyWithCurrency } from '../../utils/formats';
import { useRouter } from 'next/router';

interface IProps {
  property: any;
}

const PropertyListItem: FC<IProps> = ({ property }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/property/${property.id}`);
  };

  const [favorite, setFavorite] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleFavorite = () => {
    setShowLoginModal(false);
    setFavorite(!favorite);
  };

  return (
    <Card className={styles.propertyListItem} bodyStyle={{ display: 'flex', padding: '8px' }}>
      <div className={styles.featureImageContainer}>
        <img
          src='/images/house.jpg'
          alt='Remax Logo'
          style={{ height: '16rem', marginLeft: '1rem', marginRight: '2rem' }}
        />
      </div>
      <div className={styles.propertyInfo}>
        <div className={styles.propertyHeaderContainer}>
          <h2 style={{ marginTop: 0, fontWeight: 500 }}>{formatToMoneyWithCurrency(property.price)}</h2>
          <div className={styles.actions}>
            <span
              onClick={handleCardClick}
              className={styles.action}
              style={{ marginRight: '1rem', fontSize: '1.3rem' }}>
              <SearchOutlined /> View Details
            </span>
            {favorite ? (
              <HeartFilled
                className={styles.action}
                onClick={toggleFavorite}
                style={{ fontSize: '1.3rem', color: '#003aa9' }}
              />
            ) : (
              <HeartOutlined className={styles.action} onClick={toggleFavorite} style={{ fontSize: '1.3rem' }} />
            )}
          </div>
        </div>
        <p className={styles.propertyLocation}>{property.name}</p>
        <p className={styles.propertyLocation}>
          <EnvironmentOutlined /> {property.address}
        </p>
        <p className={styles.propertySummary}>{property.summary}</p>
      </div>
      <Modal title='Basic Modal' visible={showLoginModal}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </Card>
  );
};

export default PropertyListItem;
