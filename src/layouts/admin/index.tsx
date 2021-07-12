import { AppstoreOutlined, HomeOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import AdminAppBar from '../../components/appbar/admin';
import './styles.css';

const { Sider, Content } = Layout;
const MenuItem = Menu.Item;

const MainLayoutAdmin = ({ children }: any) => {
    const router = useHistory();
    const handleClick = ({ key }: any) => {
        router.push(`/admin/${key}`);
    }
  return (
    <Layout style={{ minHeight: '100vh' }} className='main-layout-admin'>
      <AdminAppBar />
      <Layout>
        <Sider className='sidebar'>
          <Menu style={{ background: '#ffffff', height: '100%' }} onClick={handleClick}>
            <MenuItem key='dashboard' icon={<AppstoreOutlined />}>
              Dashboard
            </MenuItem>
            <MenuItem key='properties' icon={<HomeOutlined />}>
              Properties
            </MenuItem>
          </Menu>
        </Sider>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayoutAdmin;
