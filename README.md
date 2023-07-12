# Node.js-MongoDB

## 1. 서버란 SERVER?

#### WHAT IS SERVER

> SERVER : 요청을 처리 할 수 있는 기계 
>
> * 요청 => **HTTP 요청** 
>   * (1) GET 읽기 (어떠한 페이지를 읽고 싶다)
>   * (2) POST 쓰기 (새로운 댓글 생성, 블로그 포스트 작성 등)
>   * (3) PUT 수정
>   * (4) DELETE 삭제 

* SERVER : 요구하면 가져다 주는 것, 즉 요청을 받으면 요청한 내용 보내주는 프로그램 

> 🧑 서버 : 닭갈비집 알바생 
>
> 👩 서버 개발자 : 닭갈비집 알바생 메이커 
>
> > 어떤 사람이 `comic.naver.com` 으로 접속하변 네이버 웹툰 `html` 파일을 전송해줘! 
> >
> > ◼ 직접 서버를 만들고 싶다면? 
> >
> > - 어떤 사람이 `list` 라는 페이지를 GET 요청하면 
> > - 거기 해당하는 `list.html` 파일을 보내준다. 
> > - `Node.js` 를 이용하여 JS 문법으로 서버를 만든다. 




## 2. Node.js 란 

* `JavaScript` 

  : 웹 페이지를 동적으로 바꿔주는 기능 

  : HTML를 조작하기 위한 언어 (웹 페이지에 글쓰고 그림 넣는 언어)

* 그럼, `JavaScript` 는 누가 해석하나? : 바로 브라우저 

  > 브라우저 : 크롬 파이어 폭스 등을 가리킨다. 
  >
  > ◼ 브라우저 마다 JS 해석 엔진이 다르다. 
  >
  > * 크롬 : V8, 파이어폭스 : 스파이더 몽키 
  > * V8 해석 엔진의 등장 > V8을 똑 떼어내어 따로 만든 것을 `Node.js` 이다. 

* 브라우저 내에서 말고도 다른 환경에서도 JS실행할 수 있게 도와준다. 

* 쉽게 말하자면, 그냥 자바스크립트 실행창, 실행환경이다. (=런타임)

* 브라우저를 안켜도 JS문법 실행이 가능하다. 

* Node.js 덕분에 JS를 프로그래밍 언어처럼 사용하기 시작했다. 

  

##### ◼ 왜 Node.js로 서버를 만드는 것일까? 

> ##### `Non-blocking` 으로 인해 만들어 졌다. 



## 3. Node.js의 Non-blocking

##### ◼ Node.js 의 특징 

> * Event-driven
> * Non-blocking I/O



##### 🎫 CGV 예매 사이트 

| SERVER(Node.js)                                              | SERVER(일반)                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| 🧑(1장) 🧑(1장) 🧑(300장) 🧑(1장)<br />순서 상관 없이 빠르게 처리 할 수 있는 요청 부터 처리 후 ,<br />마지막으로 어려운 작업을 처리한다. <br />이렇게 처리하는 방식을 `Non-blocking` 이라고 한다. | 🧑(1장) 🧑(1장) 🧑(300장) 🧑(1장)<br />순서대로 진행한다. <br />오래걸리는 300장을 모두 처리할 동안 멈춰 있는다. 이런식으로 작업을 진행한다.<br />(중간에 버거운 요청을 받을 경우 멈춰야 하는 단점) |

##### ◼ SNS, 채팅서비스 

> SNS와 채팅 서비스 같은 경우에는 요청이 매우 많다. 
>
> 이럴 경우 다시 Node.js의 server 와 일반 server에 대한 차이점은 다음과 같다. 
>
> * Node.js server : 요청이 많거나 오래걸리는 요청이 있어도 멈추거나 요청 대기 시간이 없다. 
> * 일반 server : 요청이 많거나 오래 걸리는 요청이 있으면 멈추거나 대기시간이 발생한다. 



◼ 따라서 Non-blocking 덕분에 채팅서비스와 SNS 에 자주 사용된다. 

◼ 코드가 매우 짧고 쉽다. 따라서 빠른 개발이 가능하고 



## 4. Node.js 와 Express 라이브러리 

```bash
node -v
```

> Node.js 설치 후 노드 버전 확인 가능 

```bash
node ____
```

> node 실행 가능



##### ◼ Express 라는 라이브러리를 사용하여 서버 만들기 

* `라이브러리` : 코드를 쉽게 짜기 위해 빌려쓰는 코드 모음집 

```bash
npm init 
```

> npm은 라이브러리 설치를 도와주는 도구이다. 

* `package.json` : 어떤 라이브러리를 설치했는지 기록 하는 곳 

```bash
npm install express 
```

> express 설치 

* `node_modules` : 라이브러리에 필요한 자료를 담는 공간 



## 5. 서버에서 HTML 파일 전송

