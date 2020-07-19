package bookname.algorithm.solvingQuiz.ch01_01;

// 팩토리얼 (n!) 계산하고, n값이 커질때 발생하는 문제에 대해 살펴보기
// 문제점 : Integer(혹은 Long)의 max값을 넘어가는 13!(혹은 21!) 이상의 팩토리얼은 계산할 수 없다.
public class Code01_0102 {
  public static void main(String[] args) {

    // 반복문을 통한 팩토리얼 계산하기
    int num1 = 12;
    int num2 = 13;
    long num3 = 20;
    long num4 = 21;

    System.out.println("<[반복문을 통한 팩토리얼 계산하기]>\n--int인 경우--");
    getFactorialValue1(num1); // 12! : 479,001,600
    System.out.println("max : " + Integer.MAX_VALUE);
    getFactorialValue1(num2); // 6,227,020,800

    System.out.println("\n--long인 경우--");
    getFactorialValue1(num3); // 20! : 2,432,902,008,176,640,000
    System.out.println("max : " + Long.MAX_VALUE);
    getFactorialValue1(num4); // 21! : 51,090,942,171,709,440,000
    System.out.println();


    // 재귀함수를 통한 팩토리얼 계산하기
    int num5 = 12;
    int num6 = 13;
    long num7 = 20;
    long num8 = 21;

    System.out.println("<[재귀함수를 통한 팩토리얼 계산하기]>\n--int인 경우--");
    System.out.println(num5 + "! : " + getFactorialValue2(num5)); // 12! : 479,001,600
    System.out.println("max : " + Integer.MAX_VALUE);
    System.out.println(num6 + "! : " + getFactorialValue2(num6)); // 6,227,020,800

    System.out.println("\n--long인 경우--");
    System.out.println(num7 + "! : " + getFactorialValue2(num7)); // 20! : 2,432,902,008,176,640,000
    System.out.println("max : " + Long.MAX_VALUE);
    System.out.println(num8 + "! : " + getFactorialValue2(num8)); // 21! : 51,090,942,171,709,440,000

  }

  // int : 반복문으로 n! 계산하기
  private static int getFactorialValue1(int num) {
    if(num <= 0) {
      return 0;
    }
    int result = 1;
    for(int i = 1; i <= num; i++) {
      result *= i;
    }
    System.out.println(num + "!" + " : " + result);
    return result;
  }

  // long : 반복문으로 n! 계산하기
  private static long getFactorialValue1(long num) {
    if(num <= 0) {
      return 0;
    }
    long result = 1;
    for(int i = 1; i <= num; i++) {
      result *= i;
    }
    System.out.println(num + "!" + " : " + result);
    return result;
  }

  // int : 재귀함수로 n! 계산하기
  private static int getFactorialValue2(int num) {
    if(num <= 0) {
      return 0;
    }
    if(num == 1) {
      return 1;
    }
    return num * getFactorialValue2(num-1);
  }

  // long : 재귀함수로 n! 계산하기
  private static long getFactorialValue2(long num) {
    if(num <= 0) {
      return 0;
    }
    if(num == 1) {
      return 1;
    }
    return num * getFactorialValue2(num-1);
  }

}
