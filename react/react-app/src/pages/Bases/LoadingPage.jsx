import { Box, CircularProgress, useMediaQuery } from '@mui/material';

import { COLORS } from '../../components/common/Colors';
import StackCol from '../../components/common/StackCol';

const LoadingSpinner = ({ size = 80 }) => (
  <Box>
    <CircularProgress size={size} sx={{ color: "#009F8F" }} />
  </Box>
);

export const LoadingPage = () => (
  <StackCol
    alignItems="center"
    justifyContent="center"
    sx={{
      height: "100%",
      width: "100%",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 1000,
    }}
  >
    <LoadingSpinner />
  </StackCol>
);

export const LoadingDataTable = ({ size = 50 }) => (
  <StackCol
    alignItems="center"
    justifyContent="center"
    sx={{ width: "100%" }}
  >
    <Box>
      <CircularProgress size={size} sx={{ color: "#009F8F" }} />
    </Box>
  </StackCol>
);

export const LoadingPageContent = () => {
  const isLargeScreen = useMediaQuery('(min-width:1200px)');

  return (
    <StackCol
      alignItems="center"
      justifyContent="center"
      sx={{
        height: '100%',
        width: isLargeScreen ? 'calc(100% - 260px)' : '100%',
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <Box>
        <CircularProgress size={80} sx={{ color: "#009F8F" }} />
      </Box>
    </StackCol>
  );
};
