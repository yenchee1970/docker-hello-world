const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT=3000

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
	res.setHeader("Content-Type", "text/html");
	res.send(`
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta http-equiv="X-UA-Compatible" content="ie=edge" />
			<meta name="viewport" content="width=device-width, inital-scale=1.0" />
			<title>Docker Hello World!</title>
		</head>
		<body>
			<h1>Hello, World!</h1>
		</body>
	</html>
	`);
});

app.listen(PORT, () => {
	console.log("Server listen to port " + PORT);
});
