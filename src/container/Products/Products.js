import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout'
import { Container, Row, Col, Table } from 'react-bootstrap';
import Input from '../../components/UI/Input/Input'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../../actions/product.actions'
import NewModal from '../../components/UI/Modal/Modal';


const Products = () => {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [productPictures, setProductPictures] = useState([]);
    const [show, setShow] = useState(false);
    const categoryss = useSelector((state) => state.category);
    const product = useSelector(state => state.product);
    const dispatch = useDispatch()




    const handleClose = () => {
        const form = new FormData()
        form.append('name', name)
        form.append('quantity', quantity)
        form.append('price', price)
        form.append('description', description)
        form.append('category', category)

        for (let pic of productPictures) {
            form.append('productPictures', pic)
        }

        dispatch(addProduct(form))

        setShow(false);
    }
    const handleShow = () => setShow(true);



    const createCategoryList = (categories, options = []) => {
        for (let category of categories) {
            options.push({ value: category._id, name: category.name })
            if (category.children.length > 0) {
                createCategoryList(category.children, options)
            }
        }
        return options;
    }

    const handleProductPictures = (e) => {
        setProductPictures([
            ...productPictures,
            e.target.files[0]
        ])
    }

    const renderProducts = () => {
        return (<Table responsive="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Description</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {
                    product.products.length > 0 ?
                        product.products.map(product =>
                            <tr key={Math.random()}>
                                <td>1</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.description}</td>
                                <td>--</td>
                            </tr>
                            ) : null
            }
            </tbody>
        </Table>)
    }

    return (
        <>
            <Layout sidebar>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h3>Products</h3>
                                <button onClick={handleShow}>Add</button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {renderProducts()}
                        </Col>
                    </Row>
                </Container>
                <NewModal
                    show={show}
                    modalTitle={'Add New Product'}
                    handleClose={handleClose}
                >
                    <Input
                        lable='Name'
                        value={name}
                        placeholder={'Product Name'}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        lable='Quantity'
                        value={quantity}
                        placeholder={'Quantity'}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <Input
                        lable='Price'
                        value={price}
                        placeholder={'Price'}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <Input
                        lable='Description'
                        value={description}
                        placeholder={'Description'}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <select className="form-control"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)} >
                        <option>Select Category</option>
                        {
                            createCategoryList(categoryss.categories).map(option =>
                                <option key={option.value} value={option.value}>{option.name}</option>)
                        }
                    </select>
                    {
                        productPictures.length > 0 ?
                            productPictures.map((pic, index) => <div key={index}>{pic.name}</div>) :
                            null
                    }
                    <input type="file"
                        name="productPictures"
                        onChange={handleProductPictures} />
                </NewModal>
            </Layout>
        </>
    );
};

export default Products;
