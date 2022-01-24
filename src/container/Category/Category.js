import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import Layout from '../../components/Layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../actions'
import Input from '../../components/UI/Input/Input'
import { addCategory } from '../../actions/category.actions'
import NewModal from '../../components/UI/Modal/Modal';




const Category = () => {
    const category = useSelector(state => state.category)
    const [categoryName, setCategoryName] = useState('')
    const [parentCategoryId, setParentCategoryId] = useState('')
    const [categoryImage, setCategoryImage] = useState('')




    const dispatch = useDispatch()



    const [show, setShow] = useState(false);

    const handleClose = () => {

        const form = new FormData()
        form.append('name', categoryName)
        form.append('parentId', parentCategoryId)
        form.append('categoryImage', categoryImage)
        dispatch(addCategory(form))
        setCategoryName('')
        setParentCategoryId('')
        setShow(false);
    }
    const handleShow = () => setShow(true);

    const renderCategories = (categories) => {
        let myCategories = []
        for (let category of categories) {
            myCategories.push(
                <li key={Math.random()}>
                    {category.name}
                    {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
                </li>
            )
        }
        return myCategories;
    }



    const createCategoryList = (categories, options = []) => {
        for (let category of categories) {
            options.push({ value: category._id, name: category.name })
            if (category.children.length > 0) {
                createCategoryList(category.children, options)
            }
        }
        return options;
    }


    const handelCategoryImage = (e) => {
        setCategoryImage(e.target.files[0])
    }

    return (
        <>
            <Layout sidebar>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h3>Category</h3>
                                <button onClick={handleShow}>Add</button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <ul>
                                {renderCategories(category.categories)}
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <NewModal
                    show={show}
                    handleClose={handleClose}
                    modalTitle={'Add New Category'}
                >
                    <Input
                        value={categoryName}
                        placeholder={'Category Name'}
                        onChange={(e) => setCategoryName(e.target.value)}
                    />

                    <select className="form-control" onChange={(e) => setParentCategoryId(e.target.value)} value={parentCategoryId}>
                        <option>Select Category</option>
                        {
                            createCategoryList(category.categories).map(option =>
                                <option key={option.value} value={option.value}>{option.name}</option>)
                        }
                    </select>
                    <input type='file' name='categoryImage' onChange={handelCategoryImage} />
                </NewModal>

            </Layout>
        </>
    );
};

export default Category;
