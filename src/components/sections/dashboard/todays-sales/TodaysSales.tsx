import { ReactElement } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import salesData from 'data/sales-data';
import SaleCard from './SaleCard';
import { useLocation } from 'react-router-dom'; // Import useLocation hook


const TodaysSales = (): ReactElement => {
  const location = useLocation(); // Get the current location (route)

  const titles: Record<string, string> = {
    '/': 'Welcome to Singh Technology',
    '/authentication/dashboard': 'Dashboard - Singh Technology Growth',
    '/authentication/user': 'Singh - Users',
    '/authentication/reports': 'Singh-Reports ',
    '/authentication/games': 'Latest Gmaes ',
    '/authentication/settings': 'Settings' ,



    
  };

  // Default to 'Singh Technology Growth' if path is not in titles
  const currentTitle = titles[location.pathname] || 'Singh Technology Growth';


  return (
    <Paper sx={{ p: { xs: 4, sm: 8 }, height: 1 }}>
      <Typography variant="h4" color="common.white" mb={1.25}>
      {currentTitle}

      </Typography>
      <Typography variant="subtitle2" color="text.disabled" mb={6}>
        
      </Typography>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={{ xs: 4, sm: 6 }}>
        {salesData.map((saleItem) => (
          <Box key={saleItem.id} gridColumn={{ xs: 'span 12', sm: 'span 6', lg: 'span 3' }}>
            <SaleCard saleItem={saleItem} />
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default TodaysSales;
