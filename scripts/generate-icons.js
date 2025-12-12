const fs = require('fs');
const path = require('path');
const pngToIco = require('png-to-ico');

const assetsDir = path.join(__dirname, '..', 'assets');
const buildDir = path.join(__dirname, '..', 'build');
const pngPath = path.join(assetsDir, 'app-icon.png');
const icoPath = path.join(buildDir, 'icon.ico');

async function main() {
  if (!fs.existsSync(pngPath)) {
    console.warn('[icons] Arquivo PNG não encontrado:', pngPath);
    console.warn('[icons] Coloque sua logo em assets/app-icon.png (recomendado 512x512).');
    return;
  }

  try {
    console.log('[icons] Gerando ICO a partir do PNG...');
    const buf = await pngToIco(pngPath);
    if (!fs.existsSync(buildDir)) {
      fs.mkdirSync(buildDir, { recursive: true });
    }
    fs.writeFileSync(icoPath, buf);
    console.log('[icons] Ícone gerado com sucesso em', icoPath);
  } catch (err) {
    console.error('[icons] Falha ao gerar ICO:', err.message);
    process.exitCode = 1;
  }
}

main();
