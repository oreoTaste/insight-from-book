package bookname.algorithm.solvingQuiz.ch00_01;

//ch0.1 최대와 최소
//code0-3 조건연산자(c에서 삼항연산자)에서 유의할 사항
public class Code00_03 {
  public static void main(String[] args) {

    // i(4)가 j(3)보다 큰 경우,

    // i 값(4)은
    // 조건절 (i++)이 연산된 후, 참절 (i++)이 연산되어,
    // 6이 된다.

    // j는
    // i 값(4)이
    // 조건절 (i++)이 연산된 후, 참절(i++)의 리턴값을 받기때문에
    // 5가 된다
    int i = 4;
    int j = i++ > (j = 3) ? i++ : j--;

    System.out.println("i value : " + i);
    System.out.println("j value : " + j);

    // k(2)가 l(3)보다 큰 경우,

    // k 값(2)은
    // 조건절 (k++)이 연산된 후, 거짓절 (l--)이 연산되어,
    // 3이 된다.

    // l 값(3)은
    // 조건절이 연산된 후, 거짓절(l--)의 리턴값을 받기때문에
    // 그대로 3가 된다
    int k = 2;
    int l = k++ > (l = 3) ? k++ : l--;

    System.out.println("k value : " + k);
    System.out.println("l value : " + l);

  }

}
