import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import Input from '../../components/UI/Input/Input'



const Signup = () => {
    return (
        <>
            <Layout>
                <Container>
                    <Row style={{ marginTop: '50px' }}>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Input
                                        Label="First Name"
                                        type="text"
                                        placeholder="First Name"
                                        value=""
                                        onChange={()=>{}}
                                        />
                                    </Col>

                                    <Col md={6}>
                                    <Input
                                        Label="Last Name"
                                        type="text"
                                        placeholder="Last Name"
                                        value=""
                                        onChange={()=>{}}
                                        />
                                    </Col>

                                </Row>
                                <Input
                                        Label="Email "
                                        type="email"
                                        placeholder="Email Address"
                                        value=""
                                        onChange={()=>{}}
                                        />
                                    

                                    <Input
                                        Label="Password"
                                        type="password"
                                        placeholder="Password"
                                        value=""
                                        onChange={()=>{}}
                                        />
                                    
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>

                </Container>
            </Layout>
        </>
    )
}

export default Signup
