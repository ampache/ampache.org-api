---
title: "Album Search"
metaTitle: "Album Search"
description: "API documentation"
---

This page focuses on a single object type.

Refer to the main [Advanced Search](https://ampache.org/api/api-advanced-search) page for further information regarding the advanced_search method.

### Available search rules

Select the type of search based on the type of data you are searching for. (songs, playlists, etc)

| rule_1                   | Title                          | Operator Type   |
|--------------------------|--------------------------------|-----------------|
| title                    | Title / Name                   | text            |
| name                     | (*Alias of title)              |                 |
| artist                   | Artist                         | text            |
| song_artist              | Song Artist                    | text            |
| song                     | Song Title                     | text            |
| song_title               | (*Alias of song)               |                 |
| year                     | Year                           | numeric         |
| original_year            | Original Year                  | numeric         |
| release_type             | Release Type                   | text            |
| release_status           | Release Status                 | text            |
| myrating                 | My Rating                      | numeric         |
| rating                   | Rating (Average)               | numeric         |
| songrating               | My Rating (Song)               | numeric         |
| artistrating             | My Rating (Artist)             | numeric         |
| favorite                 | Favorites                      | text            |
| played_times             | # Played                       | numeric         |
| last_play                | My Last Play                   | days            |
| myplayed                 | Played by Me                   | boolean         |
| myplayedartist           | Played by Me (Artist)          | boolean         |
| song_count               | Song Count                     | numeric         |
| time                     | Length (in minutes)            | numeric         |
| genre                    | Genre                          | tags            |
| tag                      | (*Alias of genre)              |                 |
| album_tag                | (*Alias of genre)              |                 |
| album_genre              | (*Alias of genre)              |                 |
| song_genre               | Song Genre                     | tags            |
| song_tag                 | (*Alias of song_genre)         |                 |
| no_genre                 | No Genre                       | is_true         |
| no_tag                   | (*Alias of no_genre)           |                 |
| other_user               | Another User                   | user_numeric    |
| playlist                 | Playlist                       | boolean_numeric |
| playlist_name            | Playlist Name                  | text            |
| file                     | Filename                       | text            |
| recent_played            | Recently Played                | numeric_limit   |
| recent_added             | Recently Added                 | numeric_limit   |
| catalog                  | Catalog                        | boolean_numeric |
| mbid                     | MusicBrainz ID                 | text            |
| mbid_album               | (*Alias of mbid)               |                 |
| mbid_song                | MusicBrainz ID (Song)          | text            |
| mbid_artist              | MusicBrainz ID (Artist)        | text            |
| has_image                | Local Image                    | boolean         |
| image_height             | Image Height                   | numeric         |
| image_width              | Image Width                    | numeric         |
| possible_duplicate       | Possible Duplicate             | is_true         |
| possible_duplicate_album | (*Alias of possible_duplicate) |                 |

### Available operator values

Select your operator (integer only!) based on the type or your selected search

**NOTE** with the numeric_limit and is_true operators the operator is ignored, but still required

| rule_1_operator | text / tags                       | numeric / user_numeric                       | boolean, boolean_numeric, days |
|:---------------:|-----------------------------------|----------------------------------------------|--------------------------------|
|        0        | contains                          | is greater than or equal to / has loved      | is true / before (x) days ago  |
|        1        | does not contain                  | is less than or equal to / has rated 5 stars | is false / after (x) days ago  |
|        2        | starts with                       | equals / has rated 4 stars                   |                                |
|        3        | ends with                         | does not equal / has rated 3 stars           |                                |
|        4        | is                                | is greater than / has rated 2 stars          |                                |
|        5        | is not                            | is less than / has rated 1 stars             |                                |
|  6 (Text Only)  | sounds like                       |                                              |                                |
|  7 (Text Only)  | does not sound like               |                                              |                                |
|  8 (Text Only)  | matches regular expression        |                                              |                                |
|  9 (Text Only)  | does not match regular expression |                                              |                                |

Send the correct input based on the type of search.

| rule_1_input |
|--------------|
| text         |
| integer      |
| boolean      |
