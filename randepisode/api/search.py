"""API endpoints for searching for TV shows."""
import flask
import requests
import randepisode
import tmdbsimple as tmdb


@randepisode.app.route("/api/v1/search")
def query_tmdb_search(search_term=""):
    """Query TMDB for search results."""
    context = {}
    user_query = search_term if search_term else flask.request.args.get("q")
    search_obj = tmdb.Search()
    try:
        results = search_obj.tv(query=user_query)
    except requests.HTTPError as e:
        # server error, I screwed something up
        print(e)
        return context, 500

    context["results"] = results["results"]
    return flask.jsonify(**context)
