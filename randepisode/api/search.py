"""API endpoints for searching for TV shows."""
import flask
import randepisode
import tmdbsimple as tmdb


@randepisode.app.route("/api/v1/search")
def query_tmdb_search(search_term=""):
    """Query TMDB for search results."""
    context = {}
    user_query = search_term if search_term else flask.request.args.get("q")
    search_obj = tmdb.Search()
    context["results"] = search_obj.tv(query=user_query)
    return flask.jsonify(**context)
