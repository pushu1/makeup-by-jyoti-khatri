import { createServer } from 'vite';

async function start() {
  const server = await createServer({
    configFile: './vite.config.js',
    server: {
      port: 5173,
      host: '0.0.0.0'
    }
  });

  await server.listen();
  console.log('\n✨ Vite React dev server is running on http://localhost:5173\n');
}

start().catch((err) => {
  console.error('Failed to start Vite dev server:', err);
});
