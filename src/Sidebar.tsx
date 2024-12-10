import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from '@mui/material';



import {

  BarChart as BarChartIcon,
 


  Chat as ChatIcon,
  Assignment as AssignmentIcon,
} from '@mui/icons-material';

const sidebarItems = [
  { text: 'Marketing',  },
  { text: 'Comercial',  },
  { text: 'Design',  },
  { text: 'Call Center', icon: <ChatIcon /> },
  { text: 'Administração', icon: <AssignmentIcon /> },
  { text: 'Pesquisa de Mercado',  },
  { text: 'Redes Sociais', icon: <ChatIcon /> },
  { text: 'Inteligência de mercado', icon: <BarChartIcon /> },
  { text: 'Promoções e Propaganda',  },
];

const Sidebar: React.FC = () => {
  return (
    <Drawer
      sx={{
        width: 140,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 200,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Typography variant="h6" sx={{ padding: '16px', textAlign: 'center' }}>
        Dashboard
      </Typography>
      <List>
        {sidebarItems.map((item) => (
          <ListItem >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
