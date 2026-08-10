import { Stack } from '@mui/material';

const StackRow = ({ children, justifyContent, alignItems, direction = 'row', spacing = 2, sx }) => {
  return (
    <Stack
      spacing={spacing}
      direction={direction}
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

export default StackRow;
