import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WebStoriesIcon from '@mui/icons-material/WebStories';
import DoneIcon from '@mui/icons-material/Done';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const pathname = window.location.pathname;
  var inputVal = 0;

  if(pathname === "/"){
    inputVal = 0;
  }
  else if(pathname === "/backlog"){
    inputVal = 1;
  }
  else if(pathname === "/played"){
    inputVal = 2;
  }

  const [value, setValue] = React.useState(inputVal);

  return (
    <Box sx={{ width: '100%', position: "fixed", bottom: 0, zIndex: 100, "& .Mui-selected, .Mui-selected > svg": {color: "#F76C6C"}}}>
      <BottomNavigation
        sx={{
          backgroundColor: "#24305E",
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
       
      >
        <BottomNavigationAction sx={{ color: '#F8E9A1',   }} label="Search" component={Link} to="/" icon={<SearchIcon />} />
        <BottomNavigationAction sx={{ color: '#F8E9A1' }} label="Backlog" component={Link} to="/backlog" icon={<WebStoriesIcon />} />
        <BottomNavigationAction sx={{ color: '#F8E9A1' }} label="Played" component={Link} to="/played" icon={<DoneIcon/>} />
      </BottomNavigation>
    </Box>
  );
}