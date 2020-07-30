package bookname.algorithm.solvingQuiz.ch01_04;

public class Code01_09_02 {
  static long[] memory;
  static long startDate;
  static final long days = 20;

  public static void main(String[] args) {
    memory = new long[(int) days + 1];

    System.out.println("<재귀함수를 사용하는 경우>");
    startDate = System.currentTimeMillis();
    System.out.println(getPercent(countBinaryNum1(days)) + "%의 확률입니다."
        + "\n-> 소요시간은 " + (System.currentTimeMillis() - startDate) + "밀리초 입니다.");

    System.out.println("\n<재귀함수를 사용하는 경우 (중복계산 없애기)>");
    startDate = System.currentTimeMillis();
    System.out.println(getPercent(countBinaryNum2(days)) + "%의 확률입니다."
        + "\n-> 소요시간은 " + (System.currentTimeMillis() - startDate) + "밀리초 입니다.");

    System.out.println("\n<for반복문을 사용하는 경우>");
    startDate = System.currentTimeMillis();
    System.out.println(getPercent(countBinaryNum3(days)) + "%의 확률입니다."
        + "\n-> 소요시간은 " + (System.currentTimeMillis() - startDate) + "밀리초 입니다.");
  }

  private static double getPercent(long cases) {
    return Math.round(cases / Math.pow(3, days) * 100);
  }

  // using recursive function
  private static long countBinaryNum1(long param) {
    if(param == 1)
      return 3;
    if(param == 2)
      return 9;
    if(param == 3)
      return 19;
    return countBinaryNum1(param-1) + 2*countBinaryNum1(param-2) + 4*countBinaryNum1(param-3);
  }

  // using recursive function
  private static long countBinaryNum2(long param) {
    if(param == 1)
      return memory[1] = 3;
    if(param == 2)
      return memory[2] = 9;
    if(param == 3)
      return memory[3] = 19;
    if(memory[(int) param] != 0)
      return memory[(int) param];

    return memory[(int) param] = countBinaryNum1(param-1) + 2*countBinaryNum1(param-2) + 4*countBinaryNum1(param-3);
  }

  // using for loop
  private static long countBinaryNum3(long param) {
    if(param == 1)
      return 3;
    if(param == 2)
      return 9;
    if(param == 3)
      return 19;

    long prepreprev = 3;
    long preprev = 9;
    long prev = 19;
    long result = 0;
    for(int i = 4; i <= param; i++) {
      result = prev + 2*preprev + 4*prepreprev;
      prepreprev = preprev;
      preprev = prev;
      prev = result;
    }
    return result;
  }


}

