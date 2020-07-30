package bookname.algorithm.solvingQuiz.ch01_04;

public class Code01_08 {
  static long[] memory;
  static long startDate;

  public static void main(String[] args) {
    final long numOfStairs = 40;
    memory = new long[(int) numOfStairs + 1];

    System.out.println("<재귀함수를 사용하는 경우>");
    startDate = System.currentTimeMillis();
    System.out.println(countBinaryNum1(numOfStairs) + "가지입니다."
        + "\n-> 소요시간은 " + (System.currentTimeMillis() - startDate) + "밀리초 입니다.");

    System.out.println("\n<재귀함수를 사용하는 경우 (중복계산 없애기)>");
    startDate = System.currentTimeMillis();
    System.out.println(countBinaryNum2(numOfStairs) + "가지입니다."
        + "\n-> 소요시간은 " + (System.currentTimeMillis() - startDate) + "밀리초 입니다.");

    System.out.println("\n<for반복문을 사용하는 경우>");
    startDate = System.currentTimeMillis();
    System.out.println(countBinaryNum3(numOfStairs) + "가지입니다."
        + "\n-> 소요시간은 " + (System.currentTimeMillis() - startDate) + "밀리초 입니다.");
  }

  // using recursive function
  private static long countBinaryNum1(long param) {
    if(param == 1)
      return 1;
    if(param == 2)
      return 2;
    return countBinaryNum1(param-1) + countBinaryNum1(param-2);
  }

  // using recursive function
  private static long countBinaryNum2(long param) {
    if(param == 1)
      return memory[1] = 1;
    if(param == 2)
      return memory[2] = 2;
    if(memory[(int) param] != 0)
      return memory[(int) param];

    return memory[(int) param] = countBinaryNum1(param-1) + countBinaryNum1(param-2);
  }

  // using for loop
  private static long countBinaryNum3(long param) {
    if(param == 1)
      return 1;
    if(param == 2)
      return 2;

    long preprev = 1;
    long prev = 2;
    long result = 0;
    for(int i = 3; i <= param; i++) {
      result = prev + preprev;
      preprev = prev;
      prev = result;
    }
    return result;
  }


}

