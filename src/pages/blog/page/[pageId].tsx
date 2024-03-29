import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import { SideBarLayout } from "@/components/layouts/SideBarLayout";
import { Meta } from "@/components/Meta";
import { ArticleList } from "@/components/ArticleList";
import { Pagination } from "@/components/Pagination";
import { BrowserWindow } from "@/components/BrowserWindow";
import { SideBar } from "@/components/SideBar";
import { getArticles, getCategories } from "@/lib/api/index";
import { ARTICLES_PER_PAGE } from "@/utils/constants";
import { createOgpUrl, range } from "@/utils/commonFunctions";
import { ArticleItem } from "@/apis/blog";
import { CategoryItem } from "@/apis/categories";
import { ContentSection, SectionTitle, PageTitle } from "@/styles/utils/common";

type Props = {
  articles: ArticleItem[];
  totalCount: number;
  currentPage: number;
  categories: CategoryItem[];
  // popularArticles: ArticleItem[]
};

type Params = {
  pageId: string;
};

const BlogPageId: NextPage<Props> = (props: Props) => {
  const { articles, totalCount, currentPage, categories } = props;
  const defaultOgpUrl = createOgpUrl("Blog - 記事一覧");
  return (
    <SideBarLayout>
      <SideBar categories={categories} />
      <Meta
        title={"Blog"}
        description={"Yuichi Mukai - Dev"}
        image={defaultOgpUrl}
        favicon="📝"
      />
      <BrowserWindow>
        <PageTitle>Blog 📝</PageTitle>
        <ContentSection>
          <SectionTitle>Articles</SectionTitle>
          <ArticleList articles={articles} />
          <Pagination
            pageHref={"/blog/page/"}
            totalCount={totalCount}
            perPage={ARTICLES_PER_PAGE}
            currentPage={currentPage}
          />
        </ContentSection>
      </BrowserWindow>
    </SideBarLayout>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const articleList = await getArticles();
  const paths = range(
    1,
    Math.ceil(articleList.totalCount / ARTICLES_PER_PAGE)
  ).map((repo) => `/blog/page/${repo}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context: GetStaticPropsContext<Params>
) => {
  const { pageId } = context.params;
  const offset = (Number(pageId) - 1) * ARTICLES_PER_PAGE;
  const [articleList, categoryList] = await Promise.all([
    getArticles({ offset, limit: ARTICLES_PER_PAGE }),
    getCategories(),
  ]);
  return {
    props: {
      articles: articleList.contents,
      totalCount: articleList.totalCount,
      currentPage: Number(pageId),
      categories: categoryList.contents,
    },
  };
};

export default BlogPageId;
