import React from "react";
import Input from "../../../components/UI/Input/Input";
import NewModal from "../../../components/UI/Modal/Modal";
import {Row , Col} from'react-bootstrap'



const AddCategoryModal = (props) => {

    const {show , 
            handleClose , 
            modalTitle,
            categoryName,
            setCategoryName,
            parentCategoryId,
            setParentCategoryId, 
            categoryList,
            handelCategoryImage,
        }=props;

    return (
        <NewModal
            show={show}
            handleClose={handleClose}
            modalTitle={modalTitle}
        >
            <Input
                value={categoryName}
                placeholder={'Category Name'}
                onChange={(e) => setCategoryName(e.target.value)}
            />

            <select className="form-control" onChange={(e) => setParentCategoryId(e.target.value)} value={parentCategoryId}>
                <option>Select Category</option>
                {
                    categoryList.map(option =>
                        <option key={option.value} value={option.value}>{option.name}</option>)
                }
            </select>
            <input type='file' name='categoryImage' onChange={handelCategoryImage} />
        </NewModal>
    );
}
export default AddCategoryModal