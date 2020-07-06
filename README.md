# insight-from-book
### Purpose : to get insight from book/website and improve <br>
### Summary :
- [book] [1. 문제로 풀어보는 알고리즘](#-1-문제로-풀어보는-알고리즘-)<br>
	- learning algorithm
- [website] [2. CodePip](#-2-codepip-)<br>
	- learning HTML/CSS/JS
- [website] [3. FlexBoxDefense](#-3-flexbox-defense-)<br>
  - learning CSS : flexbox
- [website] [4. CssDiner](#-4-css-diner-)<br>
  - learning CSS : selector
<br>

### Details :
<details>
	<summary><strong>1. 문제로 풀어보는 알고리즘</strong></summary>
	<div markdown="1">
		<h2> 1. 문제로 풀어보는 알고리즘 </h2>
    <h5>source : https://blog.insightbook.co.kr/tag/%EB%AC%B8%EC%A0%9C%EB%A1%9C-%ED%92%80%EC%96%B4%EB%B3%B4%EB%8A%94-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98/</h5>

### Chapter 0.1 최대와 최소
 - code 0-1)) 최대 / 최소값을 구하는 함수 작성하기
 - code 0-2)) 배열의 최대 값 구하는 함수 작성하기
 - code 0-3)) 조건연산자(삼항연산자 : c)에서 유의할 사항 : 실행 순서
 - code 0-4)) 재귀함수에서 유의할 사항 : 속도

### Chapter 0.2 두 변수의 값 바꾸기 (swap)
 - code 0-5 ~ 0-6)) 포인터를 이용하여 값 바꾸기
 - code 0-7)) 배열에서 두 값 바꾸기

### Chapter 0.3 배열 회전
 - code 0-8)) right_rotate 함수 : 오른쪽으로 이동
 - code 0-8확장)) left_rotate 함수 : 왼쪽으로 이동
 - code 0-8확장)) right_rotate 함수 : k만큼 오른쪽으로 이동하는 함수와 빠르게 개량버전
 - extra)) SimpleRight : 오른쪽으로 n만큼 이동 연습
 - extra)) SimpleLeft : 왼쪽으로 n만큼 이동 연습

### Chapter 0.4 은행 대기번호 관리 (Queue)
 - code 0-9)) 배열로 큐 작성하기
 - code 0-9확장)) 배열 늘려서 무한정 큐 사용하기
 - code 0-10)) 원형 큐 작성하기 (Circle Queue) : 0-9의 단점(빈배열) 개선
 - extra)) QueueFromArray : 배열을 통해 Queue 구현하기 연습
 - extra)) StackFromArray : 배열을 통해 Stack 구현하기 연습

### Chapter 0.5 연결리스트 (LinkedList)
 - code 0-11 ~ 0-12)) 연결리스트로 큐 작성하기
 - code0-11 ~ 12확장1)) 최대 수용할 수 있는 대기번호는?
 - code0-11 ~ 12확장2)) 최대 수용할 수 있는 대기번호는?
 - extra)) MyLinkedListTest : 사용자 클래스를 통해 LinkedList 구현하기 연습(add, get, set, remove, indexOf)
 - extra)) QueueFromList : 연결리스트를 통해 Queue 구현하기 연습
 - extra)) StackFromList : 연결리스트를 통해 Stack 구현하기 연습
 	<hr>
	</div>
</details>
	

<details>
	<summary><strong>2. CodePip</strong></summary>
	<div markdown="1">
		<h2> 2. CodePip </h2>
    <h5>source : https://codepip.com/games/</h5>

### 1. flexbox
 - container
	* display : flex;
	* flex-direction : row | row-reverse | column | column-reverse
	* flex-wrap : wrap | nowrap | ..
	* flex-flow = flex-direction + flex-wrap
	* justify-content : flex-start | flex-end | space-around | space-between | center ..
	* align-items : flex-start | flex-end | center;
	* align-content : flex-start | flex-end | center;
 - item
 	* order : 0 (default: 0)
 	* align-self : flex-start | flex-end | center;
 	* flex-shrink : 1 | 2 ..
 	* flex-grow : 1 | 2 ..
 
### 2. grid
 - container
	* grid-template-columns : 1fr 1fr 1fr 1fr;
	* grid-template-rows : 1fr 1fr;
	* grid-template : grid-template-columns + grid-template-rows
	* order : 0 (default: 0)
 - item
 	* grid-column-start : 2;
 	* grid-column-end : span 3;
 	* grid-column : grid-column-start + grid-column-end
 	* grid-row-start : 3;
 	* grid-row-end : 2;
 	* grid-row : grid-row-start + grid-row-end
 	* grid-area : grid-column + grid-row
 	* order : 0 (defulat: 0);
 
