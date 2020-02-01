package bookname.algorithm.solvingQuiz.ch00_02;

// ch0.2 두 변수의 값 바꾸기
// code0-5 ~ code0-6 포인터를 이용하여 값 바꾸기
class Integer {
  int value;

  public Integer(int value) {
    this.value = value;
  }

  @Override
  public String toString() {
    return String.format("%d", value);
  }
}

public class Code00_0506 {

  public static void main(String[] args) throws CloneNotSupportedException {
    Integer x = new Integer(100);
    Integer y = new Integer(200);

    System.out.println("[original]");
    System.out.print("x value : " + x);
    System.out.println(", y value : " + y);

    System.out.println("============================");
    System.out.println("[wrong swap]");
    wrong_swap(x, y);

    System.out.print("x value : " + x);
    System.out.println(", y value : " + y);

    System.out.println("============================");
    System.out.println("[good swap]");
    swap(x, y);

    System.out.print("x value : " + x);
    System.out.println(", y value : " + y);


  }

  static void wrong_swap(Integer x, Integer y) {
    Integer temp;
    temp = x;
    x = y;
    y = temp;
  }

  static void swap(Integer x, Integer y) throws CloneNotSupportedException {
    Integer temp = new Integer(x.value);
    x.value = y.value;
    y.value = temp.value;
  }


}
