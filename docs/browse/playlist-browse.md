---
title: "Playlist Browse"
metaTitle: "Playlist Browse"
description: "API documentation"
---

This page focuses on a single object type.

Refer to the main [Api Browse methods](https://ampache.org/api/api-browse) page for further information regarding the other Browse types method.

### Available browse filters

    // playlist
    public const FILTERS = array(
        'alpha_match',
        'exact_match',
        'not_like',
        'playlist_type',
        'playlist_user',
        'regex_match',
        'regex_not_match',
        'starts_with'
    );

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
        'starts_with'
    );

### Available browse sorts

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