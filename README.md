# Eurosport Web Toolkit

A collection of components to share common functionality across teams.

[View the storybook](https://eurosport.netlify.com)

## How to use

`npm install @eurosport/web-toolkit emotion react-emotion emotion-theming`

All available components are exported as named exports so you can pull them in easily:

```jsx
import { ThemeProvider } from 'emotion-theming'
import { theme, Button } from '@eurosport/web-toolkit'

const MyApp = () =>
  <ThemeProvider theme={theme}>
    <Button>Hello!</Button>
  </ThemeProvider>
```
