import { style } from '@vanilla-extract/css';

export const articleWrap = style({
  fontSize: '1.1rem',
  lineHeight: '150%',
});

export const projectTitle = style({
  fontSize: '2.5rem',
  fontWeight: '700',
  marginBottom: '2rem',
});

export const subtitle = style({
  fontSize: '1.2rem',
  fontWeight: '700',
  marginTop: '1rem',
});

export const ulStyle = style({
  paddingInline: '20px',
});

export const linkStyle = style({
  textDecoration: 'none',
  color: 'white',
  ':hover': {
    color: '#8482F2',
  },
});
