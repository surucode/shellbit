import { Suru } from "@surucode/suru";
import { ShellBit, ShellBitArgs } from "bit";

export default () => {
  const suru = Suru.registerBit("shell", ShellBit);
  (<any>suru.bits.shell).args = ShellBitArgs;
};
