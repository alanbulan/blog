# 内容维护指南

[返回首页](./README.md) · [部署](./DEPLOYMENT.md) · [页面核对](./CHECK_URL.md)

这里说明通过仓库文件维护内容的方法，不把文件名中的 CMS 理解为已经存在可登录、可发布的在线内容后台。

## 内容来源

实际读取逻辑在 [lib/content.ts](./lib/content.ts)。它使用 `gray-matter` 解析 Markdown 顶部的 Front Matter，用 JSON 读取 `content/settings/` 中的配置。

| 内容 | 目录 | 当前过滤与排序 |
| --- | --- | --- |
| 文章 | `content/blog/*.md` | `published: false` 不展示；按 `date` 从新到旧 |
| 作品 | `content/projects/*.md` | `visible: false` 不展示；按 `order` 排序 |
| 技能 | `content/skills/*.md` | 读取 Front Matter，按 `order` 排序 |
| 站点配置 | `content/settings/*.json` | 调用对应 getter 的页面读取对应文件 |

当前排序使用 `order || 999`，因此不要用 `0` 表示第一项；使用从 `1` 开始的正整数。没有对应 JSON 文件时不要仅新增 getter 调用，文件与页面需要一起核对。

## 新增文章

复制一篇现有文章作为结构参考，如 [Next.js 示例文章](./content/blog/2024-01-15-nextjs-best-practices.md)，再修改真实内容：

```yaml
---
title: 我的项目记录
excerpt: 这篇记录讨论的问题与结论。
date: 2026-09-08
readTime: 5分钟
category: 技术
tags:
  - 开发记录
gradient: from-blue-500 to-cyan-500
published: false
---
```

正文写在第二个 `---` 后面。先保留 `published: false`，核对内容与授权后再发布。日期使用 `YYYY-MM-DD`，不要用虚构历史日期制造资历。文件名会成为数据中的 `slug` 和 `id`；它本身不创建路由。

## 新增作品

参考 [已有作品文件](./content/projects/ai-task-manager.md) 的字段：`title`、`description`、`gradient`、`tags`、`github`、`demo`、`stars`、`order`、`visible`。

先写真实仓库链接，未部署演示时不要伪造 `demo`。`stars` 是手工内容字段，不是自动统计；保留它时需要定期核对，或在页面中去掉这个指标。`visible: false` 可隐藏暂不展示的条目。

## 编辑与发布顺序

修改内容文件后，先运行本地开发预览，再执行 `npm run build` 并检查静态产物。采用静态部署时，线上内容要在重新构建并发布后才更新，不是修改 Markdown 后就即时生效。

新增图片需确认其存放位置、引用路径、尺寸与授权。不要把邮箱令牌、API Key、数据库连接或他人的私人资料写进内容文件；构建结果会向访问者公开。
