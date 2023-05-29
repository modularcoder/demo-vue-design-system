import pkg from '../../package.json'

const reviewId = process?.env?.STORYBOOK_REVIEW_ID || undefined
const suffix = reviewId ? `PR-#${reviewId}` : `v${pkg.version}`

export default (name: string) => {
  // return `Design System ${suffix}/${name}`
  return `Design System/${name}`
}
