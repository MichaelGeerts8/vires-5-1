# Deployment Gids

Dit document beschrijft hoe je Vires-5 deployt naar productie.

## Pre-Deployment Checklist

- [ ] Alle tests slagen: `npm test`
- [ ] Linting is schoon: `npm run lint`
- [ ] Build is succesvol: `npm run build`
- [ ] Environment variables zijn ingesteld
- [ ] Version is bijgewerkt in `package.json`

## Build Process

```bash
npm run build
```

Dit genereert een optimized production build in de `dist/` map.

## Deployment Platforms

### Vercel

1. Push naar GitHub
2. Connect repository op Vercel
3. Vercel deployt automatisch

### Netlify

1. Push naar GitHub
2. Connect repository op Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages

1. Update `package.json`:
```json
{
  "homepage": "https://vires-5.github.io/Michael-Vires"
}
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add deploy scripts:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. Deploy:
```bash
npm run deploy
```

### Docker

Create een `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]
```

Build en run:
```bash
docker build -t vires-5 .
docker run -p 3000:3000 vires-5
```

## Environment Variables voor Productie

Zorg ervoor dat je deze variabelen instelt in je deployment platform:

```
NODE_ENV=production
API_URL=https://api.example.com
```

## Monitoring

### Error Tracking
- Voeg Sentry of soortgelijk service toe

### Performance
- Monitor Core Web Vitals
- Setup analytische tracking

## Rollback

Ter voorbereiding op problemen:

```bash
# Revert naar vorige versie
git revert <commit-hash>
git push
```

## CI/CD

GitHub Actions workflow is al geconfigureerd in `.github/workflows/ci.yml`.

De workflow:
1. Runt op elke push en PR naar main
2. Voert tests uit
3. Voert linting uit
4. Build applicatie

## Troubleshooting

### Build mislukt
- Check logs in je deployment platform
- Run `npm run build` lokaal
- Controleer dependencies

### Performance problemen
- Check bundle size: `npm install -g webpack-bundle-analyzer`
- Optimize images
- Enable gzip compression

### Environment variabelen niet geladen
- Verifieer de variabelen zijn ingesteld in je platform
- Restart deployment
- Check het build log
