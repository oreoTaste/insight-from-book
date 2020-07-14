package bookname.algorithm.solvingQuiz.ch00_06;

// 10진수 정수를 입력받아서, 이진수로 바꾸어 출력하는 프로그램을 작성하라
public class Code00_g {
  public static void main(String[] args) {
    sumBinaryOnes(1000);
  }


  public static int sumBinaryOnes(int num) {
    int maxSquare = getMaxSquare(num, 100);
    int result = 0;
    for(int i = 0; i < maxSquare; i++) {
      if((num & (int) Math.pow(2, i)) > 0) {
        result += Math.pow(10, i);
      }
    }
    System.out.println(result);
    return result;
  }

  public static int getMaxSquare(int inputNum, int maxSquareNumSettled) {
    int result = 0;
    if(inputNum <= 0) {
      result = -1;
    } else if(inputNum > Math.pow(2, maxSquareNumSettled)) {
      result = -2;
    } else {
      for(int i = 0; i < maxSquareNumSettled; i++) {
        if(inputNum < Math.pow(2, i)) {
          result = i;
          break;
        }
      }
    }
    return result;
  }


}
