import { google } from 'googleapis';

/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
	envVarsInUse: ['VITE_CLIENT_EMAIL', 'VITE_PRIVATE_KEY', 'VITE_SHEET_ID']
};

const BASE_URL = 'https://www.googleapis.com/auth/spreadsheets';
const CLIENT_EMAIL = import.meta.env.VITE_CLIENT_EMAIL;
const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY;
const SHEET_ID = import.meta.env.VITE_SHEET_ID;

export const load = async () => {
	try {
		const authorize = new google.auth.JWT(CLIENT_EMAIL, undefined, PRIVATE_KEY, [BASE_URL]);
		console.log({ authorize });

		const googleSheet = google.sheets({
			version: 'v4',
			auth: authorize
		});
		console.log({ googleSheet });

		console.log({ spreadsheetId: SHEET_ID });
		const response = await googleSheet.spreadsheets.values.get({
			spreadsheetId: SHEET_ID,
			range: 'A1:G39'
		});
		console.log({ response });

		console.log(response.data);

		return response.data;
	} catch (e) {
		console.log('Error: ', e);
	}
};
