> <https://github.com/florian/cookie.js>

Cookie和localStorage是在Web开发中常用的两种浏览器存储技术，它们之间有以下几个主要区别：

1. Cookie的大小通常受到浏览器和服务器的限制，不能超过4KB。而localStorage则可以存储更大量级的数据，通常最大可存储5MB的数据。

2. Cookie会随着每个HTTP请求自动发送到服务器，包括图片、样式表等，这可能会影响性能。而localStorage只存储在客户端，不会随着每个请求发送到服务器，因此对于本地数据存储来说更适合。

3. Cookie可以设置过期时间，可以是一个确定的日期或者是一个持续时间。当到达过期时间后，浏览器会自动删除该Cookie。而localStorage没有过期时间，除非手动删除，否则数据将一直存在。

4. 因为Cookie存储在客户端，所以存在一些安全风险，如CSRF（跨站请求伪造）攻击和XSS（跨站脚本）攻击等问题。而localStorage只能通过JavaScript访问，其安全性相对较高。

根据应用场景和需求的不同，选择使用Cookie还是localStorage也不同。如果需要与服务器交互并且存储小型数据，则使用Cookie可能更合适；而如果要在客户端存储大型数据或敏感数据，则使用localStorage可能更为安全。jkgg