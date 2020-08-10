---
title: "Standards"
metaTitle: "Standards"
metaDescription: "API documentation"
---

Here I will be documenting standards that all Ampache API's should follow.

There will be inconsistencies between the current API's and we will be working on merging to a clear set of standards.

## Rules regarding objects and data

For now I've just written down a few rules that i will be following:

* ID is a string for all objects.
* Everything that has an ID should include this in the response.
* All other integers are cast to int
* Same thing for doubles
* null and empty values may be returned. (for example XML will always return an object but it may not have any value)
* total_count in the XML API is depreciated but not to be removed until API 5.
```XML
<total_count>5</total_count>
```
  * XML can count objects the same was as a JSON array [<https://www.php.net/manual/en/simplexmlelement.count.php>]

### Genre in songs is depreciated and will be removed in API 5.

```XML
<genre><![CDATA[Metal]]></genre>
<genre><![CDATA[Hard Rock]]></genre>
```
        "genre": [
            "Metal",
            "Hard Rock"
        ]

### Use tag instead of genre, tag provides a genre ID as well as the name. 

```xml
<tag id="20" count="1" ><![CDATA[Metal]]></tag>
<tag id="37" count="1" ><![CDATA[Hard Rock]]></tag>
```
```json
        "tag": [
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
* Python3-ampache will produce example files for all methods exactly as received to help identify methods that don't enforce these rules.
  * update the wiki with links to the examples instead of a massive wall of text [<https://github.com/ampache/python3-ampache/tree/master/docs>]