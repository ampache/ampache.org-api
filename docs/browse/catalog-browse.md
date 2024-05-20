---
title: "Catalog Browse"
metaTitle: "Catalog Browse"
description: "API documentation"
---

This page focuses on a single object type.

Refer to the main [Api Browse methods](https://ampache.org/api/api-browse) page for further information regarding the other Browse types method.

### Available browse filters

    public const FILTERS = array(
        'enabled',
        'gather_type',
        'gather_types',
        'user'
    );

### Available browse sorts

    protected array $sorts = array(
        'title',
        'name',
        'catalog_type',
        'last_update',
        'last_clean',
        'last_add',
        'enabled',
        'rename_pattern',
        'sort_pattern',
        'gather_types',
    );
