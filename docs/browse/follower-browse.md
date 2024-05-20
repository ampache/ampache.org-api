---
title: "Follower Browse"
metaTitle: "Follower Browse"
description: "API documentation"
---

This page focuses on a single object type.

Refer to the main [Api Browse methods](https://ampache.org/api/api-browse) page for further information regarding the other Browse types method.

### Available browse filters

    public const FILTERS = array(
        'to_user',
        'user'
    );

### Available browse sorts

    protected array $sorts = array(
        'user',
        'follow_user',
        'follow_date'
    );