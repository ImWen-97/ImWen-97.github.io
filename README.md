# ArchEcho · 郑景文的个人主页

一个简洁的个人介绍和 Markdown 博客，使用 Astro 构建，部署在 GitHub Pages。

网站：https://imwen-97.github.io/

## 发布文章（只需修改 Markdown）

一级文件夹就是文章分类，文件夹名称会自动成为主页按钮和分类页面标题。先使用以下四类：

```text
src/content/BlogPosts/
├── 文献阅读/
│   └── attacc-reading.md
├── 感悟随笔/
│   └── welcome-to-archecho.md
├── 经验记录/
│   └── study-method.md
└── 放松娱乐/
    └── weekend.md
```

每篇文章开头填写：

```yaml
---
title: "AttAcc 论文阅读笔记"
date: "2026-10-30"
tags: ["PIM", "LLM", "Attention"]
excerpt: "简短的文章摘要（可省略，省略时从正文提取）。"
draft: false
pinned: false
---

# 论文要解决什么问题？

这里直接使用标准 Markdown 写正文。
```

- `title` 和 `date` 必填，日期使用 `YYYY-MM-DD`。
- **无需填写 `category`**：类别只由 `.md` 所在的一级文件夹决定，避免分类信息重复或冲突。
- `tags` 是跨分类的关键词，如 `PIM`、`读书`；`tags` 与 `excerpt` 都可省略。
- `draft: true` 表示草稿：公开构建不会生成文章页面，也不会进入分类、标签、搜索和 RSS；本地运行 `npm run dev` 则可预览并显示“草稿预览”标识。默认是 `false`。
- `pinned: true` 表示置顶：文章在全部文章、分类、标签列表中优先显示，默认是 `false`。多篇置顶文章按日期倒序排列。
- 文章页会根据二、三级标题（`##` / `###`）自动生成目录，并显示预计阅读时长、上一篇与下一篇。
- 文件名建议使用英文和连字符；同一分类可以继续创建多层子文件夹。
- 新增一级文件夹时，主页入口和对应分类页面自动生成；目前四个文件夹即使为空也会显示。
- 文章会自动加入 **/blog 文章列表、分类页、标签页、站内搜索和 RSS**。无需手动维护列表或路由。
- 提交到 `main` 后，GitHub Actions 自动构建网站。

例如：新建 `src/content/BlogPosts/文献阅读/attacc-reading.md`，文章将发布在 `/blog/文献阅读/attacc-reading/`，并自动出现在“文献阅读”分类和对应标签筛选中。

> 注意：新增文件夹时 Git 无法追踪纯空目录。可以先放一篇 `.md`，或放一个空的 `.gitkeep` 文件。

> **草稿隐私提醒：此仓库为公开 GitHub 仓库。** `draft: true` 只能隐藏网站中的文章，Markdown 原文件如果已经提交到 GitHub，仍然对所有人可见。敏感或尚未准备公开的稿件请只保存在本地（不要提交到公共仓库）。

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
