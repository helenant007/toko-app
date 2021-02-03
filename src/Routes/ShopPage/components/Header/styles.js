import { css } from 'emotion';

const Green = '#03AC0E';
const LightGreen = 'rgb(214, 255, 222)';

export const styAlignCenter = css`
    align-items: center;
`;

export const styContainerHeader = css`
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    background-color: white;
    filter: drop-shadow(2px 2px 10px rgba(0,0,0,0.1));
`;

export const styPadding = (paddingData = '0') => css`
    padding: ${paddingData};
`;

export const styMargin = (marginData = '0') => css`
    margin: ${marginData};
`;

export const styButtonRadius = css`
    border-radius: 5px;
`;

export const styBigBold = css`
    font-size: 20px;
    font-weight: bold;
`;

export const styButtonGreen = css`
    background: ${Green}; 
    border-color: ${Green};
`;

export const styOnline = css`
    background-color: ${LightGreen};
    color: ${Green};
    padding: 5px;
`;

export const styLink = css`
    cursor: pointer;
    color: ${Green};
`;
