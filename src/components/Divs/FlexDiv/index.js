import styled from "styled-components";

export const FlexDiv = styled.div`
  width: ${props => props.widthFlexDiv || '100%'};
  display: ${props => props.displayFlexDiv || 'flex'};
  justify-content: ${props => props.justifyFlexDiv || 'center'};
  align-items: ${props => props.alignFlexDiv || 'center'};
  gap: ${props => props.gapFlexDiv || '0px'};
  border: ${props => props.borderFlexDiv || 'none'};
  border-radius: ${props => props.radiusFlexDiv || 'none'};
  background-color: ${props => props.backgroundFlexDiv || 'transparent'};
  padding: ${props => props.paddingFlexDiv || '0px'};
`;