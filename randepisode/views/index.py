"""Display the main view."""
import flask
import randepisode


@randepisode.app.route("/")
def show_index():
    """Display / route."""
    return flask.render_template("index.html")
