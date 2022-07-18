import { set } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useContext, useRef, useState } from "react";
import { Container, Button, Navbar, Row, Card, Col } from "react-bootstrap";
import { Context } from "..";

function DevelopComp() {
  const {navbarHeight} = useContext(Context)
  const container = useRef('')
  const currentWidth = window.innerWidth < 900 ? '100%' : 900

  function importAll(r) {
   // console.log(r.keys().map(r));
    return r.keys();
  }
  let images = importAll(require.context('../assets/admin-building/', false, /\.(png|jpe?g|svg)$/)).map(require.context('../assets/admin-building/', false, /\.(png|jpe?g|svg)$/));
  //console.log(navbarHeight.height)

  let buildingsImages = importAll(require.context('../assets/buildings/', false, /\.(png|jpe?g|svg)$/)).map(require.context('../assets/buildings/', false, /\.(png|jpe?g|svg)$/));
  return (
    <div ref={ref => container.current = ref} style={{opacity: 1, marginTop: navbarHeight.height, textAlign: 'center'}}>
      <header style={{fontSize: 24, paddingBottom: 20}}>
    Административное здание напротив вокзала в городе Ростов
  </header>
     <Row xs={1} md={4} className="g-4" style={{marginLeft: 'auto', marginRight: 'auto'}}>
  
  {Array.from({ length: images.length * 2 }).map((_, idx) => ( <Col key={idx}>
    <Card style={{display: images[idx - 1] == undefined ? 'none' : ''}}>
        <Card.Img variant="top" src={images[idx - 1]} />
      </Card>
    </Col>
  ))}
</Row>
<header style={{fontSize: 24, marginTop: navbarHeight.height, paddingBottom: 20}}>
    Наши последние работы
  </header>
  <Row xs={1} md={3} className="g-4" style={{marginLeft: 'auto', marginRight: 'auto'}}>
  
  {Array.from({ length: buildingsImages.length }).map((_, idx) => ( <Col style={{marginLeft: 'auto', marginRight: 'auto'}} key={idx}>
    <Card style={{width: '70%', border: 'none'}}>
        <Card.Img style={{marginLeft: '25%', aspectRatio: '1/1', objectFit: 'cover'}} variant="top" src={buildingsImages[idx]} />
      </Card>
    </Col>
  ))}
</Row>
    </div>
  );
}
const Develop = observer(DevelopComp)
export default Develop;
