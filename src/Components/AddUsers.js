import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from "@material-ui/core"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { addUser } from "../Service/api"



const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *':{
            marginTop: 20
        }
    }
})

// initial values of object
const initialValues = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const AddUsers = () => {

    const [user, setUser] = useState(initialValues);

    // destructuring user's data
    const { name, username, email, phone } = user

    const classes = useStyles()

    const history = useHistory()

    // calls when user types 
    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async () => {
         await addUser(user)
         history.push('./allusers')
    }

    return (
        <FormGroup className={classes.container}>
            <Typography>Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name'/>
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' />
            </FormControl>
            <Button variant="contained" onClick={() => addUserDetails()} color="primary">Add User</Button>
        </FormGroup>
    )
}

export default AddUsers