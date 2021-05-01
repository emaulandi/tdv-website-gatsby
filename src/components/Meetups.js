import React from 'react';

import { Grid, Box } from '@material-ui/core';

import Meetup from './Meetup';
import useMeetups from '../hooks/useMeetups';

const Meetups = () => {
  const meetups = useMeetups();
  
  return (
    <Grid container spacing={2} >
      {meetups.map(({ meetupid, year, videoLink, title, place, month, meetupLink, day, descriptionHtml }) => (
        <React.Fragment key={meetupid}>      
          <Meetup
            meetupid={meetupid}
            title={title}
            place={place}
            day={day}
            month={month}
            year={year}
            videoLink={videoLink}
            meetupLink={meetupLink}
          />
        </React.Fragment>
      ))}
    </Grid>
  );
}

export default Meetups;
