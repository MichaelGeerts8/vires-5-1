# Setup Gids

Dit document beschrijft hoe je de Vires-5 ontwikkelomgeving opzet.

## Vereisten

- Node.js 18.0+ of hoger
- npm of yarn
- Git

## Installatie

### 1. Repository clonen
```bash
git clone https://github.com/vires-5/Michael-Vires.git
cd vires-5
```

### 2. Dependencies installeren
```bash
npm install
```

### 3. Environment configureren
```bash
cp config/.env.example .env
```

Edit `.env` bestand naar behoefte.

### 4. Verificatie
```bash
npm run build
npm test
```

## Development Server

Start de development server:
```bash
npm run dev
```

De applicatie is beschikbaar op `http://localhost:3000`

## Commando's

| Commando | Beschrijving |
|----------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Bouw production versie |
| `npm test` | Run alle tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Check code style |
| `npm run format` | Format code met Prettier |

## Troubleshooting

### Port 3000 is al in gebruik
```bash
# Op Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Op Mac/Linux
lsof -i :3000
kill -9 <PID>
```

### Dependencies problemen
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build faalt
```bash
npm run lint
npm test
```

Check de error messages en fix deze.

## Volgende Stappen

- Lees [ARCHITECTURE.md](./docs/ARCHITECTURE.md) voor projectstructuur
- Bekijk [CONTRIBUTING.md](./CONTRIBUTING.md) voor bijdragerichtlijnen
- Check [API.md](./docs/API.md) voor API documentatie
