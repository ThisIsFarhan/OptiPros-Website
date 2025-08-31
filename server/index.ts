import { exec } from 'child_process';

console.log('Starting OptiPros frontend...');

// Start Vite for frontend-only development with allowed hosts
const viteProcess = exec('npx vite --host 0.0.0.0 --port 5000 --config vite.frontend.config.ts', (error, stdout, stderr) => {
  if (error) {
    console.error(`Vite error: ${error}`);
    return;
  }
  if (stderr) console.error(`Vite stderr: ${stderr}`);
  console.log(`Vite stdout: ${stdout}`);
});

viteProcess.stdout?.pipe(process.stdout);
viteProcess.stderr?.pipe(process.stderr);

process.on('SIGINT', () => {
  console.log('Shutting down...');
  viteProcess.kill('SIGINT');
  process.exit();
});

process.on('SIGTERM', () => {
  viteProcess.kill('SIGTERM');  
  process.exit();
});