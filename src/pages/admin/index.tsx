import { PageHeader } from 'antd';
import MainLayoutAdmin from '../../layouts/admin';

const Dashboard = () => {
  return (
    <MainLayoutAdmin>
      <PageHeader
        title='Dashboard'
        subTitle='An overview of all the properties listed on the website'
        // extra={[
        //   <Button key='3'>Operation</Button>,
        //   <Button key='2'>Operation</Button>,
        //   <Button key='1' type='primary'>
        //     Primary
        //   </Button>,
        // ]}
      ></PageHeader>
    </MainLayoutAdmin>
  );
};

export default Dashboard;
