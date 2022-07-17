import React, { useState } from 'react';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import ContactsIcon from '@material-ui/icons/Contacts';

const actions = [
    { icon: <GitHubIcon style={{color: 'purple'}} onClick={() => window.open('https://github.com/DheerajGogoi')} />, name: 'Github' },
    { icon: <FacebookIcon style={{color: '#0077D1'}} onClick={()=>window.open('https://www.facebook.com/dheeraj.gogoi.1004')}/>, name: 'Facebook' },
    { icon: <LinkedInIcon style={{color: '#0083D2'}} onClick={() => window.open('https://bit.ly/3hqvX1V')} />, name: 'LinkedIn' },
    { icon: <YouTubeIcon style={{color: 'red'}} onClick={() => window.open('https://www.youtube.com/channel/UCw8x8IOLVG1cCHS3z-pVtoQ')} />, name: 'Youtube' },
    { icon: <MailIcon style={{color: 'black'}} onClick={() => window.open('mailto:dheerajgogoi2@gmail.com')} />, name: 'Mail' },
];

export default function MySpeedDial(){
    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(false);

    const handleVisibility = () => {
        setHidden((prevHidden) => !prevHidden);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <div className='my-speed-dial'>
            <SpeedDial
                ariaLabel="SpeedDial openIcon example"
                icon={<ContactsIcon/>}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                
            >
                {
                    actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                        />
                    ))
                }
            </SpeedDial>
        </div>
    );
}