# Random Episode Generator

The Random Episode Generator is a web app for combating boredom through your favorite TV shows.

## Installation

Clone this repository and create a Python virtual environment, and then run `make init` to install our dependencies.

```bash
git clone git@github.com:craffer/random-episodes.git
cd random-episodes
python3 -m venv env
make init
```

## Usage

To run the program locally, use the bash script provided and access the site at [localhost:8000](localhost:8000).

```bash
./bin/flaskrun
```

## Deployment

This project is deployed to a DigitalOcean droplet, served using uWSGI and Nginx. It can be accessed at [https://conorrafferty.com/episodes](https://conorrafferty.com/episodes).

## License

This project is liscensed under the MIT license – see the [LICENSE](LICENSE) file for more details.

## Acknowledgements

This project uses the [TMDb API](https://www.themoviedb.org/documentation/api) to get data and images about TV shows, but is not endorsed or certified by TMDb.
