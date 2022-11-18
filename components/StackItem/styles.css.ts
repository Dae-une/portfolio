import { style } from '@vanilla-extract/css';

export const Items = style({
  borderBottom: '1px solid #34373d',
});

export const QuestionWrapper = style({
  cursor: 'pointer',
  paddingBottom: '1rem',
  paddingTop: '1.2rem',
  display: 'flex',
});

export const QuestionButton = style({
  background: 'none',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

export const Label = style({
  textAlign: 'left',
  fontSize: '1.25rem',
});

export const reasonWrap = style({
  overflow: 'hidden',
});

export const reason = style({
  paddingBlock: '1rem',
  fontSize: '1rem',
  lineHeight: '150%',
});
