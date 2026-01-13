# Troubleshooting Gids

Veel gestelde problemen en oplossingen.

## Installation & Setup

### npm install faalt
**Probleem**: Dependencies kunnen niet geïnstalleerd worden

**Oplossing**:
```bash
# Cache schoonmaken
npm cache clean --force

# Opnieuw proberen
rm -rf node_modules package-lock.json
npm install
```

### Node version incompatibiliteit
**Probleem**: "Node version X is required"

**Oplossing**:
```bash
# Check huidige versie
node --version

# Update Node.js naar 18+
# Via nvm:
nvm install 18
nvm use 18
```

## Development Server

### Port 3000 in gebruik
**Probleem**: "Port 3000 is already in use"

**Oplossing**:

Windows:
```bash
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

Mac/Linux:
```bash
lsof -i :3000
kill -9 <PID>
```

### Changes worden niet gereflecteerd
**Probleem**: Wijzigingen in code zijn niet zichtbaar

**Oplossing**:
```bash
# Hard refresh browser: Ctrl+Shift+R (Windows) of Cmd+Shift+R (Mac)
# Verwijder .cache folder
rm -rf .cache
# Restart dev server
npm run dev
```

## Build Issues

### Build command faalt
**Probleem**: `npm run build` geeft fouten

**Oplossing**:
```bash
# Check linting errors
npm run lint

# Check tests
npm test

# Run build met verbose output
npm run build -- --display verbose
```

### Bundle too large
**Probleem**: Gecompileerde app is groot

**Oplossing**:
- Split code in chunks
- Remove unused dependencies
- Minify assets
- Enable gzip compression

## Testing

### Tests falen
**Probleem**: `npm test` geeft fouten

**Oplossing**:
```bash
# Run tests in watch mode
npm run test:watch

# Run specifieke test
npm test -- example.test.js

# Check test coverage
npm test -- --coverage
```

### "Cannot find module" in tests
**Probleem**: Import errors in test bestanden

**Oplossing**:
```bash
# Jest config controleren
# Zorg dat jest.config.js correct geconfigureerd is
# Check moduleNameMapper in config
```

## Git & GitHub

### Merge conflicts
**Probleem**: Merge conflicts bij pull

**Oplossing**:
```bash
# Check conflicterende bestanden
git status

# Manually fix conflicts in files

# Mark as resolved
git add <file>
git commit -m "fix: resolve merge conflicts"
```

### "You are not authorized" bij push
**Probleem**: Kan niet pushen naar repository

**Oplossing**:
```bash
# Check git credentials
git config --global user.email "your@email.com"
git config --global user.name "Your Name"

# Update remote URL
git remote set-url origin https://github.com/vires-5/Michael-Vires.git
```

## Performance

### Slow development server
**Probleem**: Dev server is traag

**Oplossing**:
```bash
# Reduce source maps
# In webpack.config.js change devtool to 'cheap-source-map'

# Reduce linting on save
# Disable ESLint in IDE during development
```

### High memory usage
**Probleem**: Node process gebruikt veel RAM

**Oplossing**:
```bash
# Increase Node memory limit
NODE_OPTIONS=--max-old-space-size=4096 npm run build

# Or in .env:
NODE_OPTIONS=--max-old-space-size=4096
```

## Linting & Formatting

### ESLint errors
**Probleem**: Linting fails met errors

**Oplossing**:
```bash
# Auto-fix solvable issues
npm run lint -- --fix

# Format code
npm run format
```

## Common Error Messages

### "React is not defined"
**Oplossing**: Voeg `import React from 'react'` toe boven aan je JSX bestanden

### "Module not found: Can't resolve 'X'"
**Oplossing**: 
```bash
npm install X
```

### "Expected an assignment or function call and instead saw an expression"
**Oplossing**: Check je JSX syntax, mog een missing return statement zijn

## Getting Help

1. Check [ARCHITECTURE.md](./ARCHITECTURE.md) voor projectstructuur
2. Lees relevante [API.md](./API.md) docs
3. Open een GitHub issue
4. Contacteer maintainers
