import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1
    },
    navbarLink: { // refactor: this should be a global change?
        color: 'white',
        textDecoration: 'none'
    },
    navbarBrand: {
        color: 'black',
        textDecoration: 'none'
    }
}))

export default function Navbar({ title, icon }) {
    const classes = useStyles()

    const initLinks = (
        <React.Fragment>
            <Button>
                <Link to="/new_event" className={classes.navbarLink}>
                    Add Event
                </Link>
            </Button>
            <Button>
                <Link to="/login" className={classes.navbarLink}>
                    <i className="fas fa-sign-in-alt"></i> Log In
                </Link>
            </Button>
            <Button>
                <Link to="/about" className={classes.navbarLink}>
                    About
                </Link>
            </Button>
        </React.Fragment>
    )

    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' className={classes.title}>
                    <Link to="/" className={classes.navbarBrand}><i className={icon} /> {title}</Link>
                </Typography>
                {initLinks}
            </Toolbar>
        </AppBar>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
}

Navbar.defaultProps = {
    title: '',
    icon: ''
}
