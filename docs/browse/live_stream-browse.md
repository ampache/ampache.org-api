---
title: "Live Stream Browse"
metaTitle: "Live Stream Browse"
description: "API documentation"
---

This page focuses on a single object type.

Refer to the main [Api Browse methods](https://ampache.org/api/api-browse) page for further information regarding the other Browse types method.

### Available browse filters

```PHP
    public const FILTERS = array(
        'alpha_match',
        'catalog',
        'catalog_enabled',
        'exact_match',
        'regex_match',
        'regex_not_match',
        'starts_with'
    );

### Available browse sorts

```PHP
    protected array $sorts = array(
        'title',
        'name',
        'catalog',
        'codec',
        'site_url',
        'url',
        'genre',
        'catalog',
    );
```
