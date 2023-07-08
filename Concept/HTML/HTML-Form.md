[MDN Form 요소](https://developer.mozilla.org/ko/docs/Web/HTML/Element/form)

<h4 align = "left">Form 요소에 적용되는 속성</h4>

```accept-charset```	기본값 : ```UNKNOWN```
- 서버가 받아들일 문자 인코딩의 형식을 지정

```action```
- 폼을 통해서 전송한 정보를 처리하는 웹페이지의 URL

```autocomplete```	기본값 : ```on```
- 이 속성은 이 폼안에 있는 위젯들의 기본값이 브라우저에 의해 자동 완성 하게 하는지 여부를 지정한다.

```enctype``` 기본값 : ```application/x-www-form-urlencoded	\method```
- 속성이 post 값으로 지정되면, 서버로 폼을 전송하는 콘텐츠 MIME(미디어 타입)의 타입을 지정한다.
- ```application/x-www-form-urlencoded```
- ```multipart/form-data```: ```input```요소의 type 속성을 file로 지정한 경우 이 속성의 값을 사용한다.
- ```text/plain```

```method```	기본값 : get
- 브라우저가 폼을 전송하기위해 사용하는 HTTP의 방식을 지정한다. 이 속성은 두 개의 값중 한 개를 가진다. get 또는 post.

```name```		폼의 이름이다. 이 속성값은 반드시 문서의 폼 사이에서 고유해야하며 빈 문자열을 지정할 수 없다.

```novalidate```	기본값(false)
- 이 불리언 속성은 폼이 전송 할떄 유효성 검사를 할수 없음을 나타낸다.

```target```
- ```_self```	폼 요청을 전송한후 응답을 어떻게 받을것인지 지정한다.
- ```_self```: 응답을 현재 브라우징 컨텍스트에서 불러온다.
- ```_blank```: 응답을 새로운 브라우징 컨텍스트로 불러온다.
- ```_parent```: 응답을 현재의 브라우징 컨텍스트의 부모 브라우징 컨텍스트에서 불러온다. 만약 부모가 없다면 _self 키워드와 똑같이 작동한다.
- ```_top```: 응답을 최상휘 레벨 브라우징 컨텍스트에서 불러온다. 만약 최상위 컨텍스트가 없다면 _self 키워드와 똑같이 작동한다.

<h4 align = "left">Form 요소의 동작</h4>

```html
<form action="/submit" method="post">
  <input type="checkbox" name="newsletter" value="1"> Newsletter 구독<br>
  <input type="text" name="name" placeholder="이름"><br>
  <input type="submit" value="제출">
</form>
```
```plaintext
newsletter: 1
name: John
```
html에서는 plaintext(utf-8) 형식으로 form 양식을 반환하지만, 실제 프로젝트에서는 javascript의 ```json``` 등의 형식으로 데이터를 받아 사용한다. 이 외에도 영상 데이터 / 이미지 데이터 등은 ```form-data``` 등의 형식으로 받아 조작한다.