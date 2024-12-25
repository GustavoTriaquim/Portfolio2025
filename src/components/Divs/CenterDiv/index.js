import styled from "styled-components";

export const CenterDiv = styled.div` 
  display: ${props => props.displayCenterDiv || 'normal'};
  flex-direction: ${props => props.directionCenterDiv || 'column'};
  justify-content: ${props => props.justifyCenterDiv || 'center'};
  align-items: ${props => props.alignCenterDiv || 'center'};
  text-align: ${props => props.alignTextCenterDiv || 'center'};
  width: ${props => props.widthCenterDiv || '100%'};
  gap: ${props => props.gapCenterDiv || '30px'};
  padding: ${props => props.paddingCenterDiv || '50px 0px'};
  box-shadow: ${props => props.shadowBoxCenterDiv || 'none'};
  border: ${props => props.borderCenterDiv || 'none'};
  border-radius: ${props => props.radiusCenterDiv || 'none'};
  background-color: ${props => props.backgroundCenterDiv || 'transparent'};
`;