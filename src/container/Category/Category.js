import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import Layout from '../../components/Layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../../components/UI/Input/Input'
import { addCategory, updateCategories, getAllCategory, deleteCategories as deleteCategoriesAction } from '../../actions/category.actions'
import NewModal from '../../components/UI/Modal/Modal';
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import {
    IoMdCheckboxOutline,
    IoMdCheckbox,
    IoIosArrowForward,
    IoIosArrowDown
} from "react-icons/io";
import UpdateCategoriesModal from './components/UpdateCategoriesModal'
import AddCategoryModal from './components/AddCategoryModal'





const Category = () => {
    const category = useSelector(state => state.category)
    const [categoryName, setCategoryName] = useState('')
    const [parentCategoryId, setParentCategoryId] = useState('')
    const [categoryImage, setCategoryImage] = useState('')
    const [show, setShow] = useState(false)
    const [checked, setChecked] = useState([])
    const [expanded, setExpanded] = useState([])
    const [checkedArray, setCheckedArray] = useState([])
    const [expandedArray, setExpandedArray] = useState([])
    const [updateCategoryModal, setUpdateCategoryModal] = useState(false)
    const [deleteCategoryModal, setDeleteCategoryModal] = useState(false)
    const dispatch = useDispatch()







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
                {
                    label: category.name,
                    value: category._id,
                    children: category.children.length > 0 && renderCategories(category.children)
                }

                // <li key={Math.random()}>
                //     {category.name}
                //     {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
                // </li>
            )
        }
        return myCategories;
    }



    const createCategoryList = (categories, options = []) => {
        for (let category of categories) {
            options.push({ value: category._id, name: category.name, parentId: category.parentId })
            if (category.children.length > 0) {
                createCategoryList(category.children, options)
            }
        }
        return options;
    }


    const handelCategoryImage = (e) => {
        setCategoryImage(e.target.files[0])
    }

    const updateCategory = () => {
        updateCheckedAndExpandedCategories()
        setUpdateCategoryModal(true)

    }



    const updateCheckedAndExpandedCategories = () => {
        const categories = createCategoryList(category.categories)
        const checkedArray = []
        const expandedArray = []
        checked.length > 0 && checked.forEach((categoryId, index) => {
            const category = categories.find((category, _index) => categoryId == category.value)
            category && checkedArray.push(category)
        })

        expanded.length > 0 && expanded.forEach((categoryId, index) => {
            const category = categories.find((category, _index) => categoryId == category.value)
            category && expandedArray.push(category)
        })
        setCheckedArray(checkedArray)
        setExpandedArray(expandedArray)
    }




    const handelCategoryInput = (key, value, index, type) => {
        if (type == 'checked') {
            const updatedCheckedArray = checkedArray.map((item, _index) => index == _index ? { ...item, [key]: value } : item)
            setCheckedArray(updatedCheckedArray)
        } else if (type == 'expanded') {
            const updatedExpandedArray = expandedArray.map((item, _index) => index == _index ? { ...item, [key]: value } : item)
            setExpandedArray(updatedExpandedArray)
        }
    }

    const updateCategoriesForm = () => {
        const form = new FormData()
        expandedArray.forEach((item, index) => {
            form.append('_id', item.value)
            form.append('name', item.name)
            form.append('parentId', item.parentId ? item.parentId : '')
            form.append('type', item.type)
        })

        checkedArray.forEach((item, index) => {
            form.append('_id', item.value)
            form.append('name', item.name)
            form.append('parentId', item.parentId ? item.parentId : '')
            form.append('type', item.type)
        })

        dispatch(updateCategories(form))
            .then(result => {
                if (result) {
                    dispatch(getAllCategory())
                }
            })


        setUpdateCategoryModal(false)
    }




    const deleteCategory = () => {
        updateCheckedAndExpandedCategories()
        setDeleteCategoryModal(true);
    }

    const deleteCategories = () => {
        const checkedIdsArray = checkedArray.map((item, index) => ({ _id: item.value }))
        const expandedIdsArray = expandedArray.map((item, index) => ({ _id: item.value }))
        const idsArray = expandedIdsArray.concat(checkedIdsArray)
        if (checkedIdsArray.length > 0) {
            dispatch(deleteCategoriesAction(checkedIdsArray))
                .then(result => {
                    if (result) {
                        dispatch(getAllCategory())
                        setDeleteCategoryModal(false)
                    }
                })
        }
    }

    const renderDeleteCategoryModal = () => {
        return (
            <NewModal
                modalTitle="Confirm"
                show={deleteCategoryModal}
                handleClose={() => setDeleteCategoryModal(false)}
                buttons={[
                    {
                        label: 'No',
                        color: 'primary',
                        onClick: () => {
                            alert('no')
                        }
                    },
                    {
                        label: 'Yes',
                        color: 'danger',
                        onClick: deleteCategories
                    }
                ]}
            >
                <h5>Expanded</h5>
                {expandedArray.map((item, index) => <span key={index}>{item.name}</span>)}
                <h5>Checked</h5>
                {checkedArray.map((item, index) => <span key={index}>{item.name}</span>)}

            </NewModal>
        )
    }
    const categoryList= createCategoryList(category.categories)
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
                            {/* <ul>
                                {renderCategories(category.categories)}
                            </ul> */}
                            <CheckboxTree
                                nodes={renderCategories(category.categories)}
                                checked={checked}
                                expanded={expanded}
                                onCheck={checked => setChecked(checked)}
                                onExpand={expanded => setExpanded(expanded)}
                                icons={{
                                    check: <IoMdCheckbox />,
                                    uncheck: <IoMdCheckboxOutline />,
                                    halfCheck: <IoMdCheckboxOutline />,
                                    expandClose: <IoIosArrowForward />,
                                    expandOpen: <IoIosArrowDown />,
                                }}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <button onClick={deleteCategory} >Delete</button>
                            <button onClick={updateCategory}>Edit</button>
                        </Col>
                    </Row>

                </Container>
                <AddCategoryModal
                show={updateCategoryModal}
                handleClose={updateCategoriesForm}
                modalTitle={'Add New Category'}
                categoryName={categoryName}
                setCategoryName={setCategoryName}
                parentCategoryId={parentCategoryId}
                setParentCategoryId={setParentCategoryId}
                categoryList={categoryList}
                />
                <UpdateCategoriesModal
                    show={updateCategoryModal}
                    handleClose={updateCategoriesForm}
                    modalTitle={'Update Categories'}
                    size="lg"
                    expandedArray={expandedArray}
                    checkedArray={checkedArray}
                    handelCategoryInput={handelCategoryInput}
                    categoryList={categoryList}
                />
                
                {/* {renderAddCategoryModal()} */}
                {renderDeleteCategoryModal()}
            </Layout>
        </>
    );
};

export default Category;
