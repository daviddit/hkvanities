import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TelegramAppIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import ShareIcon from '@material-ui/icons/Share';
import Image from 'next/image';
import { device } from '../../lib/device'
import { Icon, InlineIcon } from '@iconify/react';
import wechatIcon from '@iconify/icons-mdi/wechat';


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
   }
  },
}));

export default function Share({ url, thumb, onClick, text}) {
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
  const handleUrlOther = () => {

	  React.useEffect(() => {
	  navigator.share()
	  }, [])
  };
*/

  //const urlWhatsapp = device.mobile ? "whatsapp://send?text="+url : "https://web.whatsapp.com/send?text=" + url
  const urlWhatsapp = "https://www.addtoany.com/add_to/whatsapp?linkurl=" + encodeURIComponent(url) + "&amp;linkname=" +  encodeURIComponent(text)

  //const urlTelegram = "https://t.me/share/url?url=" +  url
  const urlTelegram = "https://www.addtoany.com/add_to/telegram?linkurl=" + encodeURIComponent(url) + "&amp;linkname=" +  encodeURIComponent(text)

  //const urlFacebook = "https://www.facebook.com/sharer/sharer.php?u=" + url
  const urlFacebook = "https://www.addtoany.com/add_to/facebook?linkurl=" + encodeURIComponent(url) + "&amp;linkname=" +  encodeURIComponent(text)

  //const urlTwitter = "https://twitter.com/intent/tweet?text=" + url
  const urlTwitter = "https://www.addtoany.com/add_to/twitter?linkurl=" + encodeURIComponent(url) + "&amp;linkname=" +  encodeURIComponent(text)

  //const urlPinterest = "http://pinterest.com/pin/create/button/?url=" + url + "&media=" + thumb + "&description=" + encodeURIComponent(text)
  const urlPinterest = "https://www.addtoany.com/add_to/pinterest?linkurl=" + encodeURIComponent(url) + "&amp;linkname=" +  encodeURIComponent(text)

  const urlWeChat = "https://www.addtoany.com/add_to/wechat?linkurl=" + encodeURIComponent(url) + "&amp;linkname=" +  encodeURIComponent(text)
  const urlMail = "https://www.addtoany.com/add_to/email?linkurl=" + encodeURIComponent(url) + "&amp;linkname=" +  encodeURIComponent(text)


	/*

	<!-- AddToAny BEGIN -->
<div>
<a href="https://www.addtoany.com/share#url=https%3A%2F%2Fhkvanitiesdev.dieres.com&amp;title=" target="_blank"><img src="https://static.addtoany.com/buttons/a2a.svg" width="32" height="32" style="background-color:royalblue"></a>
<a href="https://www.addtoany.com/add_to/facebook?linkurl=https%3A%2F%2Fhkvanitiesdev.dieres.com&amp;linkname=" target="_blank"><img src="https://static.addtoany.com/buttons/facebook.svg" width="32" height="32" style="background-color:royalblue"></a>
<a href="https://www.addtoany.com/add_to/twitter?linkurl=https%3A%2F%2Fhkvanitiesdev.dieres.com&amp;linkname=" target="_blank"><img src="https://static.addtoany.com/buttons/twitter.svg" width="32" height="32" style="background-color:royalblue"></a>
<a href="https://www.addtoany.com/add_to/email?linkurl=https%3A%2F%2Fhkvanitiesdev.dieres.com&amp;linkname=" target="_blank"><img src="https://static.addtoany.com/buttons/email.svg" width="32" height="32" style="background-color:royalblue"></a>
<a href="https://www.addtoany.com/add_to/whatsapp?linkurl=https%3A%2F%2Fhkvanitiesdev.dieres.com&amp;linkname=" target="_blank"><img src="https://static.addtoany.com/buttons/whatsapp.svg" width="32" height="32" style="background-color:royalblue"></a>
<a href="https://www.addtoany.com/add_to/telegram?linkurl=https%3A%2F%2Fhkvanitiesdev.dieres.com&amp;linkname=" target="_blank"><img src="https://static.addtoany.com/buttons/telegram.svg" width="32" height="32" style="background-color:royalblue"></a>
<a href="https://www.addtoany.com/add_to/pinterest?linkurl=https%3A%2F%2Fhkvanitiesdev.dieres.com&amp;linkname=" target="_blank"><img src="https://static.addtoany.com/buttons/pinterest.svg" width="32" height="32" style="background-color:royalblue"></a>
<a href="https://www.addtoany.com/add_to/wechat?linkurl=https%3A%2F%2Fhkvanitiesdev.dieres.com&amp;linkname=" target="_blank"><img src="https://static.addtoany.com/buttons/wechat.svg" width="32" height="32" style="background-color:royalblue"></a>
<a href="https://www.addtoany.com/add_to/copy_link?linkurl=https%3A%2F%2Fhkvanitiesdev.dieres.com&amp;linkname=" target="_blank"><img src="https://static.addtoany.com/buttons/link.svg" width="32" height="32" style="background-color:royalblue"></a>
</div>
<!-- AddToAny END -->
		*/



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
		{thumb && <Image src={thumb} width="300" height="300"  />}
	      <li className={classes.shared0}>
		<a href={urlTwitter} target="_blank"><TwitterIcon/> Twitter</a>
	      </li>
	      <li className={classes.shared1}>
		<a href={urlFacebook} target="_blank"><FacebookIcon/> Facebook</a>
	      </li >
	      <li className={classes.shared0}>
		<a href={urlPinterest} target="_blank"><PinterestIcon/> Pinterest</a>
	      </li >
	      <li className={classes.shared1}>
		<a href={urlWhatsapp} target="_blank"><WhatsAppIcon/> Whatsapp</a>
	      </li>
	      <li className={classes.shared0}>
		<a href={urlTelegram} target="_blank"><TelegramAppIcon/> Telegram</a>
	      </li>
	      <li className={classes.shared1}>
		<a href={urlWeChat} target="_blank"><Icon icon={wechatIcon} /> WeChat</a>
	      </li>
	      <li className={classes.shared0}>
		<a href={urlMail} target="_blank"><MailIcon/> Mail</a>
	      </li>
	  {/*
		  <li className={classes.shared1}>
		<li onClick={handleUrlOther}><ShareIcon/> Other</li>
	      </li>
	      */}
	    </div>
	  </Fade>
      </Modal>
    </div>
  );
}