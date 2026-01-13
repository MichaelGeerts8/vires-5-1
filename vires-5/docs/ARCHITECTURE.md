# Architectuuroverzicht

## Projectstructuur

Dit project volgt een modulaire architectuur met 8 hoofdonderdelen:

### 1. **src/** - Broncode
Bevat alle applicatiecode:
- `components/` - Herbruikbare React componenten
- `pages/` - Pagina componenten
- `styles/` - Stylesheets
- `utils/` - Hulpfuncties en utilities

### 2. **public/** - Statische bestanden
Bevat publieke bestanden:
- `images/` - Afbeeldingen en media
- `fonts/` - Custom fonts

### 3. **config/** - Configuratie
Configuratiebestanden voor het project

### 4. **docs/** - Documentatie
Projectdocumentatie

### 5. **tests/** - Tests
- `unit/` - Unittests
- `integration/` - Integratietests

### 6. **scripts/** - Utiliteitscripts
Build- en deployment-scripts

### 7. **build/** - Gebouwde output
Gecompileerde bestanden (gegenereerd)

### 8. **.github/** - GitHub workflows
CI/CD configuratie

## Development Workflow

1. Maak een feature branch
2. Maak wijzigingen in `src/`
3. Schrijf tests in `tests/`
4. Run `npm test` om tests uit te voeren
5. Run `npm run lint` om code quality te controleren
6. Commit en push naar feature branch
