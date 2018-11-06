# Eurosport Web Toolkit

A collection of components to share common functionality across teams.

[View the storybook](https://es-web-toolkit.netlify.com)

## How to use

`npm install @eurosport/web-toolkit emotion react-emotion emotion-theming polished`

All available components are exported as named exports so you can pull them in easily:

```jsx
import { injectGlobal } from 'react-emotion'
import { ThemeProvider } from 'emotion-theming'
import { globalReset, theme, Button } from '@eurosport/web-toolkit'

injectGlobal(globalReset)

const MyApp = () =>
  <ThemeProvider theme={theme}>
    <Button>Hello!</Button>
  </ThemeProvider>
```
