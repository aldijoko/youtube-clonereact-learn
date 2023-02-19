import { CheckCircle } from "@mui/icons-material"
import { Box, CardContent, CardMedia, Typography } from "@mui/material"

import { Link } from "react-router-dom"

import { demoProfilePicture } from "../utils/constans"

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
     sx={{
      boxShadow: 'none', 
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '358px', md: '320px'},
      height: '326px',
      margin: 'auto',
      marginTop: marginTop || '0px',
      }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff'}}>
          <CardMedia
           image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
           alt={channelDetail?.snippet?.title}
           sx={{borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3'}} />
           <Typography variant='subtitle1' fontWeight="bold" color="#FFF">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 12, color: '#00BFFF', ml: '10px' }}/>
           </Typography>
           {channelDetail?.statistics?.subscriberCount && (
              <Typography variant='subtitle2' fontWeight="bold" color="gray" sx={{fontSize: '10px'}}>
                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} subscribers
              </Typography>
           )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard