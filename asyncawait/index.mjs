const func1 = async function func1() {
  console.log(1);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(2);
};

const func2 = function func2() {
  console.log(3);
};

func1();
func2();
