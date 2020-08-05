import { atom } from "recoil";
import Family from "../../models/family";

export const familiesState = atom<Family[]>({
  key: "familiesState",
  default: [],
});
