package bookname.algorithm.solvingQuiz.ch02_0102;

import java.util.Scanner;

public class Code02_02 {
  static long[][] memory; // for countPath (메모이제이션)
  static long[][] path; // for countPath2 (동적프로그래밍)
  static Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) {
    System.out.println("배열의 행, 열의 개수를 입력하시오");
    int first = Integer.parseInt(scanner.next());
    int second = Integer.parseInt(scanner.next());
    System.out.println("-> 배열을 생성했습니다.");
    System.out.println("배열 원소값을 입력하시오");

    long[][] map = new long[first][second];
    memory = new long[first][second];
    path = new long[first][second];

    for(int i = 0; i < first; i++) {
      for(int j = 0; j < second; j++) {
        map[i][j] = Integer.parseInt(scanner.next());
      }
    }

    System.out.println("계산중");

    long currentTime = System.currentTimeMillis();
    System.out.print("최종 도착지까지 갈 수 있는 최단거리 경우의 수 : " + countPath0(map, first-1, second-1) + "\n");
    System.out.println(String.format("-> %d밀리초가 소요되었습니다.", System.currentTimeMillis()-currentTime));
    currentTime = System.currentTimeMillis();
    System.out.print("최종 도착지까지 갈 수 있는 최단거리 경우의 수 : " + countPath1(map, first-1, second-1) + "\n");
    System.out.println(String.format("-> %d밀리초가 소요되었습니다.", System.currentTimeMillis()-currentTime));
    currentTime = System.currentTimeMillis();
    System.out.print("최종 도착지까지 갈 수 있는 최단거리 경우의 수 : " + countPath2(map, first, second) + "\n");
    System.out.println(String.format("-> %d밀리초가 소요되었습니다.", System.currentTimeMillis()-currentTime));
  }

  // 메모이제이션 미적용
  private static long countPath0(long[][] map, int n, int m) {
    if(map[n][m] == 0)
      return 0;
    if(n == 0 && m == 0)
      return 1;
    if(n == 0)
      return countPath0(map, n, m-1);
    if(m == 0)
      return countPath0(map, n-1, m);
    return countPath0(map, n-1, m) + countPath0(map, n, m-1);
  }
  // 메모이제이션 적용
  private static long countPath1(long[][] map, int n, int m) {
    if(memory[n][m] > 0)
      return memory[n][m];
    if(map[n][m] == 0)
      return memory[n][m] = 0;
    if(n == 0 && m == 0)
      return memory[n][m] = 1;
    if(n == 0)
      return memory[n][m] = countPath1(map, n, m-1);
    if(m == 0)
      return memory[n][m] = countPath1(map, n-1, m);
    return memory[n][m] = countPath1(map, n-1, m) + countPath1(map, n, m-1);
  }

  // 동적 프로그래밍 적용
  private static long countPath2(long[][] map, int n, int m) {
    path[0][0] = map[0][0];

    for(int i = 1; i < map.length; i++) {
      if(map[i][0] == 0)
        path[i][0] = 0;
      else
        path[i][0] = path[i-1][0];
    }

    for(int i = 1; i < map[0].length; i++) {
      if(map[0][i] == 0)
        path[0][i] = 0;
      else
        path[0][i] = path[0][i-1];
    }

    for(int i = 1; i < n; i++) {
      for(int j = 1; j < m; j++) {
        if(map[i][j] == 0)
          path[i][j] = 0;
        else
          path[i][j] = path[i-1][j] + path[i][j-1];
      }
    }

    return path[n-1][m-1];
  }
}
/*
샘플 데이터
20 20
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
0 1 0 0 1 1 1 1 1 1 1 1 1 0 1 1 1 1 1 1
1 1 1 0 1 1 1 1 1 1 0 1 1 1 1 1 0 1 1 1
0 1 1 1 1 1 0 1 1 1 1 1 1 0 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1 0 1 1 1 1 1 0 1 1 1
1 1 1 1 0 1 1 1 1 1 1 1 1 1 1 0 1 1 1 1
1 1 1 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
0 1 1 1 1 1 0 1 1 1 1 1 1 0 1 1 1 1 1 1
0 1 1 1 1 1 0 1 1 1 1 1 1 0 1 1 1 1 1 1
0 1 1 1 1 1 0 1 1 1 1 1 1 0 1 1 1 1 1 1
0 1 1 1 1 1 1 1 1 1 1 0 1 1 1 1 1 1 0 1
0 0 1 1 1 1 1 1 1 1 1 1 0 1 1 1 1 1 1 1
0 1 1 1 1 1 0 1 1 1 1 1 1 1 0 1 1 1 1 1
1 1 1 0 1 1 1 1 1 1 1 1 1 1 0 1 1 1 1 0
0 1 1 1 1 1 0 1 1 1 1 1 1 0 1 1 1 1 1 1
1 1 1 1 1 0 1 1 0 1 1 1 1 1 0 1 1 1 1 1
0 1 1 1 1 1 0 1 1 1 1 1 1 0 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 0 0 1 1 1 1 1 0 1 1 1
1 1 1 1 0 1 0 1 1 1 1 1 0 1 1 1 1 1 1 0
0 1 1 1 1 1 0 1 1 1 1 1 1 0 1 1 1 1 1 1

 */
