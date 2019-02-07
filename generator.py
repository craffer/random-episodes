"""Returns a random episode from a list of TV shows."""
import tmdbsimple as tmdb
import random

tmdb.API_KEY = '90988535169c2dd1030926589ab9e500'

# gets the list of desired shows from the user
show_names = []
while True:
    show_name = input('Enter a TV show: ')
    if show_name == '':
        break
    show_names.append(show_name)


show_list = []
search = tmdb.Search()

for name in show_names:
    response = search.tv(query=name)
    show = response['results'][0]
    show_list.append(tmdb.TV(id=show['id']))


def get_random_episode(shows):
    """Return ID of a random episode given a list of TV shows."""
    random_show = random.choice(shows)
    num_seasons = random_show.info()['last_episode_to_air']['season_number']
    random_season_num = random.randint(1, num_seasons)
    season = tmdb.TV_Seasons(random_show.id, random_season_num)
    return random_show, random.choice(season.info()['episodes'])

result = get_random_episode(show_list)
show = result[0]
episode = result[1]
print('Show:', show.info()['name'],
      '\nSeason:', episode['season_number'],
      '\nEpisode #:', episode['episode_number'],
      '\nEpisode name:', episode['name'])
