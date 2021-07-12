import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, InputNumber, PageHeader, Row, Select } from 'antd';
import { useState } from 'react';
import MainLayoutAdmin from '../../layouts/admin';

const { Option } = Select;

const Properties = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const amenities = [
    'Pool',
    'Electric Fence',
    'CCTV',
    'Solar Panels',
    'Lapa',
    'Garage',
    'Gas Stove',
    'Fireplace',
    'Fibre Ready',
    'Enclosed Area',
    'Pet Friendly',
  ];

  const handleDrawerOpen = () => {
    setDrawerVisible(true);
  };
  const handleDrawerClose = () => {
    setDrawerVisible(false);
  };

  const handleAmenitiesChange = (value: any) => {
    console.log(`selected ${value}`);
  };

  return (
    <MainLayoutAdmin>
      <PageHeader
        title='Properties'
        style={{ padding: '1rem 1rem 1rem 2rem' }}
        subTitle='Manage all the properties listed on your website'
        extra={[
          <Button key='1' type='primary' onClick={handleDrawerOpen}>
            <PlusOutlined /> Create
          </Button>,
        ]}></PageHeader>
      <Drawer
        title='Create a new property'
        width={720}
        onClose={handleDrawerClose}
        visible={drawerVisible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: 'right',
            }}>
            <Button onClick={handleDrawerClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={handleDrawerClose} type='primary'>
              Submit
            </Button>
          </div>
        }>
        <Form layout='vertical' hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name='name'
                label='Listing Title'
                rules={[{ required: true, message: 'Please enter property name' }]}>
                <Input placeholder='Please enter property name' />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name='price'
                label='Price'
                rules={[{ required: true, message: 'Please enter property price' }]}>
                <InputNumber
                  formatter={(value) => `R ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  // @ts-ignore
                  parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                  style={{ width: '100%' }}
                  defaultValue='0'
                  step={100000}
                  placeholder='350000'
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name='type'
                label='Property Type'
                rules={[{ required: true, message: 'Please choose the type' }]}>
                <Select placeholder='Select...'>
                  <Option value='house'>House</Option>
                  <Option value='apartment'>Apartment / Flat</Option>
                  <Option value='townhouse'>Townhouse</Option>
                  <Option value='land'>Vacant Land / Plot</Option>
                  <Option value='farm'>Farm</Option>
                  <Option value='commercial'>Commercial Property</Option>
                  <Option value='industrial'>Industrial Property</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name='address'
                label='Address'
                rules={[{ required: true, message: 'Please enter property address' }]}>
                <Input placeholder='Please enter property address' />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name='city' label='City' rules={[{ required: true, message: 'Please enter property city' }]}>
                <Input placeholder='Property city' />
              </Form.Item>
            </Col>
            <Col span={3}>
              <Form.Item
                name='beds'
                label='Beds'
                rules={[{ required: true, message: 'Please choose the number of bedrooms' }]}>
                <Select defaultValue='1' placeholder='1'>
                  <Option value='1'>1</Option>
                  <Option value='2'>2</Option>
                  <Option value='3'>3</Option>
                  <Option value='4'>4</Option>
                  <Option value='5'>5</Option>
                  <Option value='6'>6</Option>
                  <Option value='7'>7</Option>
                  <Option value='8'>8</Option>
                  <Option value='9'>9</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={3}>
              <Form.Item
                name='baths'
                label='Baths'
                rules={[{ required: true, message: 'Please choose the number of bathrooms' }]}>
                <Select defaultValue='1' placeholder='1'>
                  <Option value='1'>1</Option>
                  <Option value='2'>2</Option>
                  <Option value='3'>3</Option>
                  <Option value='4'>4</Option>
                  <Option value='5'>5</Option>
                  <Option value='6'>6</Option>
                  <Option value='7'>7</Option>
                  <Option value='8'>8</Option>
                  <Option value='9'>9</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name='amenities'
                label='Amenities'
                rules={[{ required: true, message: 'Please select amenities' }]}>
                <Select
                  placeholder='Please select amenities'
                  mode='tags'
                  style={{ width: '100%' }}
                  onChange={handleAmenitiesChange}>
                  {amenities.map((amenity, index) => (
                    <Option key={index} value={amenity}>
                      {amenity}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name='description'
                label='Property Description'
                rules={[
                  {
                    required: true,
                    message: 'Please enter a description for this property',
                  },
                ]}>
                <Input.TextArea rows={4} placeholder='Please enter a description for this property' />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </MainLayoutAdmin>
  );
};

export default Properties;
