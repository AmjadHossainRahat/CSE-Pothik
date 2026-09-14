# Contributing to CSE-Pothik

Thank you for helping CSE students find clearer, more honest career direction. CSE-Pothik accepts improvements through **forks and pull requests**. Contributors do not need—and should not request—direct push access to this repository.

## Contents

- [Before you begin](#before-you-begin)
- [1. Fork and clone the repository](#1-fork-and-clone-the-repository)
- [2. Create a focused branch](#2-create-a-focused-branch)
- [3. Make the change](#3-make-the-change)
- [4. Validate the change](#4-validate-the-change)
- [5. Commit and push](#5-commit-and-push)
- [6. Open a pull request](#6-open-a-pull-request)
- [7. Respond to review](#7-respond-to-review)
- [8. Synchronize your fork](#8-synchronize-your-fork)
- [What maintainers review](#what-maintainers-review)
- [Maintainer setup after publication](#maintainer-setup-after-publication)
- [Repository and deployment safety](#repository-and-deployment-safety)

## Before you begin

You need:

- a free GitHub account;
- Git;
- Node.js 22.12 or newer;
- Corepack, which supplies the repository's pinned Yarn version.

This is a **Yarn-only** project. Do not use `npm`, commit `package-lock.json`, edit generated `dist/` files or commit dependencies, local environment files, screenshots, traces or test reports.

Read these sources before changing behavior or content:

1. [AI-Prompt.md](AI-Prompt.md) — primary execution and validation instructions;
2. [DESIGN.md](DESIGN.md) — product, content, brand and UX requirements;
3. [SKILL.md](SKILL.md) — architecture, testing and Definition of Done;
4. the relevant [product](docs/product/README.md), [engineering](docs/engineering/README.md) or [content](docs/content/README.md) guide.

For a substantial proposal, open a GitHub Discussion or Issue first. This can prevent duplicated work, but it does not guarantee that a future pull request will be accepted.

## 1. Fork and clone the repository

1. Open [`AmjadHossainRahat/CSE-Pothik`](https://github.com/AmjadHossainRahat/CSE-Pothik).
2. Select **Fork** in the upper-right corner.
3. Keep the suggested repository name and select **Create fork**.
4. On your fork, select **Code** and copy its HTTPS URL.
5. Clone your fork, replacing `YOUR-USERNAME` with your GitHub username:

```bash
git clone https://github.com/YOUR-USERNAME/CSE-Pothik.git
cd CSE-Pothik
```

6. Add the original repository as `upstream` and confirm both remotes:

```bash
git remote add upstream https://github.com/AmjadHossainRahat/CSE-Pothik.git
git remote -v
```

`origin` should point to your fork. `upstream` should point to the original CSE-Pothik repository.

## 2. Create a focused branch

Start from the latest upstream `main`:

```bash
git switch main
git fetch upstream
git merge --ff-only upstream/main
git push origin main
git switch -c docs/clear-first-role-guidance
```

Use a short descriptive branch name, for example:

- `content/improve-backend-roadmap`
- `fix/mobile-breadcrumb-overflow`
- `docs/fork-contribution-guide`

Do not work directly on `main`. Keep one pull request focused on one coherent improvement.

## 3. Make the change

Install the exact locked dependencies:

```bash
corepack enable
yarn install --immutable
```

Start the local site:

```bash
yarn dev
```

While editing:

- preserve equivalent, naturally written English and Bangla experiences;
- use respectful `আপনি` language in Bangla rather than mechanical word-for-word translation;
- preserve mobile, tablet and desktop layouts and both themes;
- add or update tests when behavior, routes, content relationships or invariants change;
- update authoritative and supporting documentation when a requirement changes;
- use trustworthy primary sources for factual claims and check external links;
- do not add job guarantees, salary hype, copied roadmaps, hidden advertising or placeholder content;
- do not commit secrets, analytics exports or personal feedback-form responses.

See the [content guide](docs/content/README.md) for bilingual authoring, resources and SEO rules.

## 4. Validate the change

At minimum, run the combined static quality gate:

```bash
yarn check
```

For content, navigation, styling, components or behavior, also run the applicable production and browser checks:

```bash
yarn build
yarn verify:build
yarn inspect:build
yarn playwright install chromium
yarn test:e2e
yarn test:a11y
yarn check:external-links
```

For a production-equivalent custom-domain build in PowerShell:

```powershell
$env:BASE_PATH = "/"
$env:SITE_URL = "https://cse-pothik.com"
yarn build
yarn verify:build
Remove-Item Env:SITE_URL
Remove-Item Env:BASE_PATH
```

Use the complete validation cycle required by [SKILL.md](SKILL.md) for material changes. Inspect the affected pages in English and Bangla, Light and Dark, and narrow and wide viewports. Do not report a check as passing unless you actually ran it.

## 5. Commit and push

Review what will be committed:

```bash
git status
git diff --check
git diff
```

Stage only the relevant files and write a clear imperative commit message:

```bash
git add CONTRIBUTING.md README.md docs/community/README.md
git commit -m "docs: explain the fork contribution workflow"
git push -u origin docs/fork-contribution-guide
```

Adapt the file list, branch and message to your change. Never include unrelated local changes.

## 6. Open a pull request

1. Open your fork on GitHub.
2. Select **Compare & pull request** for the branch you pushed. If that banner is absent, open **Pull requests → New pull request → compare across forks**.
3. Confirm these endpoints:
   - **base repository:** `AmjadHossainRahat/CSE-Pothik`;
   - **base branch:** `main`;
   - **head repository:** your fork;
   - **compare branch:** your contribution branch.
4. Use a specific title that describes the outcome.
5. In the description, explain:
   - the student or engineering problem;
   - what changed and why;
   - affected routes and languages;
   - every command you actually ran and its result;
   - screenshots for visible desktop/mobile or theme changes;
   - limitations, follow-up work or links to the related Issue/Discussion.
6. Select **Create pull request**.

Automated checks may wait for maintainer approval when a pull request comes from a fork. This is expected. Never ask a maintainer to run unfamiliar workflow changes without explaining why they are safe.

## 7. Respond to review

The maintainer may request changes. Continue using the same local branch:

```bash
git switch docs/fork-contribution-guide
# Make and validate the requested changes.
git add path/to/changed-file
git commit -m "docs: address contribution review"
git push
```

The existing pull request updates automatically. Resolve review conversations only after the concern has been addressed. Avoid force-pushing after review unless the maintainer asks for a cleaned history.

Approval does not guarantee immediate publication. The maintainer retains responsibility for editorial quality, technical quality, merge timing and releases.

## 8. Synchronize your fork

After the pull request is merged or closed:

```bash
git switch main
git fetch upstream
git merge --ff-only upstream/main
git push origin main
git branch -d docs/fork-contribution-guide
```

You may also delete the remote contribution branch from GitHub. Never delete the original repository's branches.

## What maintainers review

A pull request is evaluated for:

- usefulness and safety for CSE students;
- factual accuracy, appropriate sources and honest uncertainty;
- natural English/Bangla parity and the site's mentoring voice;
- accessibility, keyboard use and semantic HTML;
- responsive layout and Light/Dark theme quality;
- SEO, internal links and GitHub Pages base-path safety;
- tests, maintainability, performance and consistency with the architecture;
- licensing, attribution, privacy and analytics boundaries.

A maintainer may request revision or decline a well-intended change when it conflicts with the site's scope, duplicates existing guidance or cannot be supported responsibly.

## Maintainer setup after publication

GitHub Free does not enforce repository rulesets while this repository is private. That warning is expected. After changing the repository visibility to **Public**, the maintainer should configure the following free controls:

1. Open **Settings → Rules → Rulesets → New branch ruleset**.
2. Name it `Protect main`, set enforcement to **Active** and target the default branch.
3. Add **Repository administrators** to the bypass list with **For pull requests only**. This permits exceptional maintainer merges through a pull request without permitting direct pushes.
4. Enable:
   - restrict deletions;
   - block force pushes;
   - require a pull request before merging;
   - require one approval;
   - dismiss stale approvals after new commits;
   - require review from Code Owners;
   - require conversation resolution;
   - require status checks and branches to be up to date;
   - require linear history if squash or rebase merging is enabled.
5. Select the CI status check named `quality` after that check has run at least once.
6. In **Settings → Actions → General**, require approval before workflows from external contributors run. Review changes under `.github/workflows/` before approving them.
7. In **Settings → Pages**, select **GitHub Actions** as the publishing source.

The repository's [CODEOWNERS file](.github/CODEOWNERS) assigns all paths to `@AmjadHossainRahat`. Combined with required Code Owner review and withholding write access from external contributors, this keeps acceptance under the maintainer's control. A ruleset created while the repository is private will not protect it on GitHub Free until the repository becomes public; confirm that GitHub shows the ruleset as active and enforced after changing visibility.

## Repository and deployment safety

- Contributors work in forks and cannot deploy the production site.
- After the public-repository ruleset is enforced, changes reach `main` only through a reviewed pull request and required checks.
- Only the maintainer merges accepted changes.
- GitHub Pages deployment runs from the resulting push to `main`, not from an external pull request.
- Fork pull-request workflows receive restricted permissions; repository secrets must never be exposed to contributor code.
- The [MIT License](LICENSE) permits reuse and modification but does not grant direct write, merge or deployment access.

For feedback that does not require code or content edits, use the voluntary [CSE-Pothik feedback form](https://forms.gle/ZKyHbR9MHoebFbnWA).
