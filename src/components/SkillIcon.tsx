import {
  GitHubLogo,
  JavaScriptIcon,
  NextIcon,
  ReactIcon,
  SlackIcon,
  TypeScriptIcon,
  VercelIcon,
  DockerIcon,
  RubyIcon,
  RailsIcon,
  NestIcon,
  GraphQLIcon,
} from "@/components";
import { skills } from "@/utils";

type Props = {
  name: typeof skills[number];
};

export const SkillIcon: React.VFC<Props> = (props) => {
  const { name } = props;
  switch (name) {
    case "JavaScript":
      return <JavaScriptIcon />;
    case "TypeScript":
      return <TypeScriptIcon />;
    case "React":
      return <ReactIcon />;
    case "Slack":
      return <SlackIcon />;
    case "GitHub":
      return <GitHubLogo fill="var(--colors-white)" />;
    case "Next":
      return <NextIcon fill="var(--colors-white)" />;
    case "Vercel":
      return <VercelIcon fill="var(--colors-white)" />;
    case "Docker":
      return <DockerIcon />;
    case "Ruby":
      return <RubyIcon />;
    case "Rails":
      return <RailsIcon />;
    case "Nest":
      return <NestIcon />;
    case "GraphQL":
      return <GraphQLIcon />;
    default:
      return null;
  }
};
