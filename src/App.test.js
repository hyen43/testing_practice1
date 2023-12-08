import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { toBeDisabled } from "@testing-library/jest-dom/matchers";

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

test("initial conditions and Check if check the checkbox, button is to be disabled", () => {
  render(<App />);
  //버튼은 활성화(enabled) 된 상태에서 시작 확인
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();
  // 체크박스는 체크가 안된 상태에서 시작하는 지 확인
  const checkbox = screen.getByRole("checkbox");
  //toBeChecked를 부정하기 위해 not 추가
  expect(checkbox).not.toBeChecked();
});

test("Check if check the checkbox, button is to be disabled", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox");
  // 체크박스를 체크한다.(event)
  fireEvent.click(checkbox);
  // 버튼이 비활성화 된다.
  // expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();
  // 체크박스를 한번 더 체크한다.
  fireEvent.click(checkbox);
  // 다시 버튼이 활성화 되는지 테스트
  expect(colorButton).toBeEnabled();
});

test("Check button gray when disabled", () => {
  render(<App />);

  const colorButton = screen.getByRole("button");

  const checkbox = screen.getByRole("checkbox");

  //체크박스를 눌러서, 버튼이 disabled 상태가 되면 버튼이 gray인지 확인
  fireEvent.click(checkbox);

  expect(colorButton).toBeDisabled();

  expect(colorButton).toHaveStyle({
    backgroundColor: "gray",
  });

  //체크박스를 다시 눌러서, 버튼이 abled 상태가 되면 버튼이 red인지 확인

  fireEvent.click(checkbox);

  expect(colorButton).toBeEnabled();

  expect(colorButton).toHaveStyle({
    backgroundColor: "red",
  });

  //버튼을 눌러서 색을 변경시킨 다음에, 체크박스를 눌러서 버튼이 disabled 상태가 되면 버튼이 gray인지 확인
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({
    backgroundColor: "blue",
  });

  fireEvent.click(checkbox);

  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({
    backgroundColor: "gray",
  });

  //체크박스를 다시 눌러서 버튼이 abled 상태가 되면 버튼이 blue인지 확인
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({
    backgroundColor: "blue",
  });
});
