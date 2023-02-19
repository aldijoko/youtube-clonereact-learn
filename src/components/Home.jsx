import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'

import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Sidebar, Videos } from './'


const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items));
  }, [selectedCategory])
  return (
    <Stack 
      sx={{flexDirection: { sx: "column", md: "row"}}}>
      <Box 
        sx={{height: {sx: 'auto', md: '92vh'}, 
        borderRight: '1px solid #3d3d3d',
        px: {sx: 0, md: 2}}}>
          <Sidebar 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        <Typography className='max-w-screen-md' variant="body2" sx={{color: 'white', mt: 2, mb: 2}}>
          Copyright 2023 Aldi Joko(JSM Media)
        </Typography>
      </Box>
      <Box sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: 'white', mt: 1, mx: 2}}>
          {selectedCategory} <span style={{color: '#ff0000'}}>Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}
export default Home