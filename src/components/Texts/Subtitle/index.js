import styled from "styled-components";

export const SuperSubtitle = styled.h2`
  width: ${props => props.superSubtitleWidth || '100%'};
  color: ${props => props.superSubtitleColor || '#0c0c0c'};
  font-size: ${props => props.superSubtitleFontSize || '25px'};
  text-align: ${props => props.superSubtitleTextAlign || 'center'};
  margin: ${props => props.superSubtitleMargin || '0'};

  &:hover {
    cursor: default;
  }

  @media (max-width: 1000px) {
    font-size: ${props => props.superSubtitleFontSizeMedia};
  }
`;

export const Subtitle = styled.h3`
  width: ${props => props.subtitleWidth || '100%'};
  color: ${props => props.subtitleColor || '#0c0c0c'};
  font-size: ${props => props.subtitleFontSize || '20px'};
  text-align: ${props => props.subtitleTextAlign || 'center'};
  margin: ${props => props.subtitleMargin || '0'};

  &:hover {
    cursor: default;
  }
`;

export const MiniSubtitle = styled.h4`
  width: ${props => props.miniSubtitleWidth || '100%'};
  color: ${props => props.miniSubtitleColor || '#0c0c0c'};
  font-size: ${props => props.miniSubtitleFontSize || '17px'};
  text-align: ${props => props.miniSubtitleTextAlign || 'center'};
  margin: ${props => props.miniSubtitleMargin || '0'};

  &:hover {
    cursor: default;
  }

  @media(max-width: 1000px) {
    font-size: ${props => props.miniSubtitleFontSizeMedia || '13px'};
  }
`;