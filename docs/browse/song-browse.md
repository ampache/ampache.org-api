---
title: "Song Browse"
metaTitle: "Song Browse"
description: "API documentation"
---

This page focuses on a single object type.

Refer to the main [Api Browse methods](https://ampache.org/api/api-browse) page for further information regarding the other Browse types method.

### Available browse filters

    public const FILTERS = array(
        'add_gt',
        'add_lt',
        'album',
        'album_disk',
        'alpha_match',
        'artist',
        'catalog',
        'catalog_enabled',
        'disk',
        'enabled',
        'exact_match',
        'license',
        'regex_match',
        'regex_not_match',
        'starts_with',
        'genre',
        'top50',
        'unplayed',
        'update_gt',
        'update_lt',
        'user_catalog'
    );

### Available browse sorts

    protected array $sorts = array(
        'title',
        'name',
        'catalog',
        'year',
        'track',
        'time',
        'composer',
        'addition_time',
        'update_time',
        'object_count',
        'total_count',
        'total_skip',
        'album',
        'album_disk',
        'artist',
        'rand',
        'rating',
        'user_flag'
    );
