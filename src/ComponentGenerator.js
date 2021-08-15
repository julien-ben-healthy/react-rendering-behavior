import { useState, memo } from 'react';
import { useRedRender } from './useRedRender';
import './styles.css';

export const ComponentGenerator = ({
  name,
  withState = false,
  withMemo = false,
  Child = false,
}) => {
  const fullName = withMemo ? `memo(${name})` : name;

  const Component = () => {
    const ref = useRedRender();

    const [num, setNum] = useState(0);
    const increment = () => setNum(num + 1);

    return (
      <div className="box" ref={ref}>
        <h3>{fullName}</h3>
        {withState && (
          <>
            <p>State: {num}</p>
            <button type="button" onClick={increment}>
              Update state
            </button>
          </>
        )}
        {Child &&
          (Array.isArray(Child) ? (
            <div className="siblings">
              {Child.map((RenderMe, i) => (
                <RenderMe key={i} />
              ))}
            </div>
          ) : (
            <Child />
          ))}
      </div>
    );
  };

  return withMemo ? memo(Component) : Component;
};
