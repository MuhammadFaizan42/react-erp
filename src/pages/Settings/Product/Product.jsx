import React from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SupplierGrid from '../../Dashboard/components/supplierGridTable';
import AddCustomer from './AddProduct';
import AddProduct from './AddProduct';

const Product = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

            const handleClick = (event) => {
                setAnchorEl(event.currentTarget);
            };

            const handleClose = () => {
                setAnchorEl(null);
            };

            const open = Boolean(anchorEl);
            const id = open ? 'simple-popover' : undefined;
return (
    <div className="right-content w-100" >
    <div className="card shadow border-0 p-3 mt-4">
        <div className="d-flex justify-content-between align-items-center">
            <h3 className="hd">Product</h3>
            <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                Add New
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <Typography sx={{ p: 2 }}><AddProduct onClose={handleClose}/></Typography>
                </Popover>  
                    
        </div>
    </div>


    <div className='card shadow border-0 p-3 mt-4'>
            <h3 className='hd'>Product Detail</h3>
        <div className='row cardFilter'>
            <div className="col justify-content-center">
                <SupplierGrid/>
            </div>
        </div>
    </div>
</div>
)
}

export default Product;