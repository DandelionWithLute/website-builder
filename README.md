agency/[agencyId]
let allNoti: any = []
const notifications = await getNotificationAndUser(agencyId)
if (notifications) allNoti = notifications

UploadDropzone type is different from Props
endpoint="imageUploader"

newer version of uploadthing.ts inside /lib/ instead of
import { generateComponents } from "@uploadthing/react";
import { generateReactHelpers } from "@uploadthing/react/hooks";
import type { OurFileRouter } from "@/app/api/uploadthing/core";
export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents<OurFileRouter>();
export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();


npm i --save-dev @types/uuid   

prisma.schema model Notification
value under @@index() is the same as the one in @relations(fields:[value]) 

queries.ts
The following query uses upsert to update a User record with a specific email address, or create that User record if it does not exist:
https://www.prisma.io/docs/orm/prisma-client/queries/crud#update-or-create-records
const upsertUser = await prisma.user.upsert({
  where: {
    email: 'viola@prisma.io',
  },
  update: {
    name: 'Viola the Magnificent',
  },
  create: {
    email: 'viola@prisma.io',
    name: 'Viola the Magnificent',
  },
})

queries.ts some
at least one post (some) 
https://www.prisma.io/docs/orm/prisma-client/queries/crud#filter-by-related-record-field-values

enum Role {SUBACCOUNT_USER} to create a new DataType
role Role @default(SUBACCOUNT_USER)

Don't forget question mark in middleware.ts
const pathWithSearchParams = `${url.pathname}${
      searchParams.length > 0 ? `?${searchParams}` : ""
    }`;

Solution:Run npm with nodejs then you may continue using bun
NextJS Middleware Server Error: Attempt to export a nullable value for "TextDecoderStream"
https://stackoverflow.com/questions/77296025/nextjs-middleware-server-error-attempt-to-export-a-nullable-value-for-textdeco

https://bg.ibelick.com/

SHADCN UI THEME GENERATOR
https://gradient.page/tools/shadcn-ui-theme-generator

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
