import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import Input from '../../components/UI/Input/Input'
const Signin = () => {
    return (
        <>
            <Layout>
                <Container>
                    <Row style={{ marginTop: '50px' }}>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form>
                                <Input
                                    Label="Email "
                                    type="email"
                                    placeholder="Email Address"
                                    value=""
                                    onChange={() => { }}
                                />

                                <Input
                                    Label="Password"
                                    type="password"
                                    placeholder="Password"
                                    value=""
                                    onChange={() => { }}
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

export default Signin
