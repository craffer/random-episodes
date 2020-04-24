# install dependencies
init:
	pip3 install -r requirements.txt
	pre-commit install
	npm install .
	npx webpack

build:
	npx webpack

run:
	./bin/flaskrun
