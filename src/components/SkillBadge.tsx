import { Separator } from "@/components/ui/separator";
import type { Skill } from "@/store/static";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "./ui/item";

type Props = {
  skill: Skill;
};

const SkillBadge = ({ skill }: Props) => {
  const { Icon, label, description } = skill;
  return (
    <Item className="group/skill bg-background relative overflow-hidden">
      <Icon
        size={128}
        className="absolute top-1/2 left-1/2 -translate-1/2 blur-3xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"
      />
      <ItemMedia>
        <Icon size={48} />
      </ItemMedia>
      <ItemContent className="gap-0 justify-between !">
        <ItemTitle>{label}</ItemTitle>
        <ItemDescription className="">{description}</ItemDescription>
      </ItemContent>
    </Item>
  );
};

export default SkillBadge;
