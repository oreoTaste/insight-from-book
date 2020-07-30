package bookname.algorithm.solvingQuiz.ch01_04;

public class Code01_09_02수정 {
  static double[] memory;
  static long startDate;
  static final long days = 20;

  public static void main(String[] args) {
    memory = new double[(int) days + 1];

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

  private static double getPercent(double percent) {
    return Math.round(percent * 100);
  }

  // using recursive function
  private static double countBinaryNum1(double param) {
    if(param == 1)
      return 1;
    if(param == 2)
      return 1;
    if(param == 3)
      return (double)19/27;
    return countBinaryNum1(param-1)/3 + 2*countBinaryNum1(param-2)/9 + 4*countBinaryNum1(param-3)/27;
  }

  // using recursive function
  private static double countBinaryNum2(double param) {
    if(param == 1)
      return memory[1] = 1;
    if(param == 2)
      return memory[2] = 1;
    if(param == 3)
      return memory[3] = (double)19/27;
    if(memory[(int) param] != 0)
      return memory[(int) param];

    return memory[(int) param] = countBinaryNum1(param-1)/3 + 2*countBinaryNum1(param-2)/9 + 4*countBinaryNum1(param-3)/27;
  }

  // using for loop
  private static double countBinaryNum3(double param) {
    if(param == 1)
      return 1;
    if(param == 2)
      return 1;
    if(param == 3)
      return (double)19/27;

    double prepreprev = 1;
    double preprev = 1;
    double prev = (double)19/27;
    double result = 0;
    for(int i = 4; i <= param; i++) {
      result = prev/3 + 2*preprev/9 + 4*prepreprev/27;
      prepreprev = preprev;
      preprev = prev;
      prev = result;
    }
    return result;
  }


}

