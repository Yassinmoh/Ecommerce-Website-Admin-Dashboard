import React from "react";
import Input from '../../../components/UI/Input/Input'
import NewModal from '../../../components/UI/Modal/Modal'
import {Col , Row} from 'react-bootstrap'
const UpdateCategoriesModal = (props) => {

    const {size,show,handleClose,modalTitle,expandedArray,checkedArray , handelCategoryInput,categoryList}=props

    return (

        <NewModal

            show={show}
            handleClose={handleClose}
            modalTitle={modalTitle}
            size={size}
        >
            <Row>
                <Col>
                    <h6>Expanded</h6>
                </Col>
            </Row>
            {
                expandedArray.length > 0 &&
                expandedArray.map((item, index) =>
                    <Row key={index}>
                        <Col>
                            <Input
                                value={item.name}
                                placeholder={'Category Name'}
                                onChange={(e) => handelCategoryInput('name', e.target.value, index, 'expanded')}
                            />
                        </Col>
                        <Col>
                            <select className="form-control"
                                onChange={(e) => handelCategoryInput('parentId', e.target.value, index, 'expanded')}
                                value={item.parentId}>
                                <option>Select Category</option>
                                {
                                    categoryList.map(option =>
                                        <option key={option.value} value={option.value}>{option.name}</option>)
                                }
                            </select>
                        </Col>
                        <Col>
                            <select className="form-control">
                                <option value="">Select Type</option>
                                <option value="store">Store</option>
                                <option value="product">Product</option>
                                <option value="page">Page</option>
                            </select>
                        </Col>
                    </Row>
                )
            }

            <h6>Checked Categories</h6>

            {
                checkedArray.length > 0 &&
                checkedArray.map((item, index) =>
                    <Row key={index}>
                        <Col>
                            <Input
                                value={item.name}
                                placeholder={'Category Name'}
                                onChange={(e) => handelCategoryInput('name', e.target.value, index, 'checked')}
                            />
                        </Col>
                        <Col>
                            <select className="form-control"
                                onChange={(e) => handelCategoryInput('parentId', e.target.value, index, 'checked')}
                                value={item.parentId}>
                                <option>Select Category</option>
                                {
                                    categoryList.map(option =>
                                        <option key={option.value} value={option.value}>{option.name}</option>)
                                }
                            </select>
                        </Col>
                        <Col>
                            <select className="form-control">
                                <option value="">Select Type</option>
                                <option value="store">Store</option>
                                <option value="product">Product</option>
                                <option value="page">Page</option>
                            </select>
                        </Col>
                    </Row>
                )
            }
        </NewModal>
    );
}

export default UpdateCategoriesModal