---
title: "User Browse"
metaTitle: "User Browse"
description: "API documentation"
---

This page focuses on a single object type.

Refer to the main [Api Browse methods](https://ampache.org/api/api-browse) page for further information regarding the other Browse types method.

### Available browse filters

    public const FILTERS = array(
        'access',
        'disabled',
        'starts_with',
    );

### Available browse sorts

    protected array $sorts = array(
        'rand',
        'id',
        'username',
        'fullname',
        'email',
        'website',
        'access',
        'disabled',
        'last_seen',
        'create_date',
        'state',
        'city',
        'fullname_public',
    );
