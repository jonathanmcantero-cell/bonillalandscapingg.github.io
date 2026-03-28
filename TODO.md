# GitHub Pages Deployment TODO

## Status: Blocked - Node.js Compatibility Issue (Catalina)

### [x] 1. Verify configurations ✓
### [x] 2. Title update ✓
### [x] 3. nvm installed ✓ (v24.14.1 LTS downloaded)

### Issue: Node v24 requires macOS 13.5+ (Catalina = 10.15). Crashes with libc++ error.

### Solutions (choose one):
1. **Recommended**: Install Node v16.20.2 (last Catalina support):
   ```
   export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh" && nvm install 16.20.2 && nvm use 16.20.2 && npm --version
   ```
2. Manual Node 16 pkg: https://nodejs.org/dist/v16.20.2/node-v16.20.2.pkg
3. Upgrade macOS (if possible).

**Next:** User run Node v16 command, confirm `npm --version`, then I run `npm ci && npm run build`.

**Project ready for deploy once Node fixed - all configs correct!**
