# Search

## Leer de URL lezen

[https/https:] **//** [www] **.** domein **.** toplevelDomain [ /directories/ ] **?** par1=value1 **&** par2=value2 [#localname]

````
    https://www.wincacademy.com/
    https://developer.mozilla.org/en-US/search?q=array+map
    
````

## SearchProviders

### Instellingen

Tip: Gebruik een _ aan begin van de titel, zodat al jouw instellingen bovenaan de lijst staan.


* SearchEngine: _MDN Search:
* Keyword: md
* uri: ``https://developer.mozilla.org/en-US/search?q=%s``

<hr>

* SearchEngine: _JavaScript Search all time:
* Keyword: js
* uri: ``http://www.google.com/search?tbs=qdr:y&tbo=1&as_oq=javascript&q=%s``

**https://www.google.com/search?q=addeventlistener&tbs=qdr:y&tbo=1&as_oq=javascript**

* documentatie Google URL parameters: https://stenevang.wordpress.com/2013/02/22/google-advanced-power-search-url-request-parameters/
<hr>

* SearchEngine: _JavaScript Search last year:
* Keyword: js1
* uri: ``http://www.google.com/search?q=%s&tbs=qdr:y&tbo=1&as_oq=javascript``

<hr>

* SearchEngine: __StackOverflow vanaf 2016:
* keyword: so
* uriL https://stackoverflow.com/search?q=%5Bjavascript%5D+answers%3A1+score%3A10+%s+created%3A2016...