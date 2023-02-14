import { google } from 'googleapis';
import type { PageServerLoad } from './$types';

/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
	envVarsInUse: ['VITE_CLIENT_EMAIL', 'VITE_PRIVATE_KEY', 'VITE_SHEET_ID']
};

const BASE_URL = 'https://www.googleapis.com/auth/spreadsheets';
const CLIENT_EMAIL = import.meta.env.VITE_CLIENT_EMAIL;
const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY;
const SHEET_ID = import.meta.env.VITE_SHEET_ID;

export const load = (async () => {
	try {
		const authorize = new google.auth.JWT(CLIENT_EMAIL, undefined, PRIVATE_KEY, [BASE_URL]);

		const googleSheet = google.sheets({
			version: 'v4',
			auth: authorize
		});

		const response = await googleSheet.spreadsheets.values.get({
			spreadsheetId: SHEET_ID,
			range: 'A1:G39'
		});

		return response.data;
	} catch (e) {
		console.log('Error: ', e);
		return e;
	}
}) satisfies PageServerLoad;
