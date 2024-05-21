---
title: "Playlist Browse"
metaTitle: "Playlist Browse"
description: "API documentation"
---

This page focuses on playlist browses.

Refer to the main [Api Browse methods](https://ampache.org/api/api-browse) page for further information regarding the other Browse types method.

In the Ampache API a playlist is actually a combined object of static playlists and dynamic searches.

This allows you to list these objects together in a single call.

There are options to ignore, hide or filter searches from your playlist calls but playlist calls will return both types of object.

### Available browse filters

```
    // playlist_search
    public const FILTERS = array(
        'alpha_match',
        'exact_match',
        'hide_dupe_smartlist',
        'not_like',
        'playlist_open',
        'playlist_type',
        'playlist_user',
        'regex_match',
        'regex_not_match',
        'smartlist',
        'starts_with',
        'not_starts_with'
    );

    // playlist
    public const FILTERS = array(
        'alpha_match',
        'exact_match',
        'not_like',
        'playlist_type',
        'playlist_user',
        'regex_match',
        'regex_not_match',
        'starts_with',
        'not_starts_with'
    );

    // smartplaylist
    public const FILTERS = array(
        'alpha_match',
        'exact_match',
        'not_like',
        'playlist_open',
        'playlist_type',
        'playlist_user',
        'regex_match',
        'regex_not_match',
        'starts_with',
        'not_starts_with'
    );
```

### Available browse sorts

```
    // playlist_search
    protected array $sorts = array(
        'rand',
        'date',
        'last_update',
        'title',
        'name',
        'rating',
        'type',
        'user',
        'username',
        'user_flag'
    );

    // playlist
    protected array $sorts = array(
        'rand',
        'date',
        'last_update',
        'title',
        'name',
        'rating',
        'type',
        'user',
        'username',
        'user_flag'
    );

    // smartplaylist
    protected array $sorts = array(
        'date',
        'last_update',
        'title',
        'name',
        'limit',
        'rand',
        'random',
        'rating',
        'type',
        'user',
        'username',
        'user_flag'
    );
```

