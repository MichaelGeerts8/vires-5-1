# Component Gids

Gids voor het maken en gebruiken van React componenten in Vires-5.

## Componentstructuur

Elk component heeft een gestandaardiseerde structuur:

```
src/components/
├── ComponentName/
│   ├── ComponentName.jsx
│   ├── ComponentName.module.css (optional)
│   └── index.js
```

## Component Template

### Functional Component

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './MyComponent.module.css';

function MyComponent({ title, onClick }) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

MyComponent.defaultProps = {
  title: 'Default Title',
};

export default MyComponent;
```

### Component with Hooks

```jsx
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

## Best Practices

### 1. Props Validation
```jsx
MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.object),
};
```

### 2. Styling
- Gebruik CSS Modules of styled-components
- Vermijd inline styles
- Zorg voor responsive design

### 3. Accessibility
```jsx
<button 
  aria-label="Close dialog"
  onClick={handleClose}
>
  ✕
</button>
```

### 4. Error Handling
```jsx
function SafeComponent({ data }) {
  if (!data) {
    return <p>No data available</p>;
  }
  return <div>{data}</div>;
}
```

## Richtlijnen

✅ **DO**:
- Maak kleine, herbruikbare componenten
- Gebruik duidelijke naamgeving
- Document props en behavior
- Test je componenten
- Schrijf clean code

❌ **DON'T**:
- Maak mega-componenten
- Stel state diep in component tree
- Vergeet prop validation
- Ignore console warnings
- Hardcode waardes

## Component Checklist

- [ ] Component naam is PascalCase
- [ ] Props zijn gevalideerd
- [ ] Standaard waarden zijn ingesteld
- [ ] Component is getest
- [ ] Styling is consistent
- [ ] Component is geexporteerd in index.js
- [ ] Documentatie is geschreven

## Voorbeelden

### Button Component

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false,
  onClick,
  ...props 
}) {
  const className = `${styles.button} ${styles[variant]} ${styles[size]}`;

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
```

### Card Component

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

function Card({ title, description, image, children }) {
  return (
    <div className={styles.card}>
      {image && <img src={image} alt={title} className={styles.image} />}
      <div className={styles.content}>
        {title && <h2>{title}</h2>}
        {description && <p>{description}</p>}
        {children}
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.node,
};

export default Card;
```

## Testing Components

```jsx
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  test('renders with title prop', () => {
    render(<MyComponent title="Test" onClick={() => {}} />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

## Performance Optimization

### React.memo
```jsx
const MemoizedComponent = React.memo(MyComponent);
```

### useMemo
```jsx
const memoizedValue = useMemo(() => expensiveFunction(a, b), [a, b]);
```

### useCallback
```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```
