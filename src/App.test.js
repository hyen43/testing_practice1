import { render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  // 렌더링할 컴포넌트 작성
  render(<App />);

  // 살펴보려는 요소: 버튼 역할과 초기 텍스트가 아래와 같은 요소를 찾음.
  const colorBtn = screen.getByRole("button", { name: /change to blue/i });

  // 배경색이 빨간색인 버튼을 기대함(테스트 내용)
  // 문자열이나 객체 모두 가능하다.
  expect(colorBtn).toHaveStyle({
    backgroundColor: "red",
  });
});

test("button turns blue when clicked", () => {});
