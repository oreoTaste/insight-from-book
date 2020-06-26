# insight-from-book
* 개요 : 책 요약하고 코드정리하기

# 1. 문제로 풀어보는 알고리즘

## Chapter 0.1 최대와 최소
 - code 0-1)) 최대 / 최소값을 구하는 함수 작성하기
 - code 0-2)) 배열의 최대 값 구하는 함수 작성하기
 - code 0-3)) 조건연산자(삼항연산자 : c)에서 유의할 사항 : 실행 순서
 - code 0-4)) 재귀함수에서 유의할 사항 : 속도

## Chapter 0.2 두 변수의 값 바꾸기 (swap)
 - code 0-5 ~ 0-6)) 포인터를 이용하여 값 바꾸기
 - code 0-7)) 배열에서 두 값 바꾸기

## Chapter 0.3 배열 회전
 - code 0-8)) right_rotate 함수 : 오른쪽으로 이동
 - code 0-8확장)) left_rotate 함수 : 왼쪽으로 이동
 - code 0-8확장)) right_rotate 함수 : k만큼 오른쪽으로 이동하는 함수와 빠르게 개량버전

## Chapter 0.4 은행 대기번호 관리 (Queue)
 - code 0-9)) 배열로 큐 작성하기
 - code 0-9확장)) 배열 늘려서 무한정 큐 사용하기
 - code 0-10)) 원형 큐 작성하기 (Circle Queue) : 0-9의 단점(빈배열) 개선

## Chapter 0.5 연결리스트 (LinkedList)
 - code 0-11)) 연결리스트로 큐 작성하기



# 2. CodePip

## 1. flexbox
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
 
## 2. grid
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
 
## 3. transform
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

## 4. others
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





