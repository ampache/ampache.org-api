---
title: "Playlist Browse"
metaTitle: "Playlist Browse"
description: "API documentation"
---

This page focuses on playlist browses.

Refer to the main [Api Browse methods](https://ampache.org/api/api-browse) page for further information regarding the other Browse types method.

In the Ampache API a playlist is actually a combined object of static playlists and dynamic searches.

Smartlists are prefixes with `smart_` to ensure ID values don't clash with playlists

This allows you to list these objects together in a single call.

There are options to ignore, hide or filter searches from your playlist calls but playlist calls will return both types of object.

## Available browse filters

You can filter responses by the object name using the following conditions.

e.g. `cond=like,unplayed+tracks`

* Name/Title string filters
  * like
  * not_like
  * equal
  * regex_match
  * regex_not_match
  * starts_with
  * not_starts_with

When returning combined playlists and smartlists in a single response you can use the following extra filters.

* hide_dupe_smartlist: Hide smartlists from the reesponse when there is already a playlist with the same name
* smartlist: return smartlists only

Finally these conditions are playlist specific and not commonly shared between browse types.

* playlist_open: filter by user accessible playlists (public playlists and owner = you)
* playlist_user: filter for playlists you own

## Available browse sorts

Sorts are applied with an optional order. (`asc` or `desc` depending on the method)

When you apply a sort you will overwrite the default sort order.

* rand: Random sort order
* date: Creation date
* last_count: Item count
* last_update: Modification date
* name: Object name
* rating: Object rating
* type: Public / private
* user: Owner id
* username: Owner username
* user_flag: Loved flag

* Additional sorts for smartlist browses
  * limit: Smartlist item limit
  * random: Smartlist has random sort enabled
