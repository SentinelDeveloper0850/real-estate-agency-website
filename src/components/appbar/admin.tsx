import { Button } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { useHistory } from 'react-router-dom';
import './styles.css';

const AdminAppBar = () => {
  const router = useHistory();
  return (
    <Header className='admin-appbar' style={{ padding: '0' }}>
      <div className='brand'>
        <img src='/images/logo_full.png' alt='Remax Logo' />
      </div>
      <div className='account'>
        <Button onClick={() => router.push('/')} type='link' danger>
          Back to site
        </Button>
      </div>
    </Header>
  );
};

export default AdminAppBar;
