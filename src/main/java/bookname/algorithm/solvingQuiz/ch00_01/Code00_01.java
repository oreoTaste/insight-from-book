package bookname.algorithm.solvingQuiz.ch00_01;

// ch0.1 최대와 최소
// code0-1 최대 값과 최소 값을 구하는 함수를 작성해보자
public class Code00_01 {
  public static void main(String[] args) {
    System.out.println("min(3,5) : " + min(3,5));
    System.out.println("min(-3,5) : " + min(-3,5));
    System.out.println("max(3,5) : " + max(3,5));
    System.out.println("max(3,-5) : " + max(3,-5));
  }

  static int min(int x, int y) {
    if(x > y) {
      return y;
    } return x;
  }

  static int max(int x, int y) {
    if(x > y) {
      return x;
    } return y;
  }

}
