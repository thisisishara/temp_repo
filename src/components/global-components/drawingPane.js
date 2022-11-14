import React, { useCallback, useEffect, useRef, useState } from 'react';
import axios from "axios";
import { Container, Row } from 'reactstrap';
import {Form,Button, Col,Card,Table, Overlay,Modal, ProgressBar} from 'react-bootstrap';
import { Rings } from 'react-loader-spinner';

const colors = [
  "red",
  "green",
  "yellow",
  "black",
  "blue"
]

function DrawingPane() {
  const canvasRef = useRef(null);
  const ctx = useRef(null);
  const [show, setShow] = useState(false);
  const [stage, setStage] = useState(null);
  const [modelShow, setModelShow] = useState(false);
  const [msg, setMsg] = useState(null);
  const [selectedColor, setSelectedColor] = useState(colors[3]);
  const [mouseDown, setMouseDown] = useState(false);
  const [level, setLevel] = useState("1");
  const [loader, setLoader] = useState(false);
  const [lastPosition, setPosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext('2d');
    }
    sessionStorage.setItem('skill', null);
  }, []);

  const draw = useCallback((x, y) => {
    if (mouseDown) {
      ctx.current.beginPath();
      ctx.current.strokeStyle = selectedColor;
      ctx.current.lineWidth = 10;
      ctx.current.lineJoin = 'round';
      ctx.current.moveTo(lastPosition.x, lastPosition.y);
      ctx.current.lineTo(x, y);
      ctx.current.closePath();
      ctx.current.stroke();

      setPosition({
        x,
        y
      })
    }
  }, [lastPosition, mouseDown, selectedColor, setPosition])

  const check = async () => {
    setShow(false);
    setLoader(true);
    const image = canvasRef.current.toDataURL('image/png');
    const blob = await (await fetch(image)).blob();
    const blobURL = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const val = await fetch(image);

    const data = new FormData();
    data.append('level',level);
    data.append('url', val.url);
    data.append('filename', "aa");
    data.append('uname', "dsc")

    let currentComponent = this;

    axios({
        url: 'http://localhost:5000/checkSketch',
        method: "POST",
        data:data
    }).then((response) => {
        console.log(response.data)
        sessionStorage.setItem('class', response.data['class']);
        sessionStorage.setItem('score', response.data['score']);
        if(response.data['score'] < 45){
          console.log("awaa")
          sessionStorage.setItem('skill', "Low");
        }else if(response.data['score'] >= 45 && response.data['score'] < 75){
          console.log("awaa")
          sessionStorage.setItem('skill', "Medium");
        }else{
          console.log("awaa")
          sessionStorage.setItem('skill', "High");
        }
        setLoader(false);
        setShow(true);
    });
  }

  const download = async () => {
    const image = canvasRef.current.toDataURL('image/png');
    const blob = await (await fetch(image)).blob();
    const blobURL = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobURL;
    link.download = "image.png";;
    link.click();
  }

  const clear = () => {
    ctx.current.clearRect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height)
  }

  const onMouseDown = (e) => {
    var rect =  ctx.current.canvas.getBoundingClientRect()
    setPosition({
      x: e.pageX - rect.left,
      y: e.pageY - rect.top
    })
    setMouseDown(true)
  }

  const onMouseUp = (e) => {
    setMouseDown(false)
  }

  const onMouseMove = (e) => {
    var rect =  ctx.current.canvas.getBoundingClientRect()
    draw(e.pageX - rect.left, e.pageY - rect.top)
  }

  const save = (e) => {
    const data = new FormData();
    data.append('uname',sessionStorage.getItem('userName') );
    data.append('category', sessionStorage.getItem('class'));
    data.append('score', sessionStorage.getItem('score'))
    data.append('skill', sessionStorage.getItem('level'))
    data.append('stage', stage)

    axios({
        url: 'http://localhost:5000/saveSketch',
        method: "POST",
        data:data
    }).then((response) => {
        console.log(response.data)
        if(response.data == "success"){
          setMsg("Successfully Saved !");
          setModelShow(true);  
      }else{
          setMsg("Failed !");
          setModelShow(true);    
      }
    });
  }

  const closeModal = (e) =>{
    setModelShow(false);  
  }

  const clearResult = (e) => {
    sessionStorage.setItem('class', null);
    sessionStorage.setItem('score', null);
    sessionStorage.setItem('skill', null);
    setShow(false);

  }

  const selectStage = (e) => {
    setStage(e.target.value);
  }

  const selectType = (e) => {
    setLevel(e.target.value)
  }

  return (
    <div className="App">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Col md={3}>
              <Form.Group controlId="type">
                    <Form.Control as="select" className="stage" onChange={selectType}>
                        <option value='1' selected>Level 01</option>
                        <option value='2'>Level 02</option>
                        <option value='3'>Level 03</option>
                    </Form.Control>
                 </Form.Group>
                 <br/>
                 {
                    level == '1' ?
                    <div className='level'>
                        <p>Letter T<br/> Circle<br/> Pencil<br/> Grapes<br/> Star</p>
                    </div>
                    :null
                 }
                 {
                    level == "2"?
                    <div className='level'>
                        <p>Leaf<br/> Square<br/> Sun<br/> Flower<br/> Mango</p>
                    </div>
                    :null
                 }
                 {
                    level == "3"?
                    <div className='level'>
                      <p>Apple<br/> Tree<br/> Kite<br/> Letter X<br/> Triangle</p>
                    </div>
                    :null
                 }
                <br/>
                <select className="color_select"
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                >
                  {
                    colors.map(
                      color => <option key={color} value={color}>{color}</option>
                    )
                  }
                </select>
                <br/>  <br/>
                <button className="clear" onClick={clear}>Clear</button>
                <br/>  <br/>
                <button className="download" onClick={download}>Download</button>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        
        <Col>
          <Card>
            <Card.Body>
              <Col md={6}>
                <canvas classNmae="canvas"
                  style={{
                    border: "1px solid #000",
                  }}
                  width={600}
                  height={500}
                  ref={canvasRef}
                  onMouseDown={onMouseDown}
                  onMouseUp={onMouseUp}
                  onMouseLeave={onMouseUp}
                  onMouseMove={onMouseMove}
                />
              </Col>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Col md={12}>
                
              <div class="column2-drawing">
                            <p>Results</p>
                            <br/>
                            {
                            show == false && loader==true?
			                      <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
				                      <Rings
					                      type="Circles"
					                      color="#00BFFF"
					                      height={100}
					                      width={100}
				                      />
			                      </div>
                            :null
                            }
                            {
                              show == true?
                                <div className='results_details'>
                                  <img src={"/assets/img/category/"+ sessionStorage.getItem('class') + ".png"} className="" alt="logo" height="140px" width="250px"></img>
                                  <h3>{ sessionStorage.getItem('class')}</h3>
                                  <p>Probability : { sessionStorage.getItem('score')}%</p>
                                  <p>Skill Level: { sessionStorage.getItem('skill')}</p>
                                </div>
                            :null
                            }

                            <Button className='load_btn' onClick={check}>Load</Button>
                            <Button className='clear_btn' onClick={clearResult}>Clear</Button>
                            <br/><br/>
                            <Form.Group controlId="stage">
                                <Form.Control as="select" className="stage" onChange={selectStage}>
                                    <option value='' selected disabled>Select Stage</option>
                                    <option value='initial'>Initial</option>
                                    <option value='final'>Final</option>
                                </Form.Control>
                            </Form.Group> 
                            <br/>
                            <Button className='save_btn' onClick={save}>Save</Button>
                        </div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={modelShow}>
                            <Modal.Header className="model_hdr">Results</Modal.Header>
                            <Modal.Body>
                                <Table responsive hover>
                                    <tbody>
                                       
                                        <tr className="unread">
                                        <td>
                                        <h6 className="mb-1"></h6>
                                      
                                        <p className="m-0" style={{fontSize:'20px'}}><strong>{msg}</strong></p><br/>
                                        
                                        </td>
                                        </tr>
                                      
                                      
                                    </tbody>
                                </Table>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={closeModal}>Close</Button>
                            </Modal.Footer>
            </Modal>
    </div>
  );
}

export default DrawingPane;
