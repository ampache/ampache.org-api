---
title: "Genre Browse"
metaTitle: "Genre Browse"
description: "API documentation"
---

This page focuses on a single object type.

Refer to the main [Api Browse methods](https://ampache.org/api/api-browse) page for further information regarding the other Browse types method.

### Available browse filters

```PHP
    public const FILTERS = array(
        'alpha_match',
        'exact_match',
        'hidden',
        'object_type',
        'regex_match',
        'regex_not_match',
        'genre'
    );
```

### Available browse sorts

```PHP
    protected array $sorts = array(
        'rand',
        'genre',
        'name'
    );
```
