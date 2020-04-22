"""Display the about page."""
import flask
import randepisode


@randepisode.app.route("/about")
def show_about():
    """Display /about route."""
    return flask.render_template("about.html")
