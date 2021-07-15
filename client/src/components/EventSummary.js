import React from 'react'
import format from 'date-fns/format'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const EventSummary = ({ event }) => {
    return (
            <Box border={1} p={0.5} style={{ marginTop: 8 }}>
                <Typography align='left'>
                    {event.name}<hr></hr>
                    {event.guest_count} guests<br></br>
                    {format(event.start, 'ha')} to {format(event.end, 'ha')}
                </Typography>
                <Typography variant='body2' align='left'>
                    {event.notes}
                </Typography>
            </Box>
    )
}

export default EventSummary
