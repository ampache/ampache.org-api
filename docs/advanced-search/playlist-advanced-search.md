---
title: "Playlist Search"
metaTitle: "Playlist Search"
description: "API documentation"
---

This page focuses on a single object type.

Refer to the main [Advanced Search](https://ampache.org/api/api-advanced-search) page for further information regarding the advanced_search method.

### Available search rules

Select the type of search based on the type of data you are searching for. (songs, playlists, etc)

| rule_1 | Title                           | Operator Type |
|--------|---------------------------------|---------------|
| title  | Title / Name                    | text          |
| name   | (*Alias of title)               |               |
| type   | Playlist Type (private, public) | text          |

### Available operator values

Select your operator (integer only!) based on the type or your selected search

| rule_1_operator | Text                              |
|:---------------:|-----------------------------------|
|        0        | contains                          |
|        1        | does not contain                  |
|        2        | starts with                       |
|        3        | ends with                         |
|        4        | is                                |
|        5        | is not                            |
|        6        | sounds like                       |
|        7        | does not sound like               |
|        8        | matches regular expression        |
|        9        | does not match regular expression |

