import React, { Component } from 'react';
import downIcon from './downChevron.png';
import upIcon from './upChevron.png';

function sidebarItemClicked (number, condition) {
    if (condition === 'block') {
        document.querySelector('#sidebarSub' + number).style.display = 'none';
        document.querySelector('#sidebarImg' + number).src = downIcon;
    } else {
        document.querySelector('#sidebarSub' + number).style.display = 'block';
        document.querySelector('#sidebarImg' + number).src = upIcon;
    }
};

class SideBar extends Component {
  render() {
    return (
    <div id='sidebar' > 
        <h3 id='sidebarTitle'> Lorem Ipsum</h3>
        <div id='dashboardNav' class='sidebarItem' onClick={function(){
          
        }}>
            <p> Dashboard </p>
            
        </div>
        <div id='sidebarItemOne' class='sidebarItem' onClick={function(){
            sidebarItemClicked('One', document.querySelector('#sidebarSubOne').style.display);
        }}>
            <p> Accounts / Finance  <img id='sidebarImgOne' class='sidebarImg' src={downIcon} alt='Sidebar Arrow'/></p>
            <div id='sidebarSubOne' class='sidebarSub'>
                <p>Item One</p>
                <p>Item Two</p>
                <p>Item Three</p>
            </div>
        </div>
        <div id='sidebarItemTwo' class='sidebarItem' onClick={function () {
            sidebarItemClicked('Two', document.querySelector('#sidebarSubTwo').style.display);
        }}>
            <p> Admin / Operations <img id='sidebarImgTwo' class='sidebarImg' src={downIcon} alt='Sidebar Arrow'/></p>
            <div id='sidebarSubTwo' class='sidebarSub'>
                <p>Item One</p>
                <p>Item Two</p>
                <p>Item Three</p>
            </div>
        </div>
        <div id='sidebarItemThree' class='sidebarItem' onClick={function () {
            sidebarItemClicked('Three', document.querySelector('#sidebarSubThree').style.display);
        }}>
            <p> Stock / Warehouse <img id='sidebarImgThree' class='sidebarImg' src={downIcon} alt='Sidebar Arrow'/></p>
            <div id='sidebarSubThree' class='sidebarSub'>
                <p>Item One</p>
                <p>Item Two</p>
                <p>Item Three</p>
            </div>
        </div>
        <div id='sidebarItemFour' class='sidebarItem' onClick={function () {
            sidebarItemClicked('Four', document.querySelector('#sidebarSubFour').style.display);
        }}>
            <p> Purchasing <img id='sidebarImgFour' class='sidebarImg' src={downIcon} alt='Sidebar Arrow'/></p>
            <div id='sidebarSubFour' class='sidebarSub'>
                <p>Item One</p>
                <p>Item Two</p>
                <p>Item Three</p>
            </div>
        </div>
        <div id='sidebarItemFive' class='sidebarItem' onClick={function () {
            sidebarItemClicked('Five', document.querySelector('#sidebarSubFive').style.display);
        }}>
            <p> Estimating (P2) <img id='sidebarImgFive' class='sidebarImg' src={downIcon} alt='Sidebar Arrow'/></p>
            <div id='sidebarSubFive' class='sidebarSub'>
                <p>Item One</p>
                <p>Item Two</p>
                <p>Item Three</p>
            </div>
        </div>
        <div id='sidebarItemSix' class='sidebarItem' onClick={function () {
            sidebarItemClicked('Six', document.querySelector('#sidebarSubSix').style.display);
        }}>
            <p> Compliance (P2) <img id='sidebarImgSix' class='sidebarImg' src={downIcon} alt='Sidebar Arrow'/></p>
            <div id='sidebarSubSix' class='sidebarSub'>
                <p>Item One</p>
                <p>Item Two</p>
                <p>Item Three</p>
            </div>
        </div>
        <div id='sidebarItemSeven' class='sidebarItem' onClick={function () {
            sidebarItemClicked('Seven', document.querySelector('#sidebarSubSeven').style.display);
        }}>
            <p> My Account <img id='sidebarImgSeven' class='sidebarImg' src={downIcon} alt='Sidebar Arrow'/></p>
            <div id='sidebarSubSeven' class='sidebarSub'>
                <p>Item One</p>
                <p>Item Two</p>
                <p>Item Three</p>
            </div>
        </div>
    </div>
    )
  }
}

export default SideBar;