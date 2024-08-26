import { DisplaySupport } from "../../features/talents/DisplaySupport";
import { Status } from "../inventory";
import { getMagicPower } from "../talents";
import { Talent, ResumeEffect } from "../talents";
import { MagicScrollId } from "./MagicScrollId";

export const Devotion: Talent = {
  id: MagicScrollId.Devotion,
  name: "Dévotion",
  manaCost: true,
  usageCost: 4,
  range: { min: 0, max: 2 },
  resume: (summary) => <ResumeEffect attack={summary.magicAttack} status={[{ value: getMagicPower(summary) / 5, status: Status.Force }]} />,
  getDescription: (summary) => (
    <DisplaySupport
      status={[{ value: getMagicPower(summary) / 5, status: Status.Force }]} />
  ),
};
