import { Chip } from '@mui/material';
import styled from 'styled-components';

export const ListItemImage = styled.img`
  width: 96px;
  height: 132px;
  object-fit: cover;
  border-radius: 12px;
`;

export const ListItemChip = styled(Chip)`
  &.MuiChip-root {
    background-color: rgba(242, 242, 247, 1);
    margin-bottom: 8px;
  }

  & .MuiChip-label {
    font-size: 13px;
    line-height: 18px;
    color: rgba(60, 60, 67, 0.8);
  }
`;