import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const DeleteBtn = (props) => {

    const handleDelete = () => {
        if(window.confirm('Are you sure you want to remove this item?')){
            fetch(`https://jm-shop-api.herokuapp.com/api/inventory/${props.inventory._id}`, {
                method: "DELETE",
            })
            .then(console.log("DELETE"))
        };
        
    };

    return (
        <div id="delete_btn_container">
            <DeleteIcon onClick={ () => handleDelete() }/>
        </div>
    )
};

export default DeleteBtn;