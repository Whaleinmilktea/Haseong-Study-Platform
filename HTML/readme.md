> **웹 표준이란,** W3C(World Wide Web Consortium)에서 권고하는 **"웹에서 표준적으로 사용되는 기술이나 규칙"**이다.

이는 2000년대 초반, 웹이 급속도로 상용화되던 시기에 브라우저 간 상호호환이 되지 않아, 개발자들이 각 브라우저에 맞는 동일한 페이지를 구현했던 시기의 비생산적인 활동을 최소화하고 어느 브라우저에서나 동일한 상호작용을 제공하고자 웹 개발 형식을 통일한 데서 출발한다.

#### **1\. Semantic Tag**

모든 웹은 라이브러리에 따라 렌더링 하는 방식은 다르지만, 최종적으로 HTML로 화면의 구조와 컨텐츠를 출력한다.

이 때, 화면의 구조상 구현을 맡는 태그는 **<div>**태그와 **</span>**태그다.

기본적으로, 두 태그만 갖고 있어도 모든 웹 상의 구조를 구현할 수 있으나 어플리케이션이 커져감에 따라 아래와 같은 문제가 발생한다.

> 1. 어플리케이션이 커질수록 개발자 간의 협업 과정에서 코드를 통해 구조를 파악하기 어려워진다.
> 2. 검색 과정에서 더 중요한 정보를 명시하기 어렵다.
> 3. 나이/성별/장애여부/사용환경에 구애받지 않고 동일한 수준의 정보를 전달받기 위해선, 부가적인 정보가 필요한데 이를 브라우저가 파악하기 어렵다.

```
/* 코드에 관한 설명이 없다면 구조를 한번에 파악하기 어려움.. */

<!DOCTYPE html>
<html lang="ko-KR">
  <head>
    <!-- 생략 -->
  </head>

  <body>
    <div>
      header-contents
      <span>content1</span>
      <span>content2</span>
      <span>content3</span>
    </div>
    <div>
      nav-contents
      <span>content1</span>
      <span>content2</span>
      <span>content3</span>
    </div>
    <div>
      main-contents article-contents
      <div>
        section1
        <span>content1</span>
        <span>content2</span>
        <span>content3</span>
      </div>
      <div>
        section2
        <span>content1</span>
        <span>content2</span>
        <span>content3</span>
      </div>
      <div>
        article-contents2
        <div>
          section3
          <span>content1</span>
          <span>content2</span>
          <span>content3</span>
        </div>
        <div>
          section4
          <span>content1</span>
          <span>content2</span>
          <span>content3</span>
        </div>
      </div>
      <div>
        aside-contents
        <span>content1</span>
        <span>content2</span>
        <span>content3</span>
      </div>
    </div>
  </body>
</html>
```

#### **2\. Semantic한 태그/요소**

이를 극복하기 위해, 태그 자체에 의미를 담아내는 의미론적 태그, Semantic-Tag의 개념이 등장했다.

**대표적인 시맨틱 태그**는 다음과 같다.

| <header> | 페이지나 요소의 최상단에 위치하는 머릿말 |
| --- | --- |
| <nav> | 메뉴, 목차 등 |
| <aside> | 컨텐츠와 직접 연관은 없으나 페이지에 노출되어야 하는 내용 |
| <main> | 주요 콘텐츠 |
| <article> | 각 문서의 독립적인 구역을 나타냄 ( 콘텐츠가 특별한 의미로 구분되는 경우 )   \*보통 제목에 <hgroup> 을 포함하여 사용 |
| <section> | 각 문서의 독립적인 구역을 나타냄 ( 콘텐츠가 특별한 의미로 구분되기 어려운 경우 )   \*보통 제목에 <hgroup> 을 포함하여 사용 |
| <hgroup> | 제목을 표시할 때 사용하는 요소   \* <h1> ~ <h6> 요소 |
| <footer> | 페이지나 요소의 최하단에 위치하는 꼬릿말 |

이와 동시에 div/span을 대체하기 위한 semantic한 요소가 등장했듯, 여러 마크업 언어를 사용하는 과정에서도 semantic한 코드를 작성했을 때 이점이 되는 내용들이 많다. **대표적인 내용**들은 다음과 같다.

|   **<strong>, <em>**   | 굵은 글씨체를 만들기 위한 요소인 <b>, 이탤릭체를 만들기 위한 요소인 <i>를 semantic하게 사용한 요소 |
| --- | --- |
| **<hgroup>**을 적절히 사용하기 | <h1> ~ <h6> 요소는 시멘틱한 요소이기 때문에 각각 일정한 범주의 의미를 지닌다. 그렇기에 단순히 원하는 폰트를 적용하는 방식으로 남발하여 사용한다면, 사용자에게 적절치 못한 구조를 전달케할 수 있다. |
| **<br/>**을 적절히 사용하기 | <br/> 또한 하나의 유의미한 단락을 페이지 내에 구현하기 위한 줄바꿈 요소인데, 단순히 여러 의미가 분리된 인라인 요소들을 구분하는 용도로 남발하게 되면, 사용자에게 적절치 못한 구조를 전달케할 수 있다. |
| **인라인 스타일링** 피하기 | HTML, CSS, JS를 애써 구분하여 사용하는 이점을 포기하고 분리한 내용을 합치는 것과 같기에 가능한 한 지양해야 한다. |

```
/* 코드에 관한 설명이 없어도 구조를 한번에 파악하기 용이! */

<!DOCTYPE html>
<html lang="ko-KR">
  <head>
    <!-- 생략 -->
  </head>

<body>
  <header>
    <span></span>
    <span></span>
    <span></span>
  </header>
  <nav>
    <span></span>
    <span></span>
    <span></span>
  </nav>
  <main>
    <article>
      <section></section>
      <section></section>
      <section></section>
    </article>
    <article>
      <section></section>
      <section></section>
      <section></section>
    </article>
    <article>
      <section></section>
      <section></section>
      <section></section>
    </article>
    <aside>
      <span></span>
      <span></span>
      <span></span>
    </aside>
  </main>
</body>
</html>
```

Github :
