// import { OAuth2Client } from 'google-auth-library';
// import path from 'node:path';
// import { readFile } from 'fs/promises';

// import { getEnvWar } from './getEnv.js';
// import createHttpError from 'http-errors';

// const PATH_JSON = path.join(process.cwd(), getEnvWar('google-oauth.json'));

// const oauthConfig = JSON.parse(await readFile(PATH_JSON));

// const googleAuthClient = new OAuth2Client({
//   client_id: getEnvWar('GOOGLE_AUTH_CLIENT_ID'),
//   client_secret: getEnvWar('GOOGLE_AUTH_CLIENT_SECRET'),
//   redirect_uris: oauthConfig.web.redirect_uris[0],
// });
// export const generateAuthUrl = () =>
//   googleOAuthClient.generateAuthUrl({
//     scope: [
//       'https://www.googleapis.com/auth/userinfo.email',
//       'https://www.googleapis.com/auth/userinfo.profile',
//     ],
//   });
// export const validateCode = async (code) => {
//   const response = await googleAuthClient.getToken(code);

//   if (response.tokens.id_token) throw createHttpError(401, 'Unauthorized');
//   const ticket = await googleAuthClient.verifyIdToken({
//     idToken: response.tokens.id_token,
//   });
//   return ticket;
// };

// export const getFullNameFromGoogleTokenPayload = (payload) => {
//   let fullname = 'Guest';
//   if (payload.given_name && payload.family_name) {
//     fullname = `${payload.given_name} ${payload.family_name}`;
//   } else if (payload.given_name) {
//     fullname = payload.given_name;
//   }
//   return fullname;
// };
