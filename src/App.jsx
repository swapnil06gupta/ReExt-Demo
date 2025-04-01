import ReExt from '@sencha/reext';
// import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Slider from './sideBar';
import CryptoChart from './Chart';
import About from './about';
import Header from './Header';

const Samp = () => {
  // const [direction, setDirection] = useState('row');
  // const directionRef = useRef(); directionRef.current = direction;
  const navigate = useNavigate();

  return (
    <>
      <Header />
      {/* <Slider /> */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: '30px', display: 'flex', justifyContent: 'flex-start', marginBottom: '10px' }}>
          <Link to="/about">
            <ReExt xtype='button'
              style={{ width: '300px', height: '30px', marginRight: '10px' }}
              config={{ text: "Home", width: '100%' }}
              onClick={() => {
                navigate('/about');
              }}
            />
          </Link>
        </div>
        <ReExt xtype="tabpanel" style={{ width: "100%", height: "600px" }} activeTab={"Tab 2"}>
          <ReExt xtype="container" title="Tab 1" iconCls="x-fa fa-home">
            <CryptoChart />
          </ReExt>
          <ReExt xtype="container" title="Tab 2" iconCls="x-fa fa-cogs">
            <About />
          </ReExt>
          {/* <ReExt xtype="container" title="Tab 3" iconCls="x-fa fa-info-circle">
            Content for Tab 3
          </ReExt> */}
        </ReExt>
      </div >
    </>
  )
}

export default Samp;
