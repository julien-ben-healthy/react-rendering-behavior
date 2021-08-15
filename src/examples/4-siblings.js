import { ComponentGenerator } from "../ComponentGenerator";

export default ComponentGenerator({
  name: "App",
  withState: true,
  Child: ComponentGenerator({
    name: "Component A",
    withState: true,
    withMemo: false,
    Child: [
      ComponentGenerator({
        name: "Component B",
        withState: true,
        Child: ComponentGenerator({
          name: "Component C",
          withState: true,
          withMemo: true
        })
      }),
      ComponentGenerator({
        name: "Component B",
        withState: true,
        Child: ComponentGenerator({
          name: "Component C",
          withState: true,
          withMemo: true
        })
      })
    ]
  })
});
