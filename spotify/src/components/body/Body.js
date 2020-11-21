import React from "react";
import styles from "./style/body.module.css";
import './style/bodyScrollbar.css'
import Headercontainer from "../../containers/Headercontainer";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Songrow from '../songrow/Songrow'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body ({description, img, title, songs, followers}){
 
  return (
    <div className={`${styles.body} body` } style={{overflowY: 'overlay'}}>
      <Headercontainer />
      <div className={styles.body__info}>
        <img className={styles.body__infoImg} src={img} alt="playlist pic" />

        <div className={styles.body__infoText}>
          <strong>ПЛЕЙЛИСТ</strong>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className={styles.body__infoStats}>
            <h4>{followers} лайков</h4>
            <FiberManualRecordIcon style={{width: '10px', margin: '0 10px'}} />
            <h4>{songs.length} треков</h4>
          </div>
        </div>
        </div>

        <div className={styles.body__songs}>
        <div className={styles.body__icons}>
          <PlayCircleFilledIcon
            className={styles.body__shuffle}
               
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {songs.map((item) => (
          <Songrow  track={item.track} />
        ))}
      </div>
      
    </div>

);
}

export default Body;
