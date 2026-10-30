# ArchEcho · 郑景文的个人主页

一个简洁的个人介绍和 Markdown 博客，使用 Astro 构建，部署在 GitHub Pages。

网站：https://imwen-97.github.io/

## 发布文章（只需修改 Markdown）

在 `src/content/BlogPosts/` 下新建一个 `.md` 文件，也可以放到子文件夹中，例如：

```text
src/content/BlogPosts/
├── welcome-to-archecho.md
├── papers/
│   └── attacc-reading.md
└── experiments/
    └── first-pim-test.md
```

每篇文章开头填写：

```yaml
---
title: "AttAcc 论文阅读笔记"
date: "2026-10-30"
category: "文献调研"
tags: ["PIM", "LLM", "Attention"]
excerpt: "简短的文章摘要（可省略，省略时从正文提取）。"
---

# 论文要解决什么问题？

这里直接使用标准 Markdown 写正文。
```

- `title` 和 `date` 必填，日期使用 `YYYY-MM-DD`。
- `category` 可填 `文献调研`、`实验记录` 或 `随笔`，不填默认为 `随笔`。
- `tags` 可任意添加多个标签；`tags` 与 `excerpt` 都可省略。
- 文件名建议使用英文和连字符；子文件夹可按主题自由组织。
- 所有 `.md` 文件会自动加入 **/blog 文章列表、分类页、标签页、站内搜索和 RSS**。无需手动维护文件列表。
- 提交到 `main` 后，GitHub Actions 自动构建网站。

## 修改个人信息

- 主页文案：`src/pages/index.astro`
- 网站标题、GitHub 地址等：`src/settings.ts`
- 导航：`src/layouts/Layout.astro`
- 视觉样式：`src/styles/global.css`

## 本地预览及检查

需要 Node.js 24（或满足当前 Astro 的 Node 版本要求）：

```bash
npm ci
npm run dev
```

打开 http://localhost:4321。

```bash
npm test
npm run lint
npm run check
npm run build
```

## GitHub Pages 发布

仓库为 `ImWen-97/ImWen-97.github.io`。请在 **Settings → Pages → Build and deployment** 中将 Source 设为 **GitHub Actions**，使用 `.github/workflows/deploy.yml` 自动发布。

改编自 MIT 许可的 [Astro Academia](https://github.com/maiobarbero/astro_academia)，原始许可证保留在 `LICENSE`。
