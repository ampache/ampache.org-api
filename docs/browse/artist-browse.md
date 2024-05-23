---
title: "Artist Browse"
metaTitle: "Artist Browse"
description: "API documentation"
---

This page focuses on a single object type.

Refer to the main [Api Browse methods](https://ampache.org/api/api-browse) page for further information regarding the other Browse types method.

### Available browse filters

    public const FILTERS = array(
        'add_gt',
        'add_lt',
        'album_artist',
        'song_artist',
        'alpha_match',
        'catalog',
        'catalog_enabled',
        'exact_match',
        'label',
        'regex_match',
        'regex_not_match',
        'starts_with',
        'genre',
        'unplayed',
        'update_gt',
        'update_lt',
    );

### Available browse sorts

    protected array $sorts = array(
        'title',
        'name',
        'placeformed',
        'yearformed',
        'song_count',
        'album_count',
        'total_count',
        'rand',
        'rating',
        'time',
        'user_flag'
    );
