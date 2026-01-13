# API Documentatie

Documentatie voor alle beschikbare componenten en utility functies in Vires-5.

## Componenten

### App Component
Het hoofdcomponent van de applicatie.

**Locatie**: `src/pages/App.jsx`

**Props**: Geen

**Voorbeeld**:
```jsx
import App from './pages/App';

<App />
```

## Utils / Helpers

### formatDate(date)

Formatteert een datum naar Nederlandse notatie.

**Parameters**:
- `date` (Date | string): De datum om te formatteren

**Retourtype**: string

**Voorbeeld**:
```javascript
import { formatDate } from './utils/helpers';

formatDate('2025-12-23');
// Output: '23-12-2025'
```

---

### capitalizeString(str)

Zet de eerste letter van een string in hoofdletters.

**Parameters**:
- `str` (string): De string om te kapitaliseren

**Retourtype**: string

**Voorbeeld**:
```javascript
import { capitalizeString } from './utils/helpers';

capitalizeString('hello');
// Output: 'Hello'
```

---

### debounce(fn, delay)

Creëert een debounced versie van een functie.

**Parameters**:
- `fn` (function): De functie om te debounce
- `delay` (number): Vertraging in milliseconden

**Retourtype**: function

**Voorbeeld**:
```javascript
import { debounce } from './utils/helpers';

const handleSearch = debounce((query) => {
  console.log('Searching for:', query);
}, 300);

input.addEventListener('input', (e) => {
  handleSearch(e.target.value);
});
```

## Styles

### Global Styles
- **Bestand**: `src/styles/index.css`
- **Beschrijving**: Globale CSS reset en basisstijlen

### App Styles
- **Bestand**: `src/styles/App.css`
- **Beschrijving**: Stijlen voor het App component

## Configuratie

### Environment Variables

Beschikbare environment variables in `.env`:

```
NODE_ENV=development
API_URL=http://localhost:3000
```

## Hooks (Toekomstig)

Reactie hooks zullen hier gedocumenteerd worden als ze worden toegevoegd.

## Types (TypeScript - Toekomstig)

TypeScript type definities zullen hier gedocumenteerd worden.
