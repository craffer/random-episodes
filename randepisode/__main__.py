"""Returns a random episode from a list of TV shows."""
import random
import tmdbsimple as tmdb
import randepisode.config as config

tmdb.API_KEY = config.API_KEY


def get_random_episode(shows):
    """Return ID of a random episode given a list of TV shows."""
    random_show = random.choice(shows)
    num_seasons = random_show['last_episode_to_air']['season_number']
    random_season_num = random.randint(1, num_seasons)
    season = tmdb.TV_Seasons(random_show['id'], random_season_num)
    return random_show, random.choice(season.info()['episodes'])


def main():
    """Random episode generator."""
    # gets the list of desired shows from the user
    show_names = []
    while True:
        show_name = input('Enter a TV show: ')
        if show_name == '':
            break
        show_names.append(show_name)

    show_info_list = []

    # queries tmdb to get TV objects for the requested shows
    search = tmdb.Search()
    for name in show_names:
        response = search.tv(query=name)
        show = response['results'][0]
        tv_obj = tmdb.TV(id=show['id'])
        show_info_list.append(tv_obj.info())

    # until the user says stop, generates a random episode from a show
    go_again = True
    while go_again:
        result = get_random_episode(show_info_list)
        show = result[0]
        episode = result[1]
        print('\nRANDOM EPISODE:',
              '\nShow:', show['name'],
              '\nSeason:', episode['season_number'],
              '\nEpisode #:', episode['episode_number'],
              '\nEpisode name:', episode['name'],
              '\nDescription:', episode['overview'])

        go_again = input('\nTry again with the same shows? y/n: ') == 'y'

if __name__ == "__main__":
    main()
