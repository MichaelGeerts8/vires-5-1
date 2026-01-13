# Bijdragen aan Vires-5

Bedankt dat je interesse hebt om bij te dragen aan Vires-5! Dit document beschrijft het proces voor het indienen van bijdragen.

## Code of Conduct

Behandel alle deelnemers met respect en voorkom haatdragende taal.

## Hoe bij te dragen

### 1. Fork het repository
```bash
git clone https://github.com/vires-5/Michael-Vires.git
cd vires-5
```

### 2. Maak een feature branch
```bash
git checkout -b feature/mijn-feature
```

### 3. Maak je wijzigingen
- Volg de bestaande code style
- Schrijf duidelijke commit messages
- Voeg tests toe voor nieuwe functionaliteit

### 4. Test je code
```bash
npm test
npm run lint
```

### 5. Push en maak een Pull Request
```bash
git add .
git commit -m "feat: beschrijving van de wijziging"
git push origin feature/mijn-feature
```

## Code Style

- **Indentation**: 2 spaties
- **Quotes**: Enkele quotes (')
- **Semicolons**: Verplicht
- **Naming**: camelCase voor variabelen, PascalCase voor componenten

## Commits

Volg deze commit format:
- `feat:` voor nieuwe features
- `fix:` voor bugfixes
- `docs:` voor documentatie
- `style:` voor code style wijzigingen
- `refactor:` voor refactoring
- `test:` voor tests

Voorbeeld:
```
feat: voeg Header component toe
```

## Pull Request Checklist

- [ ] Tests schrijven/bijwerken
- [ ] Linting passeert (`npm run lint`)
- [ ] Tests slagen (`npm test`)
- [ ] Documentatie bijwerken
- [ ] Branch is up-to-date met main

## Vragen?

Open een issue of vraag om hulp in een discussion!
