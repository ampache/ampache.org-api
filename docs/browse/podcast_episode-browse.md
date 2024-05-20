---
title: "Podcast Browse"
metaTitle: "Podcast Browse"
description: "API documentation"
---

This page focuses on a single object type.

Refer to the main [Api Browse methods](https://ampache.org/api/api-browse) page for further information regarding the other Browse types method.

### Available browse filters

    public const FILTERS = array(
        'podcast',
        'catalog',
        'add_gt',
        'add_lt',
        'alpha_match',
        'exact_match',
        'regex_match',
        'regex_not_match',
        'starts_with',
        'unplayed'
    );

### Available browse sorts

    protected array $sorts = array(
        'podcast',
        'title',
        'name',
        'catalog',
        'category',
        'author',
        'time',
        'pubdate',
        'state',
        'rand',
        'addition_time',
        'total_count',
        'total_skip',
        'rating',
        'user_flag',
    );
