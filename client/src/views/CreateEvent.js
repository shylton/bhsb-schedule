import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1),
        width: '25ch',
    },
}))

const validationSchema = yup.object().shape({
    name: yup
        .string('Event Name')
        .required('An event name is required.'),
    guest_count: yup.number().positive().integer(),
    start: yup.date().required('Required field').nullable(),
    end: yup.date().required().min(
        yup.ref('start', 'end time must be after start time')
    ).nullable(),
    notes: yup.string('Notes')
})

/**
 * Create Event Component
 */
const CreateEvent = () => {
    const classes = useStyles()
    const formik = useFormik({
        initialValues: {
            name: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values))
        },
    })

    return (
        <Container className={classes.root} maxWidth="sm">
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <TextField
                        id="name"
                        name="name"
                        label="Event Name"
                        className={classes.textField}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField
                        id="guest_count"
                        name="guest_count"
                        type="number"
                        label="Guest Count"
                        className={classes.textField}
                        value={formik.values.guest_count}
                        onChange={formik.handleChange}
                        error={formik.touched.guest_count && Boolean(formik.errors.guest_count)}
                        helperText={formik.touched.guest_count && formik.errors.guest_count}
                    />
                </div>
                <div>
                    <TextField
                        id="start"
                        name="start"
                        label="Start Date and Time"
                        type="datetime-local"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={formik.values.start}
                        onChange={formik.handleChange}
                        error={formik.touched.start && Boolean(formik.errors.start)}
                        helperText={formik.touched.start && formik.errors.start}
                    />
                    <TextField
                        id="end"
                        name="end"
                        label="End Date and Time"
                        type="datetime-local"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={formik.values.end}
                        onChange={formik.handleChange}
                        error={formik.touched.end && Boolean(formik.errors.end)}
                        helperText={formik.touched.end && formik.errors.end}
                    />
                </div>
                <div>
                    <TextField
                        multiline
                        id="notes"
                        name="notes"
                        label="Notes"
                        className={classes.textField}
                        value={formik.values.notes}
                        onChange={formik.handleChange}
                    />
                </div>
                <Button color="primary" variant="contained" type="submit">
                    Submit
                </Button>
            </form>
        </Container>
    )
}

export default CreateEvent
