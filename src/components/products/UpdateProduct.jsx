import { Button, Grid, TextField } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import ProductService from '../../services/Product';
import Admin from '../Auth/Admin';
import Auth from '../Auth/Auth';

const UpdateProduct = (props) => {
    const [pid,setId] = React.useState("");
    const [name,setName] = React.useState("");
    const [category,setCategory] = React.useState("");
    const [price,setPrice] = React.useState(0);
    const [Details,setDetails] = React.useState("");
    const [Link,setLink] = React.useState("");
    const id =props.match.params.id;
    React.useEffect(()=>{
        ProductService.getSingleProduct(id).then(data=>{
            setName(data.name);
            setId(data.pid);
            setPrice(data.price);
            setCategory(data.category);
            setDetails(data.Details);
            setLink(data.Link);
            
        })
    },[]);
    return ( 
        <Admin>
    <Grid container spacing={3}>
        
            <h1>Update Existing Product</h1>
            <TextField id="standard-basic" label="pid" fullWidth value={pid} onChange={(e=>{setId(e.target.value)})}/>      
            <TextField id="standard-basic" label="link" fullWidth value={Link} onChange={(e=>{setLink(e.target.value)})}/>
            <TextField id="standard-basic" label="name" fullWidth value={name} onChange={(e=>{setName(e.target.value)})}/>
            <TextField id="standard-basic" label="category" fullWidth value={category} onChange={(e=>{setCategory(e.target.value)})}/>
            <TextField id="standard-basic" label="Details" fullWidth value={Details} onChange={(e=>{setDetails(e.target.value)})}/>
            <TextField id="standard-basic" label="price" fullWidth value={price} onChange={(e=>{setPrice(e.target.value)})}/>
        </Grid>
            <Button variant="contained" color="primary" onClick={e=>{
            ProductService.updateProduct({pid,category,Link,name,price,Details}).then((data)=>{
                console.log(data);
                props.history.push("/products");
            }).catch(err=>{
                console.log(err);
            });
        }}>Update Product</Button>
        </Admin> );
}
 
export default UpdateProduct;