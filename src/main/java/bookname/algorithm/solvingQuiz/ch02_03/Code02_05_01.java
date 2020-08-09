package bookname.algorithm.solvingQuiz.ch02_03;

import java.util.Iterator;
import java.util.Scanner;
import java.util.Stack;

public class Code02_05_01 {
  static long[][] path; // for counting
  static String[][] from; // for 출발지정보
  static Stack<String> stack = new Stack<>();
  static Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) {
    System.out.println("배열의 행, 열의 개수를 입력하시오");
    int first = Integer.parseInt(scanner.next());
    int second = Integer.parseInt(scanner.next());
    System.out.println("-> 배열을 생성했습니다.");
    System.out.println("배열 원소값을 입력하시오");

    long[][] map = new long[first][second];
    path = new long[first][second];
    from = new String[first][second];

    for(int i = 0; i < first; i++) {
      for(int j = 0; j < second; j++) {
        map[i][j] = Integer.parseInt(scanner.next());
      }
    }

    System.out.println("계산중");

    long currentTime = System.currentTimeMillis();
    System.out.print("최종 도착지까지 갈 수 있는 최단거리 + 최적의 경로는 다음과 같습니다.\n");
    calculatePath(map, first, second);
    showPath(from, from.length - 1, from[0].length - 1);
    Iterator<String> iterator = stack.iterator();
    if(stack.lastElement().compareTo("(0, 0)") != 0) {
      System.out.println("적절한 경로가 없습니다.");
    } else {
      while(iterator.hasNext()) {
        System.out.println(stack.pop());
      }
    }
    System.out.println(String.format("-> %d밀리초가 소요되었습니다.", System.currentTimeMillis()-currentTime));
  }

  private static void showPath(String[][] from, int n, int m) {
    if(n == 0 && m == 0) {
      stack.add(String.format("(%d, %d)", n, m));
      //      System.out.println("(0,0) 입니다");
      return;
    }

    stack.add(String.format("(%d, %d)", n, m));
    //    System.out.println("(" + n + "," + m + ")");

    if(from[n][m] == "LEFT")
      showPath(from, n, m-1);
    else if(from[n][m] == "UP")
      showPath(from, n-1, m);
  }

  // 동적 프로그래밍 적용 및 출발지 정보 출력
  private static void calculatePath(long[][] map, int n, int m) {
    path[0][0] = map[0][0];

    for(int i = 1; i < n; i++) {
      path[i][0] = path[i-1][0] + map[i][0];
      from[i][0] = "UP";
    }

    for(int i = 1; i < m; i++) {
      path[0][i] = path[0][i-1] + map[0][i];
      from[0][i] = "LEFT";
    }

    for(int i = 1; i < n; i++) {
      for(int j = 1; j < m; j++) {
        if(path[i-1][j] > path[i][j-1]) {
          from[i][j] = "UP";
          path[i][j] = map[i][j] + path[i-1][j];
        } else {
          from[i][j] = "LEFT";
          path[i][j] = map[i][j] + path[i][j-1];
        }
      }
    }
    return;
  }
}
/*
샘플 데이터
10 10
3 1 1 2 1 1 4 1 1 1
3 3 5 1 1 1 1 1 1 1
3 1 1 1 1 1 3 1 1 1
1 1 1 3 1 1 1 1 1 1
3 1 5 1 1 1 3 1 1 1
1 5 1 1 1 3 1 4 3 1
3 1 1 1 2 1 3 1 1 1
1 1 5 1 2 1 1 1 1 3
1 1 2 1 3 1 3 1 4 2
3 1 1 1 1 1 3 1 1 1

 */
