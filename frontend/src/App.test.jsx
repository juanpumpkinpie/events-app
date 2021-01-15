// __tests__/fetch.test.js
import { render, fireEvent } from "@testing-library/react";
import Form from "./Components/form/Form";

test("checkFormRender", () => {
  const { queryByTitle } = render(<Form />);

  const form = queryByTitle("CreateEvent");
  expect(form).toBeTruthy();
});
