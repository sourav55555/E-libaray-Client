import * as React from 'react';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';

import toast, { Toaster } from 'react-hot-toast';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditBook({ book, setReload, reload }) {
    const [open, setOpen] = React.useState(false);

    const { _id, name, image, category, price, description } = book || {};


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <button className='py-2 bg-green-600 text-white rounded-xl hover:bg-green-900 transition-all duration-300' onClick={handleClickOpen}>Edit Book</button>
            <Toaster />
            <Dialog

                open={open}
                TransitionComponent={Transition}
                onClose={handleClose}
                keepMounted
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries((formData).entries());
                        console.log(formJson);

                        fetch(`https://e-library-server-i7c9.onrender.com/book/${_id}`, {
                            method: "PATCH",
                            headers: {
                                "content-type": "application/json",
                                authorization: `Bearer ${localStorage.getItem("token")}`
                            },
                            body: JSON.stringify(formJson)
                        })
                            .then(res => res.json())
                            .then((data) => {console.log(data); 
                            toast.success('Successfully updated!');
                            setReload(!reload);
                            })

                        handleClose();
                    },
                }}
            >
                <DialogTitle>Edit Your Book Details</DialogTitle>
                <DialogContent sx={{ width: 430 }}>

                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="name"
                        label="Update Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        defaultValue={name}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="price"
                        name="price"
                        label="Update Price"
                        type="number"
                        fullWidth
                        variant="standard"
                        defaultValue={price}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="category"
                        name="category"
                        label="Update Category"
                        type="text"
                        fullWidth
                        variant="standard"
                        defaultValue={category}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="image"
                        name="image"
                        label="Update Image Url"
                        type="text"
                        fullWidth
                        variant="standard"
                        defaultValue={image}
                    />
                    <TextField
                        autoFocus
                        multiline
                        rows={4}
                        required
                        margin="dense"
                        id="description"
                        name="description"
                        label="Update Description"
                        type="text"
                        fullWidth
                        variant="standard"
                        defaultValue={description}
                    />
                </DialogContent>
                <DialogActions sx={{ m: 1 }}>
                    <Button onClick={handleClose} >Cancel</Button>
                    <Button type="submit" color='warning' variant="outlined">Update</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

