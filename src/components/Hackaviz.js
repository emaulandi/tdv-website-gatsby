import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';

import useHackaviz from '../hooks/useHackaviz';
import useHackavizSponsors from '../hooks/useHackavizSponsors';
import useHackavizParticipants from '../hooks/useHackavizParticipants';
import usePics from '../hooks/usePics';

import YoutubeEmbed from '../components/YoutubeEmbed';
import Button from '../components/Button';
import { getVideoEmbedId, getPic } from '../helper';

const useStyles = makeStyles(theme => ({
  imageContainer: {
    maxWidth: 150,
    backgroundColor: 'white',
  },
}));

const Hackaviz = () => {
  const classes = useStyles();

  const hackavizs = useHackaviz();
  const hackavizSponsors = useHackavizSponsors();
  const hackavizParticipants = useHackavizParticipants();
  const sponsorsPics = usePics().filter(({ relativeDirectory }) => relativeDirectory === 'sponsor-pics');
  
  return (
    <>
    {hackavizs.map(({ hackaviz, date, videoLink, description }) => {
      const currentHackaviz = hackaviz;
      const sponsors = hackavizSponsors.filter(({ hackaviz }) => hackaviz === currentHackaviz);
      const videoEmbedId = getVideoEmbedId(videoLink);
      const winners = hackavizParticipants
        .filter(({ hackaviz, prix }) =>  hackaviz === currentHackaviz && prix);

      return (
        <Box>
          <Grid container spacing={2}>
          <Grid item xs>
            <h2>{`Hackaviz ${hackaviz}`}</h2>
            <Box>{date}</Box>
            <h3>{"Les données"}</h3>
            <Box>{description}</Box>
            <h3>{"En chiffres"}</h3>
            <h3>{"Les gagnants"}</h3>
            <Box>
              <ul>
              {winners.map(({ nom, prix }) => (
                <li>
                  <span><b>{prix}</b>{`: ${nom}`}</span>
                </li>
              ))}
              </ul>
            </Box>
          </Grid>
          {videoLink && (
            <Grid item xs={6}>
              <Button
                link={videoLink}
                text={"Revoir la remise des prix"}
              />
              <YoutubeEmbed
                title={hackaviz}
                embedId={videoEmbedId}
              />
            </Grid>
          )}
          </Grid>

          <h3>{"Les sponsors"}</h3>
          <Grid 
            container 
            spacing={2}
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            {sponsors.map(({ sponsor_pic }) => {
              const sponsorPic = getPic(sponsorsPics, sponsor_pic);
              return (
                <Grid item className={classes.imageContainer}>
                  <GatsbyImage className={classes.image} image={sponsorPic} alt={sponsor_pic}/>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      );
    })}
    </>
  );
}
export default Hackaviz;
