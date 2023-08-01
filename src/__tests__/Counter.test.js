import { render } from "@testing-library/react";
import Counter from "../components/Counter";

test("отображает корректное количество репозиториев", () => {
  const { getByText } = render(<Counter count={42} />);
  expect(getByText("42 репозитория")).toBeInTheDocument();
});

test("отображает сообщение, когда количество репозиториев равно 0", () => {
  const { getByText } = render(<Counter count={0} />);
  expect(getByText("0 репозиториев")).toBeInTheDocument();
});