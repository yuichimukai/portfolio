import fetch from "node-fetch";

export default async (req, res) => {
  if (!req.query.slug) {
    return res.status(404).end();
  }
  const content = await fetch(
    `https://yuichidev.microcms.io/api/v1/blog/${req.query.slug}?fields=id&draftKey=${req.query.draftKey}`,
    { headers: { "X-MICROCMS-API-KEY": process.env.apiKey || "" } }
  )
    .then((res) => res.json())
    .catch((error) => null);

  if (!content) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  res.setPreviewData({
    slug: content.id,
    draftKey: req.query.draftKey,
  });
  res.writeHead(307, { Location: `/${content.id}` });
  res.end("Preview mode enabled");
};

// import { NextApiHandler } from "next";
// import { nodeFetchClient } from '@/apis/nodeFetchClient';

// const handler: NextApiHandler = async (req, res) => {
//   if (!req.query.id) {
//     return res.status(404).end()
//   }

//   try {
//     const content = await nodeFetchClient.blog._contentId(req.query.id as string).$get({
//       query: {
//         draftKey: req.query.draftKey as string
//       }
//     })
//     if (!content) {
//       return res.status(401).json({message: "Given slug is invalid"})
//     }
//     res.setPreviewData({
//       id: content.id,
//       draftKey: req.query.draftKey
//     })
//     res.writeHead(307, {Location: `/blog/${content.id}`})
//     res.end('Preview mode enabled')
//   } catch(e) {
//     console.error(e)
//     return null
//   }
// }

// export default handler