### 3. transform
 - Rotate
 	* rotate(10deg), rotateZ(10deg) / rotate(-10deg), rotateZ(-10deg)
 	* rotateX(20deg) / rotateX(-20deg)
 	* rotateY(30deg) / rotateY(-30deg)
 	* rotate3d(0.1, 0.2, 0.3, angle) =
 	  rotateX(angle * 0.1) rotateY(angle * 0.2) rotateZ(angle * 0.3)
  - Scale
	* scaleX(1.2)
	* scaleY(1.5
	* scale(1.2, 1.5)
	* scale3d(1.2, 1.5, 1)
 - Skew
 	* skewX(20deg)
 	* skewY(30deg)
 	* skew(20deg, 30deg)
 - Translate
	* translateX(100px);
	* translateY(50px);
	* translate(100px, 50px);
	* translateZ(200px);
	* translate3d(100px, 50px, 200px);

### 4. others
 - Animation
 	* @keyframes myanimation {
 		from {	// initial condition	}
 		50% {	// conditions after 50% of running time	}
 		to {	// terminal condition	}
 	  }
	* animation-direction : normal  | reverse | alternate | alternate-reverse;
	* animation-name : myanimation (normally slidein or etc);
	* animation-delay : 1s;
	* animation-duration : 3s;
	* animation-iteration-count : 0 | 1 | 2 | ... | infinite;
	* animation-fill-mode : none | forwards | backwards | both .. 
	* animation-play-stateReset : paused | running;
	* animation-timing-function : linear | ease-in-out | steps(5, end) | cubic-bezier(0.1, -0.5, 0.2, 0);
	* animation : abbr. for all above
 - Others
	* calc(1em + 10% + 50px);
	* direction : rtl;
	* unicode-bidi : bidi-override;
	* border-color : red yellow blue purple;
	* opacity : 0.5;
	* filter: grayscale(100%);
	* selector: hover | focus | visited | active | nth-child | checked ...
	* selector:: before | after | selection ...
	* counter-increment : mycount;
	* content : counter(mycount);
	<hr/>
	</div>
</details>

<details>
  <summary><strong>3. FlexboxDefense</strong></summary>
  <div markdown="1">
    <h2> 3. Flexbox Defense </h2>
    <h5>source : http://www.flexboxdefense.com/</h5>

### Answer
    1.
    .tower-group-1 {display: flex; justify-content: center;}
    
    2. 
    .tower-group-1 {display: flex; justify-content: flex-end;}
    .tower-group-2 {display: flex; justify-content: center;}
    .tower-group-3 {display: flex; justify-content: flex-end;}
    
    3.
    .tower-group-1 {display: flex; justify-content: center;}
    .tower-group-2 {display: flex; justify-content: space-between;}
    
    4.
    .tower-group-1 {display: flex; align-items: flex-end;}
    .tower-group-2 {display: flex; align-items: flex-end;}
    
    5.
    .tower-group-1 {display: flex; align-items: flex-end; justify-content: space-around;}
    .tower-group-2 {display: flex; justify-content: center;}
    .tower-group-3 {display: flex; align-items: center; justify-content: center;}
    
    6.
    .tower-group-1 {display: flex; align-items: center; justify-content: space-between;}
    
    7.
    .tower-group-1 {display: flex; flex-direction: column; justify-content: space-between;}
    .tower-group-2 {display: flex; flex-direction: column; justify-content: space-between;}
    
    8. 
    .tower-group-1 {display: flex; flex-direction: column; justify-content: space-between;}
    .tower-group-2 {display: flex; justify-content: space-between; flex-direction: column; align-items: center;}
    
    9.
    .tower-group-1 {display: flex; justify-content: space-around; flex-direction: row-reverse;}
    .tower-group-2 {display: flex; justify-content: space-around; flex-direction: row-reverse; align-items: center;}
    
    10. 
    .tower-group-1 {display: flex; justify-content: space-around;}
    .tower-1-1 {}
    .tower-1-2 {order: 1;}
    .tower-1-3 {}
    .tower-group-2 {display: flex; justify-content: space-around;}
    .tower-2-1 {}
    .tower-2-2 {order: -1;}
    .tower-2-3 {}
    
    11.
    .tower-group-1 {display: flex; justify-content: space-between;}
    .tower-1-1 {align-self: flex-end;}
    .tower-1-2 {}
    .tower-1-3 {align-self: flex-end;}
    .tower-1-4 {}
    
    12. 
    .tower-group-1 {display: flex; justify-content: space-between;}
    .tower-1-1 {}
    .tower-1-2 {align-self: center;}
    .tower-1-3 {order: 1;align-self: center;}
    .tower-1-4 {align-self: center;}
    .tower-1-5 {order: 1;align-self: flex-end;}
  <hr/>
  </div>
</details>

<details>
  <summary><strong>4. Css Diner</strong></summary>
  <div markdown="1">
    <h2> 4. Css Diner </h2>
    <h5>source : https://flukeout.github.io/</h5>

### Answer
    1. plate
    2. bento
    3. #fancy
    4. plate apple
    5. plate#fancy *
    6. apple.small
    7. orange.small
    8. bento orange.small
    9. plate, bento
    10. *
    11. plate *
    12. plate + apple
    13. bento ~ pickle
    14. plate > apple
    15. plate orange:first-child or plate orange:first-of-type
    16. plate *:only-child
    17. *.small:last-child
    18. plate:nth-child(3) or plate:nth-of-type(3)
    19. bento:nth-last-child(3)
    20. apple:nth-of-type(1)
    21. plate:nth-of-type(2n)
    22. plate:nth-of-type(2n+3)
    23. plate apple:only-child
    24. orange:last-of-type, apple:last-of-type
    25. bento:empty
    26. apple:not(.small)
    27. *[for]
    28. plate[for]
    29. bento[for="Vitaly"]
    30. *[for^="Sa"]
    31. *[for$="ato"]
    32. bento[for*="obb"]
  <hr/>
  </div>
</details>


[top](#insight-from-book)
