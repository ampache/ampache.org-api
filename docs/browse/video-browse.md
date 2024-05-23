---
title: "Video Browse"
metaTitle: "Video Browse"
description: "API documentation"
---

This page focuses on a single object type.

Refer to the main [Api Browse methods](https://ampache.org/api/api-browse) page for further information regarding the other Browse types method.

### Available browse filters

    public const FILTERS = array(
        'add_gt',
        'add_lt',
        'alpha_match',
        'exact_match',
        'regex_match',
        'regex_not_match',
        'starts_with',
        'catalog',
        'genre',
        'update_gt',
        'update_lt'
    );

### Available browse sorts

    protected array $sorts = array(
        'title',
        'name',
        'catalog',
        'resolution',
        'length',
        'codec',
        'addition_time',
        'update_time',
        'total_count',
        'total_skip',
        'rand',
        'rating',
        'user_flag'
    );
