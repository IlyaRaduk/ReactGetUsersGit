import { render, fireEvent } from "@testing-library/react";
import MyForm from "../components/MyForm";

test("корректно обрабатывает ввод пользователя", () => {
  const setValueMock = jest.fn();
  const { getByLabelText } = render(
    <MyForm value="" setValue={setValueMock} setSubmit={() => {}} />
  );

  const inputElement = getByLabelText(/Имя логина/i);
  fireEvent.change(inputElement, { target: { value: "test" } });

  expect(setValueMock).toHaveBeenCalledWith("test");
});