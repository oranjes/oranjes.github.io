# Search

## Leer de URL lezen

[https/https:] **//** [www] **.** domein **.** toplevelDomain [ /directories/ ] **?** par1=value1 **&** par2=value2 [#localname]

````
    https://www.wincacademy.com/
    https://developer.mozilla.org/en-US/search?q=array+map
    
````

## SearchProviders

### Instellingen

* SearchEngine: _MDN Search:
* Keyword: md
* uri: ``https://developer.mozilla.org/en-US/search?q=%s``

<hr>

* SearchEngine: _JavaScript Search:
* Keyword: js
* uri: ``http://www.google.com/search?q=%s&tbs=qdr:y&tbo=1&as_oq=javascript``

**https://www.google.com/search?q=addeventlistener&tbs=qdr:y&tbo=1&as_oq=javascript**

* documentatie: https://stenevang.wordpress.com/2013/02/22/google-advanced-power-search-url-request-parameters/

<hr>

* SearchEngine: __StackOverflow
* keyword: so
* uriL https://stackoverflow.com/search?q=%5Bjavascript%5D+answers%3A1+score%3A10+created%3A2016...%s