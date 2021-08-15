import { ComponentGenerator } from "../ComponentGenerator";

export default ComponentGenerator({
  name: "App",
  withState: true,
  Child: ComponentGenerator({
    name: "Component A",
    withMemo: false,
    Child: [
      ComponentGenerator({
        name: "Component B",
        withMemo: true,
        Child: ComponentGenerator({
          name: "Component C",
          Child: ComponentGenerator({
            name: "Component D",
          })
        })
      }),
      ComponentGenerator({
        name: "Component E",
        Child: ComponentGenerator({
          name: "Component F",
          Child: ComponentGenerator({
            name: "Component G",
          })
        })
      })
    ]
  })
});
