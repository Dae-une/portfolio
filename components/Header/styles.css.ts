import { style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const headerWrap = recipe({
  base: {
    backgroundColor: '#212124',
    zIndex: 100,
    top: 0,
    position: 'fixed',
    width: '100vw',
    transition: 'opacity 1s',
  },
  variants: {
    visible: {
      true: { opacity: 1 },
      false: { opacity: 0 },
    },
  },
});

export const navWrap = style({
  maxWidth: '60rem',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  paddingBlock: '1.0625rem',
});

export const TextLinkList = style({
  display: 'flex',
  gap: '2.5rem',
  listStyle: 'none',
});

export const TextLink = style({
  fontSize: '1rem',
  fontWeight: '700',
  lineHeight: '26px',
  cursor: 'pointer',
});
