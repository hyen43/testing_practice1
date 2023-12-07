import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color and updates when click", () => {
  // 렌더링할 컴포넌트 작성
  render(<App />);

  // 살펴보려는 요소: 버튼 역할과 초기 텍스트가 아래와 같은 요소를 찾음.
  const colorBtn = screen.getByRole("button", { name: /change to blue/i });

  // 배경색이 빨간색인 버튼을 기대함(테스트 내용)
  // 문자열이나 객체 모두 가능하다.
  expect(colorBtn).toHaveStyle({
    backgroundColor: "red",
  });

  //click button(fireEvent: 가상 DOM에서 요소와 상호작용을 할 수 있도록 도와줌)
  fireEvent.click(colorBtn);

  //버튼이 클릭된 후에는 버튼의 배경색이 파란색이길 기대함
  expect(colorBtn).toHaveStyle({
    backgroundColor: "blue",
  });

  // 버튼이 클릭 된 후에는 버튼 텍스트가 변경되어야 함
  expect(colorBtn).toHaveTextContent("Change to red");
});
