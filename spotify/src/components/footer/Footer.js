import React from 'react'
import './style/footer.css'
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import {Grid, Slider} from '@material-ui/core'
import src from '../images/spotify.jpg'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__left'>
                <img src={'https://i.scdn.co/image/ab67616d0000b273540a241e3001ddc276b9ab93'} className='footer__albumpic'/>
                <div className='footer__songInfo'>
                    <h4>Like a rolling stone</h4>
                    <p>Bob Dylan</p>
                </div>
            </div>
            <div className='footer__center'>
                <ShuffleIcon className='footer__green' />
                <SkipPreviousIcon className='footer__icon'/>
                <PlayCircleOutlineIcon fontSize="large" className='footer__icon'/>
                <SkipNextIcon className='footer__icon'/>
                <RepeatIcon className='footer__green'/>
            </div>
            <div className='footer__right'>
            <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
            </div>
        </div>
    )
}

export default Footer
