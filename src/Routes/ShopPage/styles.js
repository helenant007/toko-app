import { css } from 'emotion';

export const styFlex = css`
    display: flex;
`;

export const styContainerHeader = css`
margin: 20px;
padding: 20px;
border-radius: 10px;
background-color: white;
filter: drop-shadow(2px 2px 10px rgba(0,0,0,0.1));
`;

export const styHeading = (fontSize = 20) => css`
    font-size: ${fontSize}px;
    font-weight: bold;
`;

export const styPadding = (paddingData = '0') => css`
    padding: ${paddingData};
`;

export const styMargin = (marginData = '0') => css`
    margin: ${marginData};
`;
