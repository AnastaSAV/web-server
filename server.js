const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
const e = require('express');
const server = http.createServer(app);
const port = process.env.PORT || 8090;

app.use(cors());
app.get('/', (req, res) => {
	res.send(__dirname + '/public');
});

app.post('/public', (req, res) => {
	res.json([]);
});
app.get('/', (req, res) => {
	res.send({message: 'hello www'})
});
	
	let users = [
		{
			id: 1,
			name: 'Bohdan',
			description: 'Software engeneer',
		},
		{
			id: 2,
			name: 'Vlad',
			description: 'Full stack dev',
		},
		{
			id: 3,
			name: 'Anna',
			description: 'Technical writer',
		},
		{
			id: 4,
			name: 'Anastasiia',
			description: 'JS dev',
		},
		{
			id: 5,
			name: 'Ivan',
			description: 'Dev Ops',
		},
		{
			id: 6,
			name: 'Evgenii',
			description: 'Solution architect',
		},
		{
			id: 7,
			name: 'Mariia',
			description: 'Graphic designer',
		},
		{
			id: 8,
			name: 'Nikolay',
			description: 'CTO',
		},
	]
	
	app.get('/users', (req, res) => {
		res.json(users);
	});
	app.delete('/users/:id', (req, res) => {
		const id = +req.params.id;
		users = users.filter(element => element.id !== id);
		res.json(users);
	});
	
	server.listen(port, () => {
		console.log(`listening on :${port}`);
	});