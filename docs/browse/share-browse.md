---
title: "Share Browse"
metaTitle: "Share Browse"
description: "API documentation"
---

This page focuses on a single object type.

Refer to the main [Api Browse methods](https://ampache.org/api/api-browse) page for further information regarding the other Browse types method.

### Available browse filters

    public const FILTERS = array(
    );

### Available browse sorts

    protected array $sorts = array(
        'object',
        'object_type',
        'user',
        'creation_date',
        'lastvisit_date',
        'counter',
        'max_counter',
        'allow_stream',
        'allow_download',
        'expire'
    );
