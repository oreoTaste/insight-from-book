package bookname.algorithm.solvingQuiz.ch00_03;

//ch0.3 배열 회전
//code0-8확장 : k만큼 오른쪽으로 이동시키는 함수를 작성하기 (repeat model, and faster model)
public class Code00_08_02 {
  public static void main(String[] args) {

    int[] arr = new int[] {1,2,3,4,5,6,107,108,109,110};
    print(arr);

    System.out.println("\n========================");
    System.out.println("[repeat model]");
    long startTime1 = checkTime();
    right_rotate(arr, 0, 5, 1000000000);
    long endTime1 = checkTime();
    print(arr, startTime1, endTime1);


    System.out.println("\n========================");
    System.out.println("[repeat model]");
    long startTime2 = checkTime();
    speedy_right_rotate(arr, 0, 5, 1000000000);
    long endTime2 = checkTime();
    print(arr, startTime2, endTime2);

  }

  private static long checkTime() {
    return System.currentTimeMillis();
  }

  private static void print(int[] arr) {
    for(int a : arr) {
      System.out.print(a + " ");
    }
  }

  private static void print(int[] arr, long startTime, long endTime) {
    for(int a : arr) {
      System.out.print(a + " ");
    }
    System.out.print("\n => time spent : " + (endTime - startTime));
  }

  private static void speedy_right_rotate(int[] arr, int startIndex, int endIndex, int jump) {
    int speed = jump;
    int checkedStartIndex = startIndex < endIndex ? startIndex : endIndex;
    int checkedEndIndex = startIndex < endIndex ? endIndex : startIndex;
    int length = checkedEndIndex - checkedStartIndex + 1;
    if(jump > length) {
      speed = speed % length;
    }

    // 사라진값
    int[] arrNew = new int[speed];
    int a = speed - 1;
    for(int i = checkedEndIndex ; i > checkedEndIndex - speed ; i--) {
      arrNew[a--] = arr[i];
    }

    for(int i = checkedEndIndex - speed; i >= checkedStartIndex; i--) {
      arr[i+speed] = arr[i];
    }

    // 앞쪽에 넣기
    for(int i = checkedStartIndex ; i < checkedStartIndex + speed; i++) {
      arr[i] = arrNew[i];
    }
  }

  // repeat model : slow
  static void left_rotate(int[] arr, int startIndex, int endIndex, int speed) {
    int count = speed;
    while(count-- > 0) {
      int checkedStartIndex = startIndex < endIndex ? startIndex : endIndex;
      int checkedEndIndex = startIndex < endIndex ? endIndex : startIndex;

      int startValue = arr[checkedStartIndex];

      for(int i = checkedStartIndex + 1; i <= checkedEndIndex; i++) {
        arr[i-1] = arr[i];
      } arr[checkedEndIndex] = startValue;
    }
  }

  static void right_rotate(int[] arr, int startIndex, int endIndex, int speed) {
    int count = speed;
    while(count-- > 0) {
      int checkedStartIndex = startIndex < endIndex ? startIndex : endIndex;
      int checkedEndIndex = startIndex < endIndex ? endIndex : startIndex;

      int lastValue = arr[checkedEndIndex];

      for(int i = checkedEndIndex - 1; i >= checkedStartIndex; i--) {
        arr[i+1] = arr[i];
      } arr[checkedStartIndex] = lastValue;
    }
  }
}
