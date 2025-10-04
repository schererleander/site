/// <reference types="vite/client" />
declare module "*.md" {
  import { FC } from "react";
  const attributes: Record<string, unknown>;
  const markdown: string;
  const ReactComponent: FC;
  export { attributes, markdown, ReactComponent };
  export default ReactComponent;
}
