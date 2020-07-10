package bookname.algorithm.solvingQuiz.ch00_06;

// int형 정수를 입력받은 후 이진수로 변환하여 1의 개수를 세는 프로그램을 작성하라.
// 예를 들어서, 정수 1000은 이진수로 1111101000이므로 6을 출력한다.
// 다양한 비트 연산 테크닉은 <Hacker's Delight>에 잘 나와있다.
public class Code00_c {
  public static void main(String[] args) {
    int a = 1000;
    sumBinaryOnes(a);
  }

  public static int sumBinaryOnes(int num) {
    int maxSquare = getMaxSquare(num, 100);
    int result = 0;
    for(int i = 0; i < maxSquare; i++) {
      if((num & (int) Math.pow(2, i)) > 0) {
        result += 1;
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
