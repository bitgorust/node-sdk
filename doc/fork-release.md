# Fork 发布规范

本文档约束公司 fork 仓库 `origin` 与官方仓库 `upstream` 的长期同步、版本命名和私有 NPM 发布方式。

## 目标

- 保持 `main` 尽量贴近 `upstream/main`
- 将公司定制改动收敛在少量文件，降低同步冲突
- 从 `main` 打 tag 发布，不长期维护 `release` 分支
- 始终以 `@laipic/node-sdk` 发布到公司私有制品库

## 当前约定

- 上游仓库：`upstream=https://github.com/larksuite/node-sdk.git`
- 公司 fork：`origin=git@gitlab.laihua.com:openclaw/larksuite-node-sdk.git`
- 私有 NPM：`http://116.63.93.45:4873/`
- 包名：`@laipic/node-sdk`

## 分支策略

- `main` 是长期集成分支，用于承接 upstream 同步和公司改动
- 不直接在 `main` 上开发，所有改动都从短生命周期分支发起
- 不维护长期 `release/*` 分支，发布以 tag 为边界

推荐分支命名：

- `chore/sync-upstream-1.60.0`
- `chore/private-registry-publish`
- `fix/internal-publish-config`
- `feat/<topic>`

## 版本和 Tag 规则

为了同时保留 upstream 版本语义和内部发布序号，使用预发布后缀：

- `1.60.0-laipic.1`
- `1.60.0-laipic.2`
- `1.61.0-laipic.1`

推荐 tag 与版本号保持一致：

- `v1.60.0-laipic.1`

规则：

- 当同步到新的 upstream 版本时，重置内部序号为 `.1`
- 同一个 upstream 基线上的内部补丁递增 `.2`、`.3`
- 不发布无 tag 的提交
- 发布配置分支不承载具体发布版本号，版本号只在实际发布前调整

## 推荐工作流

### 1. 同步 upstream

```bash
git fetch upstream
git checkout main
git pull origin main
git checkout -b chore/sync-upstream-1.60.0
git merge upstream/main
```

如果冲突集中在发布配置文件，优先保留公司 fork 的以下约定：

- `package.json` 中的包名、发布脚本和 `publishConfig`
- `.npmrc` 中的 `@laipic` registry 映射
- 本文档中的发布规则

### 2. 处理公司定制改动

公司定制改动尽量收敛在以下文件：

- `package.json`
- `.npmrc`
- `doc/fork-release.md`

这样可以减少与 upstream README、源码和生成逻辑的冲突。

### 3. 验证

```bash
yarn build
yarn test
npm pack --dry-run
```

检查点：

- 产物仍输出到 `lib/`、`es/`、`types/`
- 包名为 `@laipic/node-sdk`
- publish registry 指向公司私库

### 4. 合并到 main

通过 MR 合并，不直接向 `main` push。

建议 MR 标题：

- `chore: sync upstream main to 1.60.0`
- `chore: configure private npm publishing`
- `fix: adjust internal package publish metadata`

### 5. 发布

首次登录私库：

```bash
npm login --registry http://116.63.93.45:4873/
```

更新版本号后发布：

```bash
npm version 1.60.0-laipic.1
yarn publish:private
git push origin main --follow-tags
```

如果只想先验证包内容：

```bash
npm pack --dry-run
```

## 手动发布最简流程

当前仓库没有 GitLab runner，默认采用手动发布。推荐把“发布配置”和“具体版本发布”拆开处理。

### 1. 先合并发布配置

先将私有发布配置分支合并到 `main`，但不要在这一步修改版本号。

例如：

```bash
git checkout main
git pull origin main
git merge --ff-only chore/private-registry-publish
git push origin main
```

### 2. 发布时再单独改版本号

建议从最新 `main` 拉一个很短的发布分支：

```bash
git checkout main
git pull origin main
git checkout -b chore/release-1.60.0-laipic.1
```

只修改版本号，不自动创建 commit 和 tag：

```bash
npm version 1.60.0-laipic.1 --no-git-tag-version
```

### 3. 本地验证

```bash
yarn build
yarn test
npm pack --dry-run
```

### 4. 提交发布版本

```bash
git add package.json
git commit -m "chore: release 1.60.0-laipic.1"
```

### 5. 合回 main 并打 tag

```bash
git checkout main
git merge --ff-only chore/release-1.60.0-laipic.1
git tag v1.60.0-laipic.1
```

### 6. 发布到私库

首次登录私库：

```bash
yarn login:private
```

发布：

```bash
yarn publish:private
```

推送主线和 tag：

```bash
git push origin main
git push origin v1.60.0-laipic.1
```

## 注意事项

- `npm version` 默认会自动创建 commit 和 tag，当前仓库建议使用 `--no-git-tag-version`
- 版本号变更应只出现在实际发布分支，不应混入 `chore/private-registry-publish`
- 如果发布失败，不要复用同一个版本号重复发布，先检查私库中的版本占用情况

## 为什么不使用 release 分支

当前仓库更接近单主线持续集成模式，而不是多版本并行维护模式。长期维护 `release` 分支会带来额外成本：

- upstream 同步后需要在多个分支间重复合并
- 私有发布配置更容易漂移
- 紧急修复需要额外 cherry-pick 或回合并

只有在以下场景才考虑引入 `release/*`：

- 同时维护多个历史大版本
- 发布前存在较长冻结窗口
- 需要独立 QA 或合规审批分支

当前仓库没有这些明显信号，因此默认不引入。

## 可选的 GitLab CI 发布方案

仓库目前没有现成 `.gitlab-ci.yml`。如果后续要改成 tag 自动发布，建议只在 tag 流水线执行：

```yaml
publish:npm:
  stage: deploy
  rules:
    - if: $CI_COMMIT_TAG =~ /^v\d+\.\d+\.\d+-laipic\.\d+$/
  script:
    - yarn install --frozen-lockfile
    - yarn build
    - yarn test
    - npm publish
```

认证信息不要写入仓库，应通过 GitLab CI 变量或 runner 环境注入用户级 `.npmrc`。