##### ◼ Nodemon으로 자동화 

* 고객 Client : 주소창에 URL을 입력해서 서버에 GET요청을 할 수 있다. 
* 서버 Server : 누군가가 `/pet` 으로 돌아오면 `______` 을 보내주세요 



```bash
npm install -g nodemon
```

> `-g` : 다른 작업 폴더에서도 이 작업을 실행할 것이라는 의미 (글로벌)

```bash
yarn add grobal nodemon
```

> `yarn`으로 설치 

```bash
nodemon node.js
```

> powershell 보안 오류 발생 시 해결방법은 다음과 같다. 
>
> (1) powershell 관리자 권환으로 실행
>
> (2) executionpolicy 입력 
>
> (3) set - executionpolicy unrestricted 입력 
>
> (4) y 선택 후 다시 `nodemon node.js` 로 실행 



## 6. Bootstrap을 이용한 빠른 UI 개발 

* Bootstrap : HTML, CSS 라이브러리 



## 7. 폼에 입력한 데이터를 서버에 전송하는 법 (POST)

```JS
app.get('경로', function(요청, 응답){
    응답.send('___________');
});
```

> `get()` 에 드러가는 파리미터 중 하나가 `function(){}`  이다. 

> * 함수 안에 함수가 있는 형태 = 콜백함수 
>
> ```js
> function(요청, 응답){
>     
> }
> ```
>
> `function(){}` 
>
> `function(요청, 응답)` 
>
> * 콜백함수는 언제 사용할까? : 콜백함수는 순차적으로 실행하고 싶을 때 사용한다. 
>
> * 요청 : 첫번째 파라미터, 요청 내용
> * 응답 : 두번째 파라미터, 응답할 방법 



##### ◼ 최신 자바스크립트 문법으로 코드 작성하기 (ES6)

```JS
app.get('경로', function(요청, 응답) => {
        응답.send('____________');
  });
```



* ##### submit 버튼을 누르면 폼에 입력한 제목과 날짜를 서버로 전달하기 

```html
<form action="add" method="POST">
```

> `/add` 경로로 POST 요청함 
>
> `action` 과 `method` 는 꼭 있어야 하는 2개 속성이다. 



* ##### POST를 어떻게 요청 처리기계를 만들 수 있을까?

> : 어떤 사람이 `add` POST를 요청을 하면 ???을 해주세요 
>
> ```JS
> app.POST('경로', 콜백함수)
> ```



* ##### 데이터는 어디에 저장이 될까? 

```JS
function(요청, 응답)
```

> `요청` 에 데이터가 저장이 된다. 
>
> 데이터를 쉽게 꺼내 사용하려면 라이브러리가 필요하다. 



```bash
npm install body-parser
```

```bash
yarn install body-parser
```

> `body-parser` 는 요청 데이터(body) 해석을 쉽게 할 수 있도록 도와준다. 
>
> POST요청으로 서버에 데이터를 전송하고 싶다면?
>
> (1) `body-parser` 필요 
>
> (2) form 데이터의 경우 input틀에 name 작성하기 
>
> > 서버에서 input을 구분하기 위해 `name="name"` 을 쓰는 것 
>
> * POST 요청으로 서버에 데이터 전송하고 싶으면 input에 name 작성하기 
>
> ```javascript
> console.log(요청.body, title)
> ```
>
> > `요청.body` 라고 하면 요청했던 form에 적힌 데이터가 수신이 가능하다. 



---

##### ✔ [Git 경고 메시지] LF will be replaced by CRLF in 해결 방안 

```bash
git config --global core.autocrlf true 
```

---



## 8. REST API

##### ◼ 서버를 만들때는 REST하게 API를 작성하는 것이 좋다. 

##### ◼ API (Application Programming Interface)

* API (웹 개발 시)

  > 웹 서버와 고객간의 소통 방법 (요청 방식)
  >
  > 어떻게 해야 서버랑 통신 할 수 있을까? 

```JS
app.get(_________)
```

> `get(_________)` 이 자체가 API이다. 
>
> 이런 API들을 어떤 식으로 만들어야 좋은 API인가? 



##### ◼ REST API 6가지 원칙 

(1) ⭐Uniform interface 

> * 하나의 자료는 하나의 URL로!
> * URL 하나를 알면 둘을 알 수 있어야 한다.
> * 요청과 응답은 정보가 충분히 들어있어야 한다. 

(2) Client-server 역할 구분 

> * 브라우저는 요청만 할 뿐 
> * 서버는 응답만 할 뿐 

(3)  Stateless

> 요청1과 요청2는 의존성이 없어야 함 

(4) Cacheable

> * 서버에서 보내주는 정보들은 채싱이 가능해야함 
>
> * 캐싱을 위한 버전 같은 것도 관리를 잘해야 한다 (실은 브라우저가 다 해준다.)

(5) Layered System

(6) Code on Demon


