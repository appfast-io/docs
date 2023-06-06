---
layout: subpage
pageid: getting-started
---

# Getting Started

## User-Defined Templates Warning

nunjucks does not sandbox execution so **it is not safe to run
user-defined templates or inject user-defined content into template
definitions**. On the server, you can expose attack vectors for
accessing sensitive data and remote code execution. On the client,
you can expose cross-site scripting vulnerabilities even for
precompiled templates (which can be mitigated with a strong
[CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)). See
[this issue](https://github.com/mozilla/nunjucks-docs/issues/17) for
more information.
