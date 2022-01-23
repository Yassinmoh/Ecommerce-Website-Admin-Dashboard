import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Row, Col, Container } from 'react-bootstrap';
import './home.css';
import { NavLink } from 'react-router-dom';




const Home = () => {


    return (
        <>
            <Layout>
                <Container fluid>
                    <Row>
                        <Col md={2} className='sidebar'>
                            <ul>
                                <li><NavLink to={'/'}>Home</NavLink></li>
                                <li><NavLink to={'/products'}>Products</NavLink></li>
                                <li><NavLink to={'/orders'}>Orders</NavLink></li>
                            </ul>
                        </Col>
                        <Col md={10} className='con'>container</Col>
                    </Row>
                </Container>





                {/* <div className="p-5  text-center" style={{ backgroundColor: '#e9ecef' , margin:'5rem'}}>
                    <h1>Welcome to Admin Dashboard</h1>
                    <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div> */}
            </Layout>
        </>
    )
}

export default Home
