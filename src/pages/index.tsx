import posts from "../../.contents/posts.json";
import { NextPage } from "next";
import { createOgpUrl } from "@/utils";
import { Meta } from "@/components/Meta";
import { BrowserWindow } from "@/components/BrowserWindow";
import { SkillIconList } from "@/components/SkillIconList";
import { ExternalPostList } from "@/components/ExternalPostList";
import { Footer } from "@/components/Footer";
import { BasicLayout } from "@/components/layouts/BasicLayout";
import {
  ContentSection,
  SectionTitle,
  PlainText,
  PageTitle,
} from "@/styles/utils/common";

type Props = {};

const Home: NextPage<Props> = (props) => {
  const defaultOgpUrl = createOgpUrl("Top - About me");
  return (
    <BasicLayout>
      <Meta
        title={""}
        description={"Yuichi Mukai - Web Dev"}
        image={defaultOgpUrl}
        favicon="👋"
      />
      <BrowserWindow>
        <PageTitle>Hello, World 👋</PageTitle>
        <ContentSection>
          <SectionTitle>Profile</SectionTitle>
          <PlainText>
            Hi, I'm Yuichi Mukai, a junior web engineer interested in backend
            and Infrastructure development.
          </PlainText>
          <PlainText>
            I belong to the Faculty of Agriculture of Meiji University.
          </PlainText>
        </ContentSection>
        <ContentSection>
          <SectionTitle>Experience</SectionTitle>
          <PlainText>
            2022.7〜 Worked at toridori.inc, as a part time job
          </PlainText>
          <PlainText>2021.8 Worked at medpeer, as intern</PlainText>
          <PlainText>
            2021.3〜5 Worked at weseek.inc, as a part time job
          </PlainText>
          <PlainText>
            2020.11〜12 Worked at Port.inc, as a part time job
          </PlainText>
        </ContentSection>
        <ContentSection>
          <SectionTitle>Language・Tools</SectionTitle>
          <SkillIconList
            names={[
              "Ruby",
              "Rails",
              "JavaScript",
              "TypeScript",
              "React",
              "Next",
              "Nest",
              "GraphQL",
            ]}
          />
        </ContentSection>
        <ContentSection>
          <SectionTitle>Recent activities</SectionTitle>
          <ExternalPostList posts={posts} />
        </ContentSection>
      </BrowserWindow>
      <Footer />
    </BasicLayout>
  );
};

export default Home;
