package bookname.algorithm.solvingQuiz.ch01_04;

public class Code01_08_pre01 {
  static long startDate;

  public static void main(String[] args) {
    final long lengthOfString = 40;

    System.out.println("<재귀함수를 사용하는 경우>");
    startDate = System.currentTimeMillis();
    System.out.println(countBinaryNum1(lengthOfString) + "가지입니다."
        + "\n-> 소요시간은 " + (System.currentTimeMillis() - startDate) + "밀리초 입니다.");

    System.out.println("\n<for반복문을 사용하는 경우>");
    startDate = System.currentTimeMillis();
    System.out.println(countBinaryNum2(lengthOfString) + "가지입니다."
        + "\n-> 소요시간은 " + (System.currentTimeMillis() - startDate) + "밀리초 입니다.");
  }

  // using recursive function
  private static long countBinaryNum1(long param) {
    if(param == 1)
      return 2;
    if(param == 2)
      return 3;
    return countBinaryNum1(param-1) + countBinaryNum1(param-2);
  }

  // using for loop
  private static long countBinaryNum2(long param) {
    if(param == 1)
      return 2;
    if(param == 2)
      return 3;

    long preprev = 2;
    long prev = 3;
    long result = 0;
    for(int i = 3; i <= param; i++) {
      result = prev + preprev;
      preprev = prev;
      prev = result;
    }
    return result;
  }


}

