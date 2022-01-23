import React ,{ useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import Input from '../../components/UI/Input/Input'
import {Navigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { signup } from '../../actions'


const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [error, setError] = useState('')
    const dispatch= useDispatch() 
    const user =useSelector(state => state.user)
    const auth =useSelector(state => state.auth)
    

    const userSignup =(e)=>{
        e.preventDefault()
        const user={firstName, lastName,email,password}
        dispatch(signup(user))
    }


    if(auth.authenticate){
        return <Navigate to={'/'}/>
    }

    if(user.loading){
        return <p>Loading...</p>
    }

    return (
        <>
            <Layout>
                <Container>
                    <Row style={{ marginTop: '50px' }}>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form onSubmit={userSignup}>
                                
                                <Row>
                                    <Col md={6}>
                                        <Input
                                        Label="First Name"
                                        type="text"
                                        placeholder="First Name"
                                        value={firstName}
                                        onChange={(e)=>{setFirstName(e.target.value)}}
                                        />
                                    </Col>

                                    <Col md={6}>
                                    <Input
                                        Label="Last Name"
                                        type="text"
                                        placeholder="Last Name"
                                        value={lastName}
                                        onChange={(e)=>{setLastName(e.target.value)}}
                                        />
                                    </Col>

                                </Row>
                                <Input
                                        Label="Email "
                                        type="email"
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={(e)=>{setEmail(e.target.value)}}
                                        />
                                    

                                    <Input
                                        Label="Password"
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e)=>{setPassword(e.target.value)}}
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
