---
title: "Standards"
metaTitle: "Standards"
metaDescription: "API documentation"
---

Here are some basic standards that all Ampache API's should follow.

There will be inconsistencies between the current API's and we will be working on merging to a clear set of standards.

## Rules regarding objects and data

For now, here are a few basic rules that the API should follow:

* ID is a string for all objects.
* Everything that has an ID should include this in the response.
* All other integers are cast to int
* Same thing for doubles
* null and empty values may be returned. (for example XML will always return an object but it may not have any value)

### total_count in the XML API is depreciated but not to be removed until API 5.0.0

XML can count objects the same was as a JSON array [<https://www.php.net/manual/en/simplexmlelement.count.php>]

```XML
<total_count>5</total_count>
```

### Tag is being renamed into Genre

Debate resolved. Ampache 5.0.0 will rename Tag and remove the old genre variable.

### Genre will provide a genre ID as well as the name

```XML
<genre id="20" count="1" ><![CDATA[Metal]]></tag>
<genre id="37" count="1" ><![CDATA[Hard Rock]]></tag>
```

```JSON
        "genre": [
            {
                "id": "4",
                "name": "Electronic"
            },
            {
                "id": "77",
                "name": "Experimental"
            }
        ],
```

### Remove spaces from advanced_search rule names. (Backwards compatible with old names)

These rules have been changed to make sure everything has no spaces.
The backward compatible names will be removed in Ampache 5.0.0

* 'has image' => 'has_image'
* 'image height' => 'image_height'
* 'image width' => 'image_width'
* 'filename' => 'file' (Video search)

### TODO

* Python3-ampache will produce example files for all methods exactly as received to help identify methods that don't enforce these rules.
  * update the wiki with links to the examples instead of a massive wall of text [<https://github.com/ampache/python3-ampache/tree/master/docs>]
