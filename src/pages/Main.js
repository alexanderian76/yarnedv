import { makeAutoObservable, makeObservable, observable, runInAction, set } from "mobx";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Container, Button, Dropdown, Image, Navbar, Overlay, OverlayTrigger, Tooltip} from "react-bootstrap";

import { Context } from "../index";
import {navHeight} from '../NavBar'
import { observer } from "mobx-react-lite";

function MainComp(props) {
    const [selectedValue, setSelectedValue] = useState('')
    const {navbarHeight} = useContext(Context)
   // console.log(props)
    const container = useRef('')
    //let containerWidth = container.current.innerWidth
    const [containerState, setContainerState] = useState({width: container.current.offsetWidth, height: container.current.offsetHeight})
    //const [containerHeight, setContainerHeight] = useState('')
    //let containerHeight = 0
    const [showAlert, setShowAlert] = useState(false)
    function onResize(ref) {
        
        setContainerState({width: container.current.offsetWidth, height: container.current.offsetHeight})
       // setContainerHeight(container.current.offsetHeight)
       // console.log(container.current.offsetWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', onResize)
        //observable.ref(container)
        setContainerState({width: container.current.offsetWidth, height: container.current.offsetHeight})
        //setContainerWidth(container.current.offsetWidth)
       // setContainerHeight(container.current.offsetHeight)
    }, [])
  return (
    <div ref={ref => container.current = ref} style={{ backgroundColor: 'white', marginTop: navbarHeight.height}}>
        <header style={{
                backgroundColor: "white",
        // marginLeft: (containerWidth - (window.innerWidth/2 < 300 ? 300 : window.innerWidth/1.15)) / 2,
                fontSize: 20,
            //  border: '1px solid',
            //   borderColor: "#25b831",
            // height:containerHeight == null ? 0 :containerHeight - navbarHeight.height ,
                width: containerState.width == null ? window.innerWidth : (window.innerWidth - containerState.width/ 10),
                textAlign: "left",
                marginLeft: containerState.width == null ? 0 : containerState.width/ 10,
            //  paddingLeft: containerWidth == null ? 0 : containerWidth/ 10,
            // paddingRight: containerWidth == null ? 0 : containerWidth / 10,
                paddingTop:containerState.height == null ? 0 :containerState.height/ 30,
            //  paddingBottom:containerHeight == null ? 0 :containerHeight/ 12
        }}>
            <div>Мы на рынке уже <a style={{color: '#63a3d9'}}>20</a> лет!</div>
            <div>Мы построили более <a style={{color: '#63a3d9'}}>100000</a> квадратных метров жилых площадей</div>
            <div>От <a style={{color: '#63a3d9'}}>36000</a> рублей за квадратный метр, с индивидуальным отоплением и полной отделкой!</div>
            <div>С нами Вы сможете осуществить свою мечту!</div>
           
       </header>

        <header style={{
                backgroundColor: "white",
                fontSize: 30,
                width: '100%',
                textAlign: "center",
                paddingTop:containerState.height == null ? 0 :containerState.height/ 50,
        }}>
             
            
        </header>

      
    </div>
  );
}

const Main = observer(MainComp)

export default Main;
