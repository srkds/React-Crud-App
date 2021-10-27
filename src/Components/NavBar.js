import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core"
import { NavLink } from "react-router-dom"

// adding external css for changing navbar color
const useStyle = makeStyles({
    header: {
        background: '#111111'
    },
    tabs:{
        color: '#FFFFFF',
        textDecoration: "none",
        marginRight: 20,
        fontSize: 20
    }
})

const NavBar = () => {
    // importing styles
    const classes = useStyle()
    return (
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <NavLink className={classes.tabs} to="/" exact>CRUD App</NavLink>
                <NavLink className={classes.tabs} to="/allusers" exact>All Users</NavLink>
                <NavLink className={classes.tabs} to="/adduser" exact>Add User</NavLink>
            </Toolbar>
        </AppBar>
    )
}
export default NavBar