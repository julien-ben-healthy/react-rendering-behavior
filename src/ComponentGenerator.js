import { useState, memo } from "react";
import { useRedRender } from "./useRedRender";
import "./styles.css";

export const ComponentGenerator = ({
  name,
  withState = false,
  Child = false,
  withMemo = false
}) => {
  const fullName = withMemo ? `memo(${name})` : name;

  const Component = () => {
    const ref = useRedRender();

    const [num, setNum] = useState(0);
    const increment = () => setNum(num + 1);

    return (
      <div className="box" ref={ref}>
        <h2>{fullName}</h2>
        {withState && (
          <>
            <p>State: {num}</p>
            <button type="button" onClick={increment}>
              Update state
            </button>
          </>
        )}{" "}
        {Child && <Child />}
      </div>
    );
  };

  return withMemo ? memo(Component) : Component;
};
