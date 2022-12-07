import React from "react";
import ProductDetails from './Containers/ProductDetails';
import PremiumDetails from './Containers/PremiumDetails';
import BenefitDetails from './Containers/BenefitDetails';
import "./Styles/mainContainer.css";
import { Container } from 'react-bootstrap';
import Validation from './Containers/Validations'
import PolicyServicing from "./Containers/PolicyServicing";
import Button from './Components/Button'

const MainContainer = () => {

  const handleClick = () => {

  }
  return <div>
    <Container style={{ width: '100%', paddingTop: '10px', paddingBottom: '10px' }}>
      <div className="mainContainer">
        <div align="left" style={{ paddingLeft: '10px', fontWeight: 'bold' }}>
          Product RunTime Configurator
        </div>
        <hr style={{ border: '1px solid gray' }} />
        <div className="subContainer"><ProductDetails /></div>
        <div className="subContainer"><Validation /></div>
        <div className="subContainer"><BenefitDetails /></div>
        <div className="subContainer"><PremiumDetails /></div>
        <div className="subContainer"><PolicyServicing /></div>
        <div style={{justifyContent:"flex-end", display:"flex", marginRight:140, marginBottom:50, marginTop:50}}>
          <input
            type="button"
            value="Generate JSON"
            onClick={handleClick}
            style={{ border: '1px solid black', height: 35, borderRadius: 3, width: 120, fontWeight: 'bold', fontSize: 12, backgroundColor: '#edb525' }}
          />
        </div>
      </div>
    </Container>
  </div>;
};
export default MainContainer;
