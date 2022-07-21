import { METHODS } from "http"
import { Router, default as express } from 'express'

console.log(METHODS)

const PORT = process.env.PORT || 3000

app.listen(PORT, function () {
	console.log(`Example app listening on port ${PORT}`);
});

