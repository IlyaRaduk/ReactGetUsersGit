import { render } from "@testing-library/react";
import Preloader from "../components/Preloader";

test("отображает прелоадер", () => {
  const { container } = render(<Preloader />);
  expect(container.querySelector(".preloader")).toBeInTheDocument();
});