# Null Pointer Blog
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/daempasha/null-pointer-blog/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/daempasha/null-pointer-blog/tree/master)
[![Netlify Status](https://api.netlify.com/api/v1/badges/716187de-548f-41d9-85f5-f4de9c85eb9b/deploy-status)](https://app.netlify.com/sites/null-pointer-blog/deploys)


_Null Pointer is a programming blog created using Sanity.io and Next.js_

#

## Aim
The aim of this project was to create a blog site that could easily be edited with a back-end CMS solution (Sanity.io), this will allow for addition, deletion and modifications to the production version without the need for re-deployment.

Another aim was to imitate a full design process from start to finish. I started by designing the application in Figma. Then I created the application in React and Sanity. After this, I created unit tests for the application. Finally, I used [CircleCI](https://circleci.com/) to create a CI/CD workflow that will lint, test and then deploy my application to Netlify.

## Technologies
### Front-end
- React
- Next.js
- TypeScript
- Jest
- Tailwind

### Back-end
- Sanity.io

### Other
- CircleCi
- Netlify
- Figma

## Figma
_Click on the image below to view the Figma file_

[<img src="https://user-images.githubusercontent.com/42499726/192887302-436d1323-73d7-4af5-a59e-a1b69ce0a34a.png">](https://www.figma.com/proto/8Cy3tE5M6lITCdOsdG8m9S/Coding-Blog?page-id=0%3A1&node-id=0%3A1&viewport=1644%2C-782%2C0.44&scaling=min-zoom&starting-point-node-id=237%3A14)

## CI/CD Pipeline 
_Click on the image below to view the CircleCI pipeline_

[<img src="https://user-images.githubusercontent.com/42499726/192889905-65e1d050-1adf-4242-9bad-4afd08902c24.png">](https://app.circleci.com/pipelines/github/daempasha/null-pointer-blog)

# CMS
Null Pointer uses a CMS as the back-end, this means all the content is fully editable and the changes will be reflected on the deployed front-end. This approach means a new build doesn't have to be created everytime a change is made to the posts.

![image](https://user-images.githubusercontent.com/42499726/193050678-cfaf16c4-3b36-4df8-b26a-a62fe08778ef.png)

