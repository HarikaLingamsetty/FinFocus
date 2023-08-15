import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import FlexBetween from "./FlexBetween";

type Props = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
};

const BoxHeader = ({ icon, title, subtitle }: Props) => {
  const { palette } = useTheme();
  return (
    <FlexBetween color={palette.grey[400]} margin="1.2rem 1rem 0.5rem 1rem">
      <FlexBetween>
        {icon}
        <Box width="100%">
          <Typography variant="h4" fontWeight="700" mb="0.5rem">
            {title}
          </Typography>
          <Typography variant="h6" fontWeight="200">{subtitle}</Typography>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default BoxHeader;