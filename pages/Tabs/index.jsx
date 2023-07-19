import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col,Container } from 'react-bootstrap';
import "../news/test.css";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  return (
    <div>
      <Nav className='tabNavbar' variant="tabs" defaultActiveKey="tab1" onSelect={handleTabSelect}>
        <Nav.Item>
          <Nav.Link eventKey="tab1">PASSION</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab2">TALENT <br />GROWTH</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab3">UNITY IN <br /> DIVERSITY</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab4">AGILITY</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab5">AUTONOMY</Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent activeKey={activeTab} className='tabContent'>
        <TabPane eventKey="tab1" className='d-block'>
        <Container fluid>
          <Row>
            <Col md="auto">
              <img src='../assets/image/Rectangle 100.png' className='tabImg' />
            </Col>
            <Col md>
              <div className='tabContt'>
              <h4>
                PASSION
              </h4>
              <p>
                Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
              </p>
              <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.</p>
           
              </div>
            </Col>
          </Row>
          </Container>
        </TabPane>
        <TabPane eventKey="tab2">
          <h3>Tab 2 Content</h3>
          <p>This is the content for Tab 2.</p>
        </TabPane>
        <TabPane eventKey="tab3">
          <h3>Tab 3 Content</h3>
          <p>This is the content for Tab 3.</p>
        </TabPane>
        <TabPane eventKey="tab4">
          <h3>Tab 3 Content</h3>
          <p>This is the content for Tab 3.</p>
        </TabPane>
        <TabPane eventKey="tab5">
          <h3>Tab 3 Content</h3>
          <p>This is the content for Tab 3.</p>
        </TabPane>
      </TabContent>
    </div>
  );
}
