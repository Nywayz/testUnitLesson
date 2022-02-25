import { renderHook } from "@testing-library/react-hooks";
import useCalculator from "../../hooks/useCalculator";

test("is addition right", () => {
  const { result } = renderHook(() => useCalculator());
  const { addition } = result.current;
  expect(addition("2", "2")).toEqual("4");
});

test("is substraction right", () => {
  const { result } = renderHook(() => useCalculator());
  const { substraction } = result.current;
  expect(substraction("2", "2")).toEqual("0")
})

test("is division right", () => {
  const { result } = renderHook(() => useCalculator());
  const { division } = result.current;
  expect(division("2", "2")).toEqual("1")
})

test("is division by 0 rejected", () => {
  const { result } = renderHook(() => useCalculator());
  const { division } = result.current;
  expect(division("2", "0")).toEqual("2/0")
})