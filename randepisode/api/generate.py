"""API endpoints for generating a random episode of selected TV shows."""
import random
import flask
import randepisode
import tmdbsimple as tmdb


@randepisode.app.route("/api/v1/generate", methods=["GET", "POST"])
def generate_random_episode():
    """Return a randomly selected episode from a list of TV shows."""
    context = {}

    if flask.request.method == "POST":
        # retrieve the list of show IDs from the data sent in the POST request
        show_ids = flask.request.get_json()
        # select a show at random
        random_id = random.choice(show_ids)

        # download information about the specific show from TMDB
        show_obj = tmdb.TV(id=random_id)
        random_season_num = random.randint(1, show_obj.info()["number_of_seasons"])
        season_obj = tmdb.TV_Seasons(random_id, random_season_num)

        # randomly select an episode from our season
        random_episode_obj = random.choice(season_obj.info()["episodes"])

        context["episode"] = random_episode_obj

    return flask.jsonify(**context)
