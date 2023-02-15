/** @type {import('@sveltejs/adapter-vercel').Config} */

export const config = {
  runtime: 'nodejs18.x',
	envVarsInUse: ['VITE_CLIENT_EMAIL', 'VITE_PRIVATE_KEY', 'VITE_SHEET_ID']
};