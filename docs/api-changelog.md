---
title: "API Changelog"
metaTitle: "API Changelog"
description: "API Changelog"
---

## API develop

### Added

* API6 (Based on API5)
  * API6::browse: List server contents in a directory-style listing (Music, Podcast and Video catalogs)
  * API6::list: Replace get_indexes with a faster lookup and similar parameters returning `id`, `name`, `prefix` and `basename`
  * API6::catalog_add: Create a catalog (Require: 75)
  * API6::catalog_delete: Delete a catalog (Require: 75)
  * API6::live_stream_create: Create a new live stream (radio station)
  * API6::live_stream_edit: Edit a live stream
  * API6::live_stream_delete: Delete a stream buy ID
  * API6::register: Allow users to register an account (if enabled)
  * API6::playlist_create: Return an error if the playlist name already exists for that user
  * API6::user_edit (previously user_create):
    * Add `group` parameter to pick a catalog filter group
    * Add `fullname_public` to enable/disable using fullname in public display
    * Add `reset_apikey` to reset a user Api Key
    * Add `reset_streamtoken` to reset a user Stream Token
    * Add `clear_stats` reset all stats for this user **be very sure about this one!**
  * Add `prefix` (Prefix for Full Name) to album & artist responses
  * Add `basename` (Name without prefix) to album & artist responses
  * Add `bitrate` to Democratic objects
  * Add `format` to Song and Democratic objects
  * Add `stream_format`, `stream_bitrate`, `stream_mime` to Song objects (This is the transcoded output for a stream)
* JSON responses
  * Cast bool fields to `true` and `false` instead of "1" & "0"
  * Add `total_count` to resonses to give clients an idea of the total possible objects
* advanced_search
  * Add `album_disk` as a search type (uses album rules)
  * Add `song_genre` to album and artist searches
  * Add `possible_duplicate_album` to song search
  * Add `mbid_artist` to album search
  * Add `barcode` to album search
  * Add `catalog_number` to album search
  * Add `smartplaylist` to album search
  * Add `duplicate_tracks` to album and song search (MIN & MAX id for song search)
  * Alias `possible_duplicate_album` => `possible_duplicate` for album search
  * Alias `album_genre` => `genre` for album search
  * Alias `mbid_album` => `mbid` for album search
  * Alias `mbid_artist` => `mbid` for artist search
  * Alias `song_genre` => `genre` for song search

### Changed

* Api6
  * Renamed user_update to user_edit (user_update still works and will be depreciated in API7)
* ALL
  * Albums with no album_artist may now return 0 artist called 'Various'
  * Don't send AlbumDisk objects to the API
* XML responses
  * Api6 XML success and error response messages are put in a `message` element (like json)
  * For data responses id is the only attribute and everything else is an element
  * Name was not set as an attribute OR an element so now it's always an element
  * Return original XML output (that may be malformed) when loadxml fails.
* Api6::get_indexes: This method is depreciated and will be removed in Ampache 7.0.0 (Use Api6::list instead)

### Removed

* Api6
  * preciserating removed from all objects (use rating)
* Api6::album_songs remove `exact` as a parameter
* Api6::stream remove `podcast` as a valid `type` value
* Warning of depreciated methods from API5 have been removed from API6
  * Api6::tag
  * Api6::tags
  * Api6::tag_albums
  * Api6::tag_artists
  * Api6::tag_songs

### Fixed

* ALL
  * advanced_search methods were breaking with various offset and limits
* Api6 JSON
  * Share and Bookmark object id's were not strings
* Api3
  * Never send 0 ratings. They should always be null (e.g. `<rating/>`)
  * Artists method parameters were incorrect

## API 5.5.6

Fix various runtime errors and incorrect parameters for responses.

### Changed

* API browses all point to the Api class
* Use `FILTER_VALIDATE_IP` on ping calls

### Fixed

* Api5
  * `songs` set_filter call without browse parameter may have lost info
  * `get_indexes` set album_artist filter correctly
  * `artists` set album_artist filter correctly
  * `share_create` undefined filter check
* Api4
  * `songs` set_filter call without browse parameter may have lost info
  * `get_indexes` set album_artist filter correctly
  * `timeline` incorrect JSON attribute `data` instead of `date`
  * `catalogs` JSON had incorrect data for `last_add` and missing `enabled`
  * `albums` return an empty response with a bad artist id
  * `download` url parameter order matching "client, action, cache"
  * `catalogs` undefined filter check
  * `podcast` undefined filter check
  * `podcast_edit` undefined filter check
  * `podcasts` undefined filter check
  * `share_create` undefined filter check
  * `share_edit` undefined filter check
