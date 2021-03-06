"""Package initializer for randepisode's Flask backend."""
import flask
import os
import tmdbsimple as tmdb

# app is a single object used by all the code modules in this package
app = flask.Flask(__name__)  # pylint: disable=invalid-name

# Read settings from config module (randepisode/config.py)
app.config.from_object("randepisode.config")

# Overlay settings read from file specified by environment variable. This is
# useful for using different on development and production machines.
# Reference: http://flask.pocoo.org/docs/0.12/config/
app.config.from_envvar("FLASK_SETTINGS", silent=True)

# Set our TMDB API key from environment variables
tmdb.API_KEY = os.environ["TMDB_KEY"]

# tell our app about our API and views files
import randepisode.api  # noqa: E402  pylint: disable=wrong-import-position
import randepisode.views  # noqa: E402  pylint: disable=wrong-import-position
