// 2xs is added to give us the ability to display stories when the viewport is smaller than the smallest break point.
// 2xl is added to give us the ability to display stories when the viewport is bigger than the biggest break point.
const BREAK_POINTS = {
  '2xs': 360,
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1920
}

const VIEW_PORTS = {
  '2xs': {
    name: '2xs',
    styles: { width: `${BREAK_POINTS['2xs']}px`, height: '100%' },
    type: 'mobile',
    width: BREAK_POINTS['2xs']
  },
  xs: {
    name: 'xs',
    styles: { width: `${BREAK_POINTS.xs}px`, height: '100%' },
    type: 'mobile',
    width: BREAK_POINTS.xs
  },
  sm: {
    name: 'sm',
    styles: { width: `${BREAK_POINTS.sm}px`, height: '100%' },
    type: 'mobile',
    width: BREAK_POINTS.sm
  },
  md: {
    name: 'md',
    styles: { width: `${BREAK_POINTS.md}px`, height: '100%' },
    type: 'tablet',
    width: BREAK_POINTS.md
  },
  lg: {
    name: 'lg',
    styles: { width: `${BREAK_POINTS.lg}`, height: '100%' },
    type: 'tablet',
    width: BREAK_POINTS.lg
  },
  xl: {
    name: 'xl',
    styles: { width: `${BREAK_POINTS.xl}px`, height: '100%' },
    type: 'desktop',
    width: BREAK_POINTS.xl
  },
  '2xl': {
    name: '2xl',
    styles: { width: `${BREAK_POINTS['2xl']}px`, height: '100%' },
    type: 'desktop',
    width: BREAK_POINTS['2xl']
  },

}



module.exports = {
  VIEW_PORTS
}
