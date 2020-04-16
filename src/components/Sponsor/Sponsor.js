import React from "react";
import { Box } from '@rebass/grid';

function Sponsor({image, link}) {
  return (
    <Box px={4} style={{maxWidth: '320px'}}>
      <a href={link} target='_blank'>
        <img src={image} />
      </a>
    </Box>
  );
}
export default Sponsor;
