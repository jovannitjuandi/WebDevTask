/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
*/

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
	let filePath = path.join(__dirname, 'Pages', req.url === '/' ? 'index.html' : req.url);
	let ext = path.extname(filePath);
	let contentType = 'text/html';
	
	switch(ext) {
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
		case '.json':
			contentType = 'application/json';
			break;
		case '.png':
			contentType = 'image/png';
			break;
		case '.jpg':
			contentType = 'image/jpg';
			break;
		default: {
			contentType = 'text/html';
		}
	}
	
	fs.readFile(filePath, (err, content) => {
		if (err) {
			if (err.code == 'ENOENT') {
				fs.readFile(path.join(__dirname, 'Pages', 'error.html'), (err, content) => {
					res.writeHead(200, {'Content-Type': 'text/html'});
					res.end(content, 'utf8');
				})
			} else {
				res.writeHead(500);
				res.end(`SERVER ERROR: ${err.code}`)
			}
		} else {
			res.writeHead(200, {'Content-Type': contentType})
			res.end(content, 'utf8');
		}
	});
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server Running on ${PORT}`));