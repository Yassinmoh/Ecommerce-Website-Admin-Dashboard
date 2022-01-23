import React , {useState , useEffect} from 'react'
import Layout from '../../components/Layout/Layout'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import Input from '../../components/UI/Input/Input'
import {login} from '../../actions'
import {useDispatch, useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'


const Signin = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const auth =useSelector(state => state.auth)



    const dispatch = useDispatch()


    

    const userLogin = (e)=>{
        e.preventDefault()
        const user={
            email,password
        }
        
        dispatch(login(user))
    }

    if(auth.authenticate){
        return <Navigate to={'/'}/>
    }


    return (
        <>
            <Layout>
                <Container>
                    <Row style={{ marginTop: '50px' }}>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form onSubmit={userLogin}>
                                <Input
                                    Label="Email "
                                    type="email"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <Input
                                    Label="Password"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) =>  setPassword(e.target.value)}
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
