import { Stack } from '@mui/material';

const StackCol = ({ children, justifyContent, alignItems, spacing = 2, sx }) => {
  return (
    <Stack
      spacing={spacing}
      direction="column"
      justifyContent={justifyContent}
      alignItems={alignItems}
      sx={{
        ...sx
      }}
    >
      {children}
    </Stack>
  );
};

export default StackCol;
