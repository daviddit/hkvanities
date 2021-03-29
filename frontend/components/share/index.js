import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import ShareIcon from '@material-ui/icons/Share';
import { device } from '../../lib/device'
import { Icon, InlineIcon } from '@iconify/react';
import wechatIcon from '@iconify/icons-mdi/wechat';
import { hostname } from '../../config.js'

import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";


import { StyledControls, StyledControl } from '../publish-controls/styles'

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  backDrop: {
    backdropFilter: "blur(8px)",
    backgroundColor:'rgba(0,0,30,0.4)'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: '30rem',
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    outline: 0,
  },
  shared0: {
    width: '100%',
    backgroundColor: 'white',
    listStyle: 'none',
    padding: '0.2rem 1.5rem',
   "&:hover": {
    backgroundColor: 'hsl(46, 100%, 50%)',
    color: 'black',
    cursor: 'pointer',
   },
   "& .MuiSvgIcon-root":
   {
    position: 'relative',
    top: '2px',
   },
   "& > button":
   {
     outline: '0',
   }
  },
  shared1: {
    width: '100%',
    backgroundColor: 'lightgray',
    listStyle: 'none',
    padding: '0.2rem 1.5rem',
   "&:hover": {
    backgroundColor: 'hsl(46, 100%, 50%)',
    color: 'black',
    cursor: 'pointer',
   },
   "& .MuiSvgIcon-root":
   {
    position: 'relative',
    top: '2px',
   },
   "& > button":
   {
     outline: '0',
   }
  },
}));

export default function Share({ url, video, thumb, onClick, text}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

/*
 if (navigator?.share) {
      navigator
        .share({
          title: text,
          text: `Check out ${text} on ${hostname}`,
          url: url,
        })
        .then(() => {
          console.log('Successfully shared');
        })
        .catch(error => {
          console.error('Something went wrong sharing the blog', error);
        });
}
*/

  text = text ? text : "Watch the poem I've just created at "


  //const urlWeChat = "https://www.addtoany.com/add_to/wechat?linkurl=" + encodeURIComponent(url) + "&amp;linkname=" +  encodeURIComponent(text)

  return (
    <div>
      <StyledControl onClick={handleOpen}>Share</StyledControl>
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500, classes: { root: classes.backDrop} }}
	 >
	  <Fade in={open}>
	    <div style={modalStyle} className={classes.paper}>
		{thumb && <img src={thumb} width="300" height="300"/>}

	      <li className={classes.shared0}>
	      </li>
	      <li className={classes.shared0}>
		<TwitterShareButton title={text} url={url}><TwitterIcon/> Twitter</TwitterShareButton>
	      </li>
	      <li className={classes.shared1}>
		<FacebookShareButton title={text} url={url}><FacebookIcon/> Facebook</FacebookShareButton>
	      </li >
	      <li className={classes.shared0}>
		<PinterestShareButton title={text} url={url}><PinterestIcon/> Pinterest</PinterestShareButton>
	      </li >
	      <li className={classes.shared1}>
	       {/*<a href={urlWhatsapp} target="_blank"><WhatsAppIcon/> Whatsapp</a>*/}
		<WhatsappShareButton title={text} url={url}><WhatsAppIcon/> Whatsapp</WhatsappShareButton>
	      </li>
	      <li className={classes.shared0}>
		<TelegramShareButton title={text} url={url}><TelegramIcon/> Telegram</TelegramShareButton>
	      </li>
	  	{/*<li className={classes.shared1}>
		<a href={urlWeChat} target="_blank"><Icon icon={wechatIcon} /> WeChat</a>
	      </li>*/}
	      <li className={classes.shared1}>
		<EmailShareButton title={text} url={url}><MailIcon/> E-mail</EmailShareButton>
	      </li>
	    </div>
	  </Fade>
      </Modal>
    </div>
  );
}
