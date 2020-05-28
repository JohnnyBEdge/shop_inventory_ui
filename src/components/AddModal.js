import React, {useState} from 'react';

import Modal from '@material-ui/core/Modal';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



const AddModal = (props) => {
    const [open, setOpen] = useState(false);    

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [desc, setDesc] = useState('');

    const addInventory = () => {
        fetch(`http://localhost:5100/api/inventory`, {
            method: "POST",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify({name, price, quantity, desc})
        }).then(() => {setName(''); setPrice(''); setQuantity(''); setDesc('')})
        .then(() => toggleModal())
        .then(() => props.getInventory())
    }



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
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<AddIcon />}
                onClick={toggleModal}
            >
                Add Item
            </Button>
            <Modal
                open={open}
                onClose={toggleModal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >

                <div className={classes.paper}>
                    <h2 id="simple-modal-title">Add Item</h2>
                    <TextField
                        name="name"
                        variant="outlined"
                        required
                        fullWidth
                        id="name"
                        label="Item Name"
                        className={classes.input}
                        onChange={({target}) => setName(target.value)}
                    />
                    <TextField
                        name="quantity"
                        variant="outlined"
                        required
                        fullWidth
                        id="quantity"
                        label="Quantity"
                        className={classes.input}
                        onChange={({target}) => setQuantity(target.value)}
                    />
                    <TextField
                        name="price"
                        variant="outlined"
                        required
                        fullWidth
                        id="price"
                        label="Price"
                        className={classes.input}
                        onChange={({target}) => setPrice(target.value)}
                    />
                    <TextField
                        name="desc"
                        variant="outlined"
                        required
                        fullWidth
                        id="desc"
                        label="Description"
                        className={classes.input}
                        onChange={({target}) => setDesc(target.value)}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={() => addInventory()}
                    >
                        Add
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

export default AddModal;