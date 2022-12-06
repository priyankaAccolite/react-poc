import React from "react";
import ProductDetails from './Containers/ProductDetails';
import BenefitDetails from './Containers/BenefitDetails';
import "./Styles/mainContainer.css";
import { Container } from 'react-bootstrap';


const MainContainer = () => {
  return <div style={{ margin: '20px' }}>
    <Container style={{ width: '100%', paddingTop: '10px', paddingBottom: '10px' }}>
      <div className="mainContainer">
        <div align="left" style={{ paddingLeft: '10px', fontWeight: 'bold' }}>
          Product RunTime Configurator
        </div>
        <hr style={{ border: '1px solid gray' }} />
        <div className="subContainer"><ProductDetails /></div>
        <div className="subContainer"><BenefitDetails /></div>
      </div>
    </Container>
  </div>;
};
export default MainContainer;
