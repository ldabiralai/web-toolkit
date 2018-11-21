# Eurosport Web Toolkit

A collection of components to share common functionality across teams.

[View the storybook](https://es-web-toolkit.netlify.com)

## How to use

`npm install @eurosport/web-toolkit emotion react-emotion emotion-theming polished`

All available components are exported as named exports so you can pull them in easily:

```jsx
import { injectGlobal } from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';
import { globalReset, theme, Button } from '@eurosport/web-toolkit';

injectGlobal(globalReset);

const MyApp = () => (
  <ThemeProvider theme={theme}>
    <Button>Hello!</Button>
  </ThemeProvider>
);
```

## Documentation

### Link

The Link component use a default prop "linkComponent" which is a function returning an anchor tag. If you want to override this behaviour, you can specify a custom function in your app as below :

```jsx

import { RouterLink } from 'react-router-dom';
import { Link } from '@eurosport/web-toolkit';

Link.defaultProps.linkComponent = ({ href, children, ...props }) => (
  <RouterLink {...props} to={href}>
    {children}
  </RouterLink>
);
```

If a component defines a prop "linkComponent", then you can override the link behaviour for one instance of this component, by passing a custom function to this prop.

```jsx

import { RouterLink } from 'react-router-dom';
import { Card } from '@eurosport/web-toolkit';

const overridenLink= ({ href, children, ...props }) => (
  <RouterLink {...props} to={href}>
    {children}
  </RouterLink>
);

const cardData = {};

<Card.Content card={cardData} type="article" linkComponent={overridenLink} />
```