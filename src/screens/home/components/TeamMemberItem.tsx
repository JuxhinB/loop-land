import components from "../../../components";
import { CrewData } from "../../../types";

type TeamMemberItemProps = CrewData & {
  src: string;
  alt?: string;
};

function TeamMemberItem({ alt = "", src, ...props }: TeamMemberItemProps) {
  return (
    <div className="team-members_cell">
      <components.Image alt={alt} src={src} />

      <div className="team-members_cell-info">
        <span className="team-members_cell-title">{props.name}</span>
        <span className="team-members_cell-subtitle">{props.duty_slugs}</span>
      </div>
    </div>
  );
}

export default TeamMemberItem;
