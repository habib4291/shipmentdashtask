import React from "react";


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const logo = "./assets/logo.svg"
const profile = "././assets/profile.svg"

function Navbar() {
    return (
        <div>
        <AppBar position="static" style={{backgroundColor:'white',color:'black'}}>
          <Toolbar className={'toolitem'} style={{display:'flex',justifyContent:'space-between'}}>
          <div className={'left'} style={{display:'flex'}}>
            <img className={'titlelogo'} src={logo} alt='err'/>
            <Typography variant="h6" className={'title'} style={{height:"10px",paddingTop:'13px'}}>
              Intugine
            </Typography>
            </div>
            <div className={'right'}>
             <Button>Home</Button>
             <Button>Brands</Button>
             <Button>Transports</Button>
             
              <img src={profile} alt='pp' style={{marginTop:'8px'}}/>
              <img src="https://img.icons8.com/android/24/000000/chevron-down.png" alt='ooops' style={{marginTop:'8px'}}/>
            
             </div>
          </Toolbar>
        </AppBar>
      </div>
        // <div className="nav">
        //     <a href="#"><img src={logo} alt='ops'/> </a>
        //     <a href="#">Intugine</a>
        //     <div className="nav-right">
        //         <a href="#">Home</a>
        //         <a href="#">Brands</a>
        //         <a href="#">Transporters</a>
        //         <a href="#"><img src={profile} alt='op' /></a>
        //         <a href="#"><img src="https://img.icons8.com/android/24/000000/chevron-down.png" alt='err'/></a>
        //     </div>
        // </div>
    );
}

export default Navbar;