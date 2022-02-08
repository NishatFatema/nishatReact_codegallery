import React from "react"
import { Col, Row, DropdownButton, Dropdown, Container,Form, Button,Card } from "react-bootstrap"
import { MeaningList } from "./MeaningList"

import "./Dictionary.css"

export const DictionaryC=({handleSearch, resData, setWord})=>{

  

    return(

        <div >
           <Container className="overall">
               <h1> E-Dictionary</h1>
              
               <Form>
                 
                <Row>
                   <div className="subDiv1">
                     <Row>
                      <Col md={8}>
                       <Col>

                     {/* <i class="fas fa-search"></i> */}
                     <Form.Control  type="search " placeholder=" Search Word">onChange={(e)=>setWord(e.target.value)}</Form.Control>
                     <Button onClick={handleSearch}>Search</Button>
                     
                     </Col>

                     </Col>

                     <Col md={4}>
                      <Col>
                        <DropdownButton id="dropdown-basic-button" title="Dropdown button">

                         <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                         <Dropdown.Item href="#/action-2">Urdu</Dropdown.Item>
                         <Dropdown.Item href="#/action-3">Marathi</Dropdown.Item>
                         <Dropdown.Item href="#/action-3">Arabic</Dropdown.Item>
                         <Dropdown.Item href="#/action-3">French</Dropdown.Item>

                        </DropdownButton>
                        </Col>
                    </Col>
                    
                    </Row></div>

       <Row>
         <Col md={8}>
                    <Col>
                    <Form.Control  type="text " placeholder=" pronounciation"></Form.Control>
                    <Button>Play</Button>
                    </Col>
          </Col>
      </Row>
                    
<div className="subDiv2">
             <Row>

                   <Col md = {6}>
                     <Col>
                    <Card body>Meaning of product

                    {resData.map((item)=>(
                      item.MeaniningList.length>0 &&<MeaningList item={item}/>
                         ))}
                    
                    
                    </Card>
                    </Col>
                    </Col>
                   

                    <Col md={6}>
                        <Col>
                        <Card>
  <Card.Header as="h5">Synonymes</Card.Header>
  <Card.Body>
    <Card.Title>Word</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>

  </Card.Body>

 
                    </Card>
                     </Col>
                     </Col>

               </Row>


            <Row>
                    <Col>
                     <Col md={12}>
                    
                    <Card body>pace of product
                   {resData.map((item)=>(
                     item.MeaniningList.length>0 && <MeaningList item={item}/>
                         ))}
                    
                    </Card>
                    </Col>
                    </Col>
                    

                    <Col md={6}>
                        <Col>
                        <Card>
  <Card.Header as="h5">Antonymes</Card.Header>
  <Card.Body>
  <Card.Title>Word</Card.Title>
  <Card.Text>
      With supporting text below as a natural lead-in to additional content.
  </Card.Text>

  </Card.Body>
                    </Card>
                     </Col>
                     </Col>

              </Row>
</div>  

                   



            
            </Row>
        </Form>

</Container>
        
        
        </div>



    )
}