* Api3
  * `album_songs` return an empty response with a bad album id
  * `artist_albums` return an empty response with a bad artist id
  * Calls to `songs` with user ID instead of user object

## API 5.5.4

### Fixed

* User count in Api::ping and Api::handshake was doubled
* Api3::stats method had incorrect recent parameters
* Ensure the output `bitrate` and `mime` are set for song objects

## API 5.5.3

**NO CHANGE**

## API 5.5.2

### Added

* advanced_search
  * Add `song_artist` as a search type (uses artist rules)
  * Add `album_artist` as a search type (uses artist rules)
  * Add `song_genre`, `mbid_artist`, `mbid_song` to album search
  * Add `song_genre`, `mbid_album`, `mbid_song` to artist search
  * Add `possible_duplicate_album` to song search

### Fixed

* advanced_search
  * unable to retrieve song_artist or album_artist results

## API 5.5.1

**NO CHANGE**

## API 5.5.0

### Added

* Api::stream add new types `playlist` and `search` (Streams a random object from these lists)
* Api::download add new types `playlist` and `search`
* advanced_search
  * Add `podcast` as a search type
    * Add rule `title`
    * Add rule `podcast_episode` (Search by podcast episode name)
    * Add rule `time` (Episode length in minutes)
    * Add rule `state` (Completed, Pending Skipped)
    * Add rule `file`
    * Add rule `added`
    * Add rule `pubdate` (Episode Publication Date)
  * Add `podcast_episode` as a search type
    * Add rule `title`
    * Add rule `podcast` (Search by podcast name)
    * Add rule `time` (Length in minutes)
    * Add rule `state` (Completed, Pending Skipped)
    * Add rule `file`
    * Add rule `added`
    * Add rule `pubdate` (Publication Date)
  * Add `genre` as a search type
    * Add rule `title`

### Fixed

* API4::get_indexes podcast_episode was encoding into the API5 object
* API4::share_create was unable to share when using lowercase types
* advanced_search
  * Added missing `song` (was `song_title`) to album searches

## API  5.4.1

### Added

* Include `lyrics` in Song objects
* advanced_search
  * Add `file` to album and artist search
  * Add `track` to song search
  * Add `summary` to artist search

## API 5.4.0

### Added

* advanced_search
  * Add `file` to album and artist search

## API 5.3.3

### Added

* advanced_search
  * Add `song_title` to album search
  * Add `album_title` and `song_title` to artist search
  * Add `orphaned_album` to song search

## API 5.3.2

**NO CHANGE**

## API 5.3.1

**NO CHANGE**

## API 5.3.0

### Added

* advanced_search:
  * Add `songrating` to album search (My Rating (Song))
  * Add `songrating` (My Rating (Song)) and `albumrating` (My Rating (Album)) to artist search
  * Allow empty/null searches for all mbid searches
  * Allow empty/null searches for label searches
  * Add `song_count` to album and artist search
  * Add `album_count` to artist search
  * Add `myplayedartist` (Played by Me (Artist)) to album search
  * Add `song_artist` to album search
  * Add alias `album_artist` to album search for `artist` searches
  * Add `recent_added` to album search

## API 5.2.1

### Changed

* API5
  * Return the xml total_count of playlists based on hide_search preference

### Fixed

* API4
  * update_from_tags: type case error
  * rate: Object type to class mapping
  * flag: Object type to class mapping
  * update_art: Object type to class mapping and type case check
  * update_from_tags: Object type to class mapping
  * genre and tag function compatibility
* API3
  * stats: incorrect getRandom call
  * rate: Object type to class mapping
  * playlist: bad escaping on the playlist id

## API 5.2.0

