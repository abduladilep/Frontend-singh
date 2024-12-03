import { Box, Link, Stack, Typography } from '@mui/material';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import { ReactElement } from 'react';

const Footer = ({ open }: { open: boolean }): ReactElement => {
  const { down } = useBreakpoints();

  const isMobileScreen = down('sm');

  return (
    <Stack
      component="footer"
      direction="row"
      justifyContent={{ xs: 'center', sm: 'flex-end' }}
      ml={isMobileScreen ? 0 : open ? 60 : 27.5}
      pr={{ xs: 3, sm: 5.175 }}
      pb={6.25}
      pl={{ xs: 3, sm: 5.25 }}
    >
      <Typography variant="subtitle1" sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
        Singh{' '}
        <Box component="span" sx={{ color: 'error.main', verticalAlign: 'middle' }}>
          &#10084;
        </Box>{' '}
        Technology{' '}
        <Link
          href=""
          target="_blank"
          rel="noopener"
          aria-label="Explore ThemeWagon Website"
          sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }}
        >
        </Link>
      </Typography>
    </Stack>
  );
};

export default Footer;