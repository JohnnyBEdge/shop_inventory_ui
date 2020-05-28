import React, {useState} from 'react';

import Modal from '@material-ui/core/Modal';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const EditModal = () => {
    const [open, setOpen] = useState(false);    

    const toggleModal = () => {
        if(open){
            setOpen(false);
        } else {
            setOpen(true)
        };
    };
      
    const useStyles = makeStyles((theme) => ({
        paper: {
          position: 'absolute',
          width: 400,
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
          top: 100,
          left: '37%',
        },
        button: {
            margin: theme.spacing(3, 0, 2),
          },
        input: {
            margin: theme.spacing(1,0,1)
        }
      }));

    const classes = useStyles();


    return (
        <div id="edit_modal_container">
            <EditIcon onClick={toggleModal} />
            <Modal
                open={open}
                onClose={toggleModal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >

                <div className={classes.paper}>
                    <h2 id="simple-modal-title">Edit Item</h2>
                    <TextField
                        name="name"
                        variant="outlined"
                        required
                        fullWidth
                        id="name"
                        label="Item Name"
                        className={classes.input}
                    />
                    <TextField
                        name="quantity"
                        variant="outlined"
                        required
                        fullWidth
                        id="quantity"
                        label="Quantity"
                        className={classes.input}
                    />
                    <TextField
                        name="price"
                        variant="outlined"
                        required
                        fullWidth
                        id="price"
                        label="Price"
                        className={classes.input}
                    />
                    <TextField
                        name="desc"
                        variant="outlined"
                        required
                        fullWidth
                        id="desc"
                        label="Description"
                        className={classes.input}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.button}
                    >
                        Update
                    </Button>                                                        
                    <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        onClick={() => toggleModal()}
                    >
                        Cancel
                    </Button>                                                        
                </div>


            </Modal>
        </div>
    )
};

export default EditModal;