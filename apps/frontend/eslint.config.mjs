// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
).append({
  rules: {
    '@typescript-eslint/no-explicit-any': 'off'
  }
})
