import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import axios from "axios";
import { fetchColors as mockFetchColors } from "../api/fetchColors";
jest.mock("../api/fetchColors");

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  const { rerender } = render(<BubblePage />);

  mockFetchColors.mockResolvedValueOnce({
    data: [
      {
        color: "black",
        code: { hex: "#000000" },
      },
    ],
  });

  rerender(<BubblePage />);

  const colors = await screen.findAllByTestId("color");

  expect(colors.length).toBeGreaterThan(0);
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