Check out the docs for multi API support at [ampache.org](https://ampache.org/api/)

**note** JSON didn't exist for API3 so all json requests from API3 calls will revert to API5

### Added

* Support for API3, API4 and API5 responses including PHP8 support (keeps original tag calls)
* API5
  * playlists: sql for searches wasn't filtering
  * playlists: add parameter 'show_dupes' if true ignore 'api_hide_dupe_searches' setting
* API4
  * playlists: add parameter 'show_dupes' if true ignore 'api_hide_dupe_searches' setting
* API3
  * Added genre calls as an alias to tag functions to match API4 and API5

### API 5.1.1

### Fixed

* Access to podcast_episode_delete
* stats calls with an offest and limit
* advanced_search calls with an offset and limit

### API 5.1.0

### Added

* NEW API functions
  * Api::live_stream (get a radio stream by id)
  * Api::live_streams
* Api::stream Added type 'podcast_episode' ('podcast' to be removed in Ampache 6.0.0)
* Add 'time' and 'size' to all podcast_episode responses

### Changed

* live_stream objects added 'catalog' and 'site_url'
* stats: additional type values: 'video', 'playlist', 'podcast', 'podcast_episode'

### Fixed

* get_indexes: JSON didn't think live_streams was valid (it is)
* record_play: user is optional
* Bad xml tags in deleted functions
* scrobble: Add song_mbid, artist_mbid, album_mbid (docs have no '_' so support both)

### API 5.0.0

All API code that used 'Tag' now references 'Genre' instead

This version of the API is the first semantic version. "5.0.0"

### Added

* Add global playcount to podcast_episode and video responses
* searches (the number of saved smartlists) added to the handshake/ping response
* NEW API functions
  * Api::song_delete (Delete files when you are allowed to)
  * Api::user_preferences (Get your user preferences)
  * Api::user_preference (Get your preference by name)
  * Api::system_update (Check Ampache for updates and run the update if there is one.)
  * Api::system_preferences (Preferences for the system user)
  * Api::system_preference (Get a system preference by name)
  * Api::preference_create (Add a new preference to Ampache)
  * Api::preference_edit (Edit a preference value by name; optionally apply to all users)
  * Api::preference_delete (Delete a preference by name)
  * Api::labels (list your record labels)
  * Api::label (get a label by id)
  * Api::label_artists (get all artists attached to that label)
  * Api::get_bookmark (See if you've previously played the file)
  * Api::bookmarks (List all bookmarks created by your account)
  * Api::bookmark_create (Create a bookmark to allow revisting later)
  * Api::bookmark_edit (Edit a bookmark)
  * Api::bookmark_delete (Delete a bookmark by object id, type, user and client name)
  * Api::localplay_songs (Get the list of songs in your localplay instance)
  * API::deleted_songs
  * API::deleted_podcast_episodes
  * API::deleted_videos

### Changed

* The API version matches release version '5.0.0'
* A backcompatible version (500000) is sent when using old api versions
* handshake and ping counts now return the actual object counts for playlists
  * 'playlists' => $counts['playlist'],
  * 'searches' => $counts['search'],
  * 'playlists_searches' => $counts['playlist'] + $counts['search']
* Renamed functions:
  * tags => genres
  * tag => genre
  * tag_artists => genre_artists
  * tag_albums => genre_albums
  * tag_songs => genre_songs
* Don't allow duplicate podcast feeds
* Make filter optional in shares, genre_artists, genre_albums, genre_songs (Used as a general catch all method like genres)
* Error Codes and response structure has changed
  * 4700 Access Control not Enabled
  * 4701 Received Invalid Handshake
  * 4703 Access Denied
  * 4704 Not Found
  * 4705 Missing Method
  * 4706 Depreciated Method
  * 4710 Bad Request
  * 4742 Failed Access Check
* stats: Removed back compat from older versions. Only 'type' is mandatory
* Return empty objects when the request was correct but the results were empty
* Don't transcode podcast_episodes
* localplay
  * added 'track' parameter used by 'skip' commands to go to the playlist track (playlist starts at 1)
* system_update: update the database if required as well
* playlist_edit: added 'owner' as an optional parameter (Change playlist owner to the user id)
* catalog_file: Allow comma-separate task values. (good for API inotify scripts)
* podcast_episode object "pubdate" has been changed to ISO 8601 date (2004-02-12T15:19:21+00:00)
* podcast object "build_date" and "sync_date" have also been changed to ISO 8601 date

### Fixed

* catalog_file: Couldn't add files

### API 4.4.2

### Fixed

* API::indexes Artist albums were being added incorrectly for XML
* Send back the full album name in responses

### API 4.4.1

### Fixed

* API::stats would not offset recent calls

## API 4.4.0

### Added

* NEW API functions
  * Api::users (ID and Username of the site users)
* Api::localplay added new options to 'command' ('pause', 'add', 'volume_up', 'volume_down', 'volume_mute', 'delete_all', 'skip')
* Api::localplay added parameters:
  * 'oid' (integer) object_id to add //optional
  * 'type' (string) Default: 'Song' ('Song', 'Video', 'Podcast_Episode', 'Channel', 'Broadcast', 'Democratic', 'Live_Stream') //optional
  * 'clear' (integer) 0|1 clear the current playlist on add //optional
* Api::playlist_edit added new parameter 'sort': (0,1) sort the playlist by 'Artist, Album, Song' //optional
* Api::get_indexes
  * New type options: 'album_artist', 'podcast', 'podcast_episode', 'share', 'video'
  * Added parameter 'include': (0,1) (add the extra songs details if a playlist or podcast_episodes if a podcast)
* Api::rate - Added types 'playlist', 'podcast', 'podcast_episode', 'video', 'tvshow', 'tvshow_season'
* Api::flag - Added types 'podcast', 'podcast_episode', 'video', 'tvshow', 'tvshow_season'
* Add time to artist and album objects. (total time of all songs in seconds)
* Add songcount, albumcount to artist objects. (time in seconds)
* Add songcount to album objects. (time in seconds)
* Add type (release_type) to album objects
* Add disk to song objects
* Add time to video objects. (time in seconds)
* Add title, mime, catalog to podcast_episodes
* Api::advanced_search Add 'playlist', 'user' and 'video' to search types
* Api::handshake added extra total counts to the response
  * users, tags, podcasts, podcast_episodes, shares, licenses, live_streams, labels
* Api::ping match the handshake response (excluding the auth token)

### Changed

* get_indexes: 'playlist' now requires include=1 for xml calls if you want the tracks
* Make filter optional in shares
* Api::podcast_episodes
  * "url" is now a play url (instead of a link to the episode)
  * "public_url" is now the old episode link

### Fixed

* Api::podcast_edit wasn't able to edit a podcast...
* Api::democratic was using action from localplay in the return responses
* get_indexes for XML didn't include podcast indexes
* Set OUTDATED_DATABASE_OK on image.php, play/index.php and share.php to stop blocking requests
* Don't limit sub items when using a limit (e.g return all podcast episodes when selecting a podcast)

### Deprecated

* Dropped in API 5.0.0
  * Api::get_indexes; stop including playlist track and id in xml by default
  * Album objects: "tracks" will only include track details. Use "songcount"
  * Artist objects: "albums", "songs" will only include track details Use "albumcount" and "songcount"

## API 4.3.0

### Changed

* Api::record_play
  * Make 'user' parameter optional
  * Allow 'user' to the be user_id **or** the username string
  * Add 'date' parameter (optional)
  * Require 100 (Admin) permission to record plays for other users
* Api::get_indexes
  * Add 'hide_search' parameter (optional)
* Api::playlists
  * Add 'hide_search' parameter (optional)
* Setting a limit of 'none' would slice away all the results

## API 4.2.6

**NO CHANGE**

## API 4.2.5

**NO CHANGE**

## API 4.2.4

**NO CHANGE**

## API 4.2.3

**NO CHANGE**

## API 4.2.2

Minor bugfixes

### Added

* Api::advanced_search added parameter 'random' (0|1) to shuffle your searches

### Changed

* Remove spaces from advanced_search rule names. (Backwards compatible with old names)
  * 'has image' => 'has_image'
  * 'image height' => 'image_height'
  * 'image width' => 'image_width'
  * 'filename' => 'file' (Video search)

### Deprecated

* Search rules 'has image', 'image height', 'image width', 'filename'. (Removed in Ampache 5.0.0)

### Fixed

* Api::stream, Api::download Api::playlist_generate 'format' parameter was overwritten with 'xml' or 'json'
* Produce valid XML for playlist_generate using the 'id' format in XML

## API 4.2.1

No functional changes from 4.2.0

### Fixed

* Filter in "playlist" and "playlist_songs" fixed

## API 4.2.0

**API versions will follow release version and no longer use builds in the integer versions (e.g. 420000)**
API 5.0.0-release will be the first Ampache release to match the release string.

### Added

* JSON API now available!
  * Call xml as normal:
    * [<http://music.com.au/server/xml.server.php?action=handshake&auth=APIKEY&version=420000>]
  * Call the JSON server:
    * [<http://music.com.au/server/json.server.php?action=handshake&auth=APIKEY&version=420000>]
  * Example XML and JSON responses available [here](https://github.com/ampache/python3-ampache/tree/master/docs)
* NEW API functions
  * get_similar: send artist or song id to get related objects from last.fm
  * shares: get a list of shares you can access
  * share: get a share by id
  * share_create: create a share
  * share_edit: edit an existing share
  * share_delete: delete an existing share
  * podcasts: get a list of podcasts you can access
  * podcast: get a podcast by id
  * podcast_episodes: get a list of podcast_episodes you can access
  * podcast_episode: get a podcast_episode by id
  * podcast_episode_delete: delete an existing podcast_episode
  * podcast_create: create a podcast
  * podcast_edit: edit an existing podcast
  * podcast_delete: delete an existing podcast
  * update_podcast: sync and download new episodes
  * licenses: get a list of licenses you can access
  * license: get a license by id
  * catalogs: get all the catalogs
  * catalog: get a catalog by id
  * catalog_file: clean, add, verify using the file path (good for scripting)

### Changed

* Bump API version to 420000 (4.2.0)
* All calls that return songs now include ```<playlisttrack>``` which can be used to identify track order.
* ```<playcount>``` added to objects with a playcount.
* ```<license>``` added to song objects.
* Don't gather art when adding songs
* Added actions to catalog_action. 'verify_catalog' 'gather_art'
* API function "playlist_edit": added ability to edit playlist items
  * items  = (string) comma-separated song_id's (replace existing items with a new object_id) //optional
  * tracks = (string) comma-separated playlisttrack numbers matched to items in order //optional
* Random albums will get songs for all disks if album_group enabled

### Deprecated

* API Build number is depreciated (the last 3 digits of the api version)
  * API 5.0.0 will be released with a string version ("5.0.0-release")
  * All future 4.x.x API versions will follow the main Ampache version. (420000, 421000, 422000)
* ~~total_count in the XML API is depreciated and will be removed in API 5.0.0.~~
  * XML can count objects the same was as a JSON array [https://www.php.net/manual/en/simplexmlelement.count.php]
* ~~Genre in songs is depreciated and will be removed in API 5.0.0.~~
  * Use tag instead of genre, tag provides a genre ID as well as the name.

### Fixed

* Extra text in catalog API calls
* Don't fail the API calls when the database needs updating

## API 4.0.0 build 004

Bump API version to 400004 (4.0.0 build 004)

### Added

* Add Api::check_access to warn when you can't access a function

### Fixed

* Fix parameters using 0
* Get the correct total_count in xml when you set a limit
* Fix many XML formatting issues

## API 4.0.0 build 003

Bump API version to 400003 (4.0.0 build 003)

### Added

* user_numeric searches also available in the API. ([<https://ampache.org/api/api-xml-methods>])

### Changed

* Api::playlist - filter mandatory
* Api::playlist_edit - filter mandatory. name and type now optional
* Api::user - Extend return values to include more user fields
* Playlist::create - Return duplicate playlist ID instead of creating a new one
* Do not limit smartlists based on item count (return everything you can access)
* Api/Database - Add last_count for search table to speed up access in API

### Removed

* Artist::check - Remove MBID from Various Artist objects

### Fixed

* Fix Song::update_song for label
* Fix Api issues relating to playlist access

## API 4.0.0 build 001

* Bump API version to 400002 (4.0.0 build 001)

### Added

* Documented the Ampache API [<https://ampache.org/api/api-xml-methods>]
* Include smartlists in the API playlist calls.
* Authentication: allow sha256 encrypted apikey for auth
  * You must send an encrypted api key in the following fashion. (Hash key joined with username)
  * $passphrase = hash('sha256', $username . hash('sha256', $apikey));
* Added artist_tag to song searches
* flag: allows flagging object by id & type
* record_play: allows recording play of object without streaming
* catalog_action: allow running add_to_catalog|clean_catalog
* playlist_edit: allow editing name and type of playlist
* goodbye: Destroy session
* get_indexes: return simple index lists to allow a quicker library fill.
* check_parameter: error when mandatory inputs are missing
* stream: Raw stream of song_id
* download: Download, not recorded as a play
* get_art: Raw art file like subsonic getCoverArt
* user_create: 'user' access level only!
* user_update: update user details and passwords for non-admins
* user_delete: you can't delete yourself or and admin account!
* update_from_tags: updates a single album, artist, song from the tag data instead of the entire library!
* update_art: updates a single album, artist, song running the gather_art process
* update_artist_info: Update artist information and fetch similar artists from last.fm
* playlist_generate: Get a list of song xml, indexes or id's based on some simple search criteria. care of @4phun

### Changed

* Authentication: Require a handshake and generate unique sessions at all times
* advanced_search
  * 'is not' has been added shifting values down the list.
    (0=contains, 1=does not contain, 2=starts with, 3=ends with, 4=is, 5=is not, 6=sounds like, 7=does not sound like)
  * rule_1['name'] is depreciated. Instead of multiple searches for the same thing rule_1'name'
    has been replaced with 'title' (I have put a temp workaround into the search rules to alleviate this change)
* stats
  * allow songs|artists|albums (instead of just albums)
* playlists
  * allow return of smartlists as well as regular playlists (set a 5000 limit on unlimited smartlists)
* playlist_add_song
  * Added check boolean to skip duplicate songs
* playlist_remove_song
  * Allow uid of song instead of the track id from the playlist
