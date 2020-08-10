---
title: "Errors"
metaTitle: "Errors"
metaDescription: "API documentation"
---

Ampache's API errors are loosely based around the HTTP status codes.
All errors are returned in the form of an XML/JSON Document however the string error message provided is translated into the language of the Ampache server in question. All services should only use the code value.

## Example Error messages

```xml
<root>
      <error code="501">Access Control Not Enabled</error>
</root>
```

```JSON
{
    "error": {
        "code": "404",
        "message": "share 107 was not found"
    }
}
```

## Current Error Codes

All error codes are accompanied by a string value for the error and derived from the [HTTP/1.1 Status Codes](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)

* **501**
  * This is a fatal error, the Ampache server you have requested does not currently have access control enabled. The API is disabled.
* **400**
  * Used when you have specified a valid method but something about the input is incorrect / invalid. See Error message for details, but do not re-attempt the exact same request.
* **401**
  * This is a temporary error, this means no valid session was passed or the handshake failed. This should be an indication for services to attempt another handshake
* **403**
  * This is a fatal error, the ACL on the Ampache server prevents access from the current source IP Address.
* **405**
  * This is a fatal error, the service requested a method that the API does not implement.