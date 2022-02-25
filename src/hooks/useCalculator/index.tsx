const useCalculator = () => {
  const addition = (value1: string, value2: string) => {
    return Number(Number(value1) + Number(value2)).toString();
  };

  const substraction = (value1: string, value2: string) => {
    return Number(Number(value1) - Number(value2)).toString()
  }

  const division = (value1: string, value2: string) => {
    if (Number(value2) !== 0) {
      return (Number(Math.round(Number(Number(value1) / Number(value2)))).toString())
    }
    alert("Cannot divide by 0!")
    return value1 + "/" + value2
  }

  const root = (value: string) => {
    if (Number(value) !== 0) {
      return (Number(Math.sqrt(Number(value))).toString())
    }
    alert("Cannot root 0!")
    return value
  }

  return {
    addition,
    substraction,
    division,
    root
  };
};

export default useCalculator;
