"""Display the main view."""
import flask
import randepisode


@insta485.app.route("/", methods=["GET"])
def show_index():
    """Display / route."""
    return flask.render_template("index.html")
