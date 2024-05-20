---
title: "API Browse methods"
metaTitle: "API Browse methods"
description: "API documentation"
---

Starting in Amapche 6.5.0; API6 has added many additional sorting and filtering options to browse methods.

These methods utilize the Ampache Browse class to allow more advanced queries without having to use searches or post-processing by the client.

The browse can be filtered and sorted based on the output type.

e.g. A song browse will return `songs`. You can filter by `genre` and return all songs that have that genre.

### Browse types and available methods

When you create a browse you are querying a database table and will return a single type of object.

The exception to this is a `playlist_search` browse which is a combination of `playlist` and `search` objects.

This has been used primarily by the API to combine these objects into single calls.

To allow this; all searches are prefixed with 'smart_' meaning that the search 2256 will return as smart_2256.

* [Album Browses](https://ampache.org/api/browse/album-browse) browses
  * albums
  * artist_albums (`albums` filtered by `artist`)
  * genre_albums (`albums` filtered by `genre`)
* [Artist Browses](https://ampache.org/api/browse/artist-browse) browses (includes `album_artist` and `song_artist` subtypes.)
  * artists
  * genre_artists (`artists` filtered by `genre`)
  * label_artists (`artists` filtered by `label`)
* [Catalog Browses](https://ampache.org/api/browse/catalog-browse) browses
  * catalogs
* [Follower Browses](https://ampache.org/api/browse/follower-browse) browses
  * followers
* [Genre Browses](https://ampache.org/api/browse/genre-browse) browses
  * genres
* [Label Browses](https://ampache.org/api/browse/label-browse) browses
  * labels
* [License Browses](https://ampache.org/api/browse/license-browse) browses
  * licences
* [Live Stream Browses](https://ampache.org/api/browse/live_stream-browse) browses
  * live_streams
* [Playlist Browses](https://ampache.org/api/browse/playlist-browse) browses
  * playlists (Combine `playlist` and `smartlist` objects into a single list)
  * user_playlists (`playlists` filtered by `user`)
  * user_smartlists (`smartlists` filtered by `user`)
* [Podcast Browses](https://ampache.org/api/browse/podcast-browse) browses
  * podcasts
* [Podcast Episode Browses](https://ampache.org/api/browse/podcast-browse) browses
  * podcast_episodes
* [Share Browses](https://ampache.org/api/browse/share-browse) browses
  * shares
* [Song Browses](https://ampache.org/api/browse/song-browse) browses
  * album_songs (`songs` filtered by `album`)
  * artist_songs (`songs` filtered by `artist`)
  * genre_songs (`songs` filtered by `genre`)
  * license_songs (`songs` filtered by `license`)
  * songs
* [User Browses](https://ampache.org/api/browse/user-browse) browses
  * users
* [Video Browses](https://ampache.org/api/browse/video-browse) browses
  * videos

* Methods that return multiple object types return type browses
  * 'catalog', 'artist', 'album', 'song', 'podcast', 'podcast_episode'
    * browse
  * 'album_artist', 'album', 'artist', 'catalog', 'live_stream', 'playlist', 'podcast_episode', 'podcast', 'share', 'song_artist', 'song', 'video'
    * get_indexes
    * index
    * list

### Additional browse parameters

Each method now has 2 additional parameters.

#### cond

Apply a filter to the objects.

Add comma separated filter and value pairs, use `;` to split additional filters.

`&cond=artist,1240;catalog,2`

Conditions that don't require a value can be sent with a null value. (`&cond=unplayed,;catalog,2`)

#### sort

Apply a different sort for the output repsonse.

**NOTE** There can only be one sort applied to each browse.

The default sort is (usually) `name`. This is the name of the returned objects sorted ascending.

The sort parameter docstring on each browse method will tell you the default sort and link to available sorts.

### Available cond filters

Allowed conditional filters are derived from the output type.

Conditions are documented for each method, some of these filters are used by the method to create the output.

**NOTE** You can overwrite filters applied to a method with your own conditions and this can break your expected response

You can apply any valid filter for that output type on top of the default filters to these methods.

For example genre_artists uses the `tag` filter to identify the tag and return artist objects.

* Call genre_artists for the tag 215. `https://music.com.au/server/json.server.php?action=genre_artists&auth=APIKEY&filter=215`
* Add `https://music.com.au/server/json.server.php?action=genre_artists&auth=APIKEY&filter=215&cond=tag,111`
* Your call will return Artists who are connected to the 111 genre insteas of 215.

When you add a conditional parameter you are overwriting any default filter applied by the method.

| rule_1_operator | Object Types                      |
|:---------------:|-----------------------------------|
|        0        | contains                          |
|        1        | does not contain                  |
|        2        | starts with                       |
|        3        | ends with                         |
|        4        | is                                |
|        5        | is not                            |
|  6 (Text Only)  | sounds like                       |
|  7 (Text Only)  | does not sound like               |
|  8 (Text Only)  | matches regular expression        |
|  9 (Text Only)  | does not match regular expression |
|       10        | is greater than or equal to       |
|       11        | is less than or equal to          |
|       12        | is                                |
|       13        | is not                            |
|       14        | is greater than                   |
|       15        | is less than                      |

### Available sort... sorts

Select your operator (integer only!) based on the type or your selected search

**NOTE** with the numeric_limit and is_true operators the operator is ignored, but still required

| rule_1_operator | Object Types                      |
|:---------------:|-----------------------------------|
|        0        | contains                          |
|        1        | does not contain                  |
|        2        | starts with                       |
|        3        | ends with                         |
|        4        | is                                |
|        5        | is not                            |
|  6 (Text Only)  | sounds like                       |
|  7 (Text Only)  | does not sound like               |
|  8 (Text Only)  | matches regular expression        |
|  9 (Text Only)  | does not match regular expression |
|       10        | is greater than or equal to       |
|       11        | is less than or equal to          |
|       12        | is                                |
|       13        | is not                            |
|       14        | is greater than                   |
|       15        | is less than                      |
