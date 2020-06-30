/*
source : http://www.flexboxdefense.com/

regarding 'flex'
- justify-content
- flex-direction
- align-items
- align-self
- order
*/

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




