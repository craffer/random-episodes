"""Package initializer for randepisode's Flask backend."""
import flask

# app is a single object used by all the code modules in this package
app = flask.Flask(__name__)  # pylint: disable=invalid-name

# Read settings from config module (randepisode/config.py)
app.config.from_object("randepisode.config")

# tell our app about our API and views files
import insta485.api  # noqa: E402  pylint: disable=wrong-import-position
import insta485.views  # noqa: E402  pylint: disable=wrong-import-position
