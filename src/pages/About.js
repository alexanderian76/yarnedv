import { makeAutoObservable, set } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Container, Button, Navbar } from "react-bootstrap";
import { Context } from "..";

function AboutComp() {
  const {navbarHeight} = useContext(Context)
  const container = useRef('')
 // const [currentWidth, setCurrentWidth] = useState(0)
  //const [containerHeight, setContainerHeight] = useState(0)
  //const currentWidth = window.innerWidth < 900 ? '100%' : 900
  const [containerState, setContainerState] = useState({width: window.innerWidth < 900 ? window.innerWidth : 900, height: container.current.offsetHeight})
  function onResize(ref) {
    //console.log(containerState.height)
    setContainerState({width: window.innerWidth < 900 ? window.innerWidth : 900, height: container.current.offsetHeight})
    
  }
  function setMargin() {
   // console.log(window.innerWidth)
    return (window.innerWidth - containerState.width) > 0 ? (window.innerWidth - containerState.width)/2 : 0
  }
  
  //console.log(containerState)

  useEffect(() => {
    
   // setContainerState({width: window.innerWidth < 900 ? window.innerWidth : 900, height: container.current.offsetHeight})
   // console.log(containerState)
    //setCurrentWidth(window.innerWidth < 900 ? window.innerWidth : 900)
   // setContainerHeight(container.current.offsetHeight)
    window.addEventListener('resize', onResize)
   // console.log(currentWidth)
  }, [])
  //console.log(navbarHeight.height)
  return (
    <div ref={ref => container.current = ref} style={{opacity: 1, marginTop: navbarHeight.height}}>
      <header style={{
              backgroundColor: "white",
              minHeight: window.innerHeight - navbarHeight.height,
      // marginLeft: (container.current.offsetWidth - (window.innerWidth/2 < 300 ? 300 : window.innerWidth/1.15)) / 2,
              fontSize: 25,
          //  border: '1px solid',
          //   borderColor: "#25b831",
          // height: containerHeight == null ? 0 : containerHeight - navbarHeight.height ,
              width: '100%',
              textAlign: "center",
          //  paddingLeft: container.current.offsetWidth == null ? 0 : container.current.offsetWidth/ 10,
          // paddingRight: container.current.offsetWidth == null ? 0 : container.current.offsetWidth / 10,
              paddingTop: containerState.height == null ? 0 : containerState.height/ 30,
          //  paddingBottom: containerHeight == null ? 0 : containerHeight/ 12
      }}>
                    <div style={{
                      width: containerState.width,
                      marginLeft: (window.innerWidth - containerState.width) > 0 ? (window.innerWidth - containerState.width)/2 : 0
                    }}>Наша компания много лет работает в сфере строительства и продажи многоквартирных домов. Мы имеем богатый опыт в этой сфере и предлагаем качественные квартиры по самым демократичным ценам в Ростове и Ярославской области. Наши специалисты готовы оказать Вам помощь с выбором помещения с учетом Ваших потребностей. Мы предлагаем широкий выбор готовых решений, но также работаем по Вашим проектам, реализуя любые пожелания.
                    Для строительства мы используем только проверенные материалы, закупая их напрямую от поставщиков. Это позволяет нам снизить издержки, а также конечную стоимость жилья.
                    При заказе в нашей компании, мы готовы предложить индивидуальный подход и полное сопровождение – от выбора проекта до заселения. В нашем штате только опытные проектировщики, мастера и монтажники. Мы сделаем все, чтобы Вы остались довольны нашим сервисом и нашими услугами. </div>
                        
      </header>
     
    </div>
  );
}
const About = observer(AboutComp)
export default About;
