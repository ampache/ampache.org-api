---
title: "Podcast Browse"
metaTitle: "Podcast Browse"
description: "API documentation"
---

This page focuses on a single object type.

Refer to the main [Api Browse methods](https://ampache.org/api/api-browse) page for further information regarding the other Browse types method.

### Available browse filters

    public const FILTERS = array(
        'alpha_match',
        'exact_match',
        'regex_match',
        'regex_not_match',
        'starts_with',
        'catalog',
        'unplayed'
    );

### Available browse sorts

    protected array $sorts = array(
        'title',
        'name',
        'catalog',
        'website',
        'episodes',
        'rand',
        'rating',
        'user_flag'
    );