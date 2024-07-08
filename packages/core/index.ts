import { makeInstaller } from "@zkp-element/utils";
import components from "./components";
import '@zkp-element/theme/index.css'

const installer = makeInstaller(components);

export * from "@zkp-element/components";
export default installer;