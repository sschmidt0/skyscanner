import { StyledInfoItemDiv } from './InfoItem.styles';

export const InfoItem = () => (
  <StyledInfoItemDiv>
    <div className="time-place-info">
      <span>08:15</span>
      <span>MXP</span>
    </div>
    <div className="connection-info">
      <span>6h 20</span>
      <div>
        <span>1 stop</span>
        <span></span>
        <span>PMO</span>
      </div>
    </div>
    <div className="time-place-info">
      <span>13:35</span>
      <span>LGW</span>
    </div>
  </StyledInfoItemDiv>
);
