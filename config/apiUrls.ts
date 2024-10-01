/*
+++ Warning: +++
When using `npm run export` of `npm run build` command, the request URL in the server-side components 
cannot be "http://localhost:3000/api/xxx"
*/
const config = {

	"LOGIN_REQUEST": `https://uiux.cc/server/sessions-create.php`,
	"USER_AUTHENTICATE": `https://uiux.cc/server/authenticate.php`,
	"SIGNUP_REQUEST": "",
	
};


/**
 * API for Test on Localhost
 * 
 * (Please use a PHP server environment with a local port of 4000, check the file at `./backend/server-php.js`)
 */
const localConfig = {


	/*
	 TYPE: User (The PHP files are located at `./public/server/`)
	 ------------------------------------------
	*/
	"LOGIN_REQUEST": "http://localhost:4000/sessions-create.php",
	"USER_AUTHENTICATE": "http://localhost:4000/authenticate.php",
	"SIGNUP_REQUEST": "",

};


const urls = process.env.NODE_ENV === "production" 
? config 
: localConfig;


export default urls;