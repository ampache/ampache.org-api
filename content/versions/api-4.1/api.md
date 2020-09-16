---
title: "API 4.1"
metaTitle: "API 4.1"
metaDescription: "API documentation"
---

**Compatible Versions:** _>= 350001_

Ampache Provides an API for pulling out it's meta data in the form of simple XML documents. This was originally created for use by [Amarok](http://amarok.kde.org/), but there is no reason it couldn't be used to create other front-ends to the Ampache data. Access to the API is controlled by the Internal [Access Control Lists](api-acl). The KEY defined in the ACL is the passphrase that must be used to establish an API session. Currently all requests are limited to a maximum of 5000 results for performance reasons. To get additional results pass offset as an additional parameter.
If you have any questions or requests for this API please submit a [Feature Request](https://github.com/ampache/ampache/issues/new?assignees=&labels=&template=feature_request.md&title=%5BFeature+Request%5D). All dates in the API calls should be passed as [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) dates.

## Sending Handshake Request

Multiple authentication methods are available, described in the next sections.

### User / Password

The handshake is a combination of the following three things

* Encoded Passphrase
* Timestamp
* Username

The key that must be passed to Ampache is `SHA256(TIME+KEY)` where `KEY` is `SHA256('PASSWORD')`. Below is a PHP example

```PHP
$time = time();
$key = hash('sha256','mypassword');
$passphrase = hash('sha256',$time . $key);
```

Once you've generated the encoded passphrase, you can call the following URL (localhost/ampache is the location of your Ampache installation)

```Text
http://localhost/ampache/server/xml.server.php?action=handshake&auth=PASSPHRASE&timestamp=TIME&version=350001&user=USER
```

### Api Key

The key that must be passed to Ampache is the API Key generated for a specific user (none by default, only the administrator can generate one). Then call the following URL (localhost/ampache is the location of your Ampache installation):

```Text
http://localhost/ampache/server/xml.server.php?action=handshake&auth=API_KEY&version=350001
```

In API 400001 the key that must be passed to Ampache is `SHA256(USER+KEY)` where `KEY` is `SHA256('APIKEY')`. Below is a PHP example

```PHP
$user = 'username';
$key = hash('sha256', 'myapikey');
$passphrase = hash('sha256', $user . $key);
```

### Other handshake-related stuff

#### Ampache sheme

To standardize how to transfer Ampache connection information, the following Ampache scheme is defined.

```Text
ampache://authentication@hostname[:port]/subdirectory[#parameters]
```

for example:

* ampache://myuser:mypwd@localhost/ampache
* ampache://yourapikey@localhost:993/ampache#ssl=true

#### Application Name

By default Ampache uses USER_AGENT as application name but this could also be defined through http query string. Add `&client=YourAppName` to override the application name. This parameter also works on stream sessions.

#### Geolocation

* Latitude
* Longitude
* Place name

Optionally, you can also provide geolocation information `&geo_latitude=$latitude&geo_longitude=$longitude`, with an optional place name if you already know coordinates match `&geo_name=$placename`.

### Result

If your authenticated User and IP match a row in the Access List the following will be returned.

For XML

```XML
<?xml version="1.0" encoding="UTF-8" ?>
<root>
    <auth><%AUTHENTICATION TOKEN%></auth>
    <api><%APIVERSION%></api>
    <session_expire><![CDATA[2019-12-03T09:36:46+10:00]]></session_expire>
    <update><![CDATA[2019-11-26T16:35:05+10:00]]></update>
    <add><![CDATA[2019-12-03T06:42:55+10:00]]></add>
    <clean><![CDATA[2019-12-03T06:41:02+10:00]]></clean>
    <songs><![CDATA[268302]]></songs>
    <albums><![CDATA[25686]]></albums>
    <artists><![CDATA[11055]]></artists>
    <playlists><![CDATA[20]]></playlists>
    <videos><![CDATA[0]]></videos>
    <catalogs><![CDATA[4]]></catalogs>
</root>
```

All future interactions with the Ampache API must include the `AUTHENTICATION_TOKEN` as a `GET` variable named `auth`.

## Errors

All errors will be returned as an XML document as specified in the [XML API Error Document](api-errors). When possible the text part of the message will be translated into the users configured language.

## Methods

All methods must be passed as `action=METHODNAME`. All methods except the `handshake` can take an optional `offset=XXX` and `limit=XXX`. The limit determines the maximum number of results returned. The offset will tell Ampache where to start in the result set. For example if there are 100 total results and you set the offset to 50, and the limit to 50 Ampache will return results between 50 and 100. The default limit is 5000. The default offset is 0.

You can also pass it `limit=none` to overcome the `limit` limitation and return **all** the matching elements.

For more in depth information regarding the different api servers you can view the following documentation pages.

* [XML Documentation](/old-versions/api-4.1.0/xml-methods) page.

### Non-Data Methods

* handshake
* ping
* goodbye (MINIMUM_API_VERSION=400001)
* url_to_song
* check_parameter (MINIMUM_API_VERSION=400001)
* message (MINIMUM_API_VERSION=420000)

### Data Methods

* get_indexes (MINIMUM_API_VERSION=400001)
* artists
* artist
* artist_songs
* artist_albums
* albums
* album
* album_songs
* tags
* tag
* tag_artists
* tag_albums
* tag_songs
* songs
* song
* advanced_search (CHANGED_IN_API_VERSION=400001)
* stats (CHANGED_IN_API_VERSION=400001 `filter` added)
* playlists
* playlist
* playlist_songs
* playlist_create
* playlist_edit (MINIMUM_API_VERSION=400001)
* playlist_delete
* playlist_add_song (CHANGED_IN_API_VERSION=400001)
* playlist_remove_song (CHANGED_IN_API_VERSION=400001)
* playlist_generate (MINIMUM_API_VERSION=400001)
* shares (MINIMUM_API_VERSION=420000)
* share (MINIMUM_API_VERSION=420000)
* share_create (MINIMUM_API_VERSION=420000)
* share_edit (MINIMUM_API_VERSION=420000)
* share_delete (MINIMUM_API_VERSION=420000)
* get_similar (MINIMUM_API_VERSION=420000)
* podcasts (MINIMUM_API_VERSION=420000)
* podcast (MINIMUM_API_VERSION=420000)
* podcast_create (MINIMUM_API_VERSION=420000)
* podcast_edit (MINIMUM_API_VERSION=420000)
* podcast_delete (MINIMUM_API_VERSION=420000)
* podcast_episodes (MINIMUM_API_VERSION=420000)
* podcast_episode (MINIMUM_API_VERSION=420000)
* podcast_episode_delete (MINIMUM_API_VERSION=420000)
* catalogs (MINIMUM_API_VERSION=420000)
* catalog (MINIMUM_API_VERSION=420000)
* catalog_file (MINIMUM_API_VERSION=420000)
* search_songs
* videos
* video
* user
* user_create (MINIMUM_API_VERSION=400001)
* user_update (MINIMUM_API_VERSION=400001)
* user_delete (MINIMUM_API_VERSION=400001)
* stream (MINIMUM_API_VERSION=400001)
* download (MINIMUM_API_VERSION=400001)
* get_art (MINIMUM_API_VERSION=400001)
* rate
* flag (MINIMUM_API_VERSION=400001)
* record_play (MINIMUM_API_VERSION=400001)
* scrobble (MINIMUM_API_VERSION=400001)
* licenses (MINIMUM_API_VERSION=420000)
* license (MINIMUM_API_VERSION=420000)
* license_songs (MINIMUM_API_VERSION=420000)
* followers
* following
* toggle_follow
* last_shouts
* timeline
* friends_timeline
* catalog_action (MINIMUM_API_VERSION=400001)
* update_from_tags (MINIMUM_API_VERSION=400001)
* update_artist_info (MINIMUM_API_VERSION=400001)
* update_art (MINIMUM_API_VERSION=400001)
* update_podcast (MINIMUM_API_VERSION=420000)

### Control Methods

* localplay
* democratic

## Request URL Examples

For the purpose of this example the Ampache host is 'localhost' and the path to Ampache is /ampache

### Requesting all genres whose name starts with Rock

XML

```XML
http://localhost/ampache/server/xml.server.php?action=tags&auth=1234567890123456789012345678901&filter=Rock
```

### Requesting all song titles, with an offset of 5000

XML

```XML
http://localhost/ampache/server/xml.server.php?action=songs&auth=12345678901234567890123456789012&offset=5000
```