#!/bin/sh
# Exercise real commits and pushes against local throwaway repositories.
set -eu
hooks=$(cd "$(dirname "$0")/../../.githooks" && pwd)
temp=$(mktemp -d "${TMPDIR:-/tmp}/portfolio-hook-test.XXXXXXXX")
trap 'rm -rf "$temp"' EXIT
trap 'exit 1' HUP INT TERM
repo="$temp/work"
remote="$temp/remote.git"
# The enclosing Git process may have set an alternate index.
unset GIT_DIR GIT_WORK_TREE GIT_INDEX_FILE CI NODE_ENV
git init -q -b main "$repo"
git init -q --bare "$remote"
cd "$repo"
git config user.name 'Hook test'
git config user.email 'test@example.invalid'
git config commit.gpgSign false
cp -R "$hooks" .githooks
mkdir -p my-portfolio/node_modules
cat > my-portfolio/package.json <<'JSON'
{"name":"fixture","version":"1.0.0","scripts":{"validate":"node -e \"const fs=require('node:fs'); process.exit(fs.readFileSync('project-link','utf8').trim() === '/projects/matching-title' ? 0 : 1)\""}}
JSON
echo '{}' > my-portfolio/package-lock.json
echo '/projects/matching-title' > my-portfolio/project-link
(cd my-portfolio && sh ../.githooks/install)
test "$(git config --local core.hooksPath)" = .githooks
git add .
git commit -qm valid

echo '/projects/wrong-link' > my-portfolio/project-link
git add my-portfolio/project-link
echo '/projects/matching-title' > my-portfolio/project-link
if git commit -qm broken; then echo 'Invalid staged link was committed' >&2; exit 1; fi
# Create a deliberately invalid tip to exercise the independent push gate.
git -c core.hooksPath=/dev/null commit -qm broken
git branch broken
git add my-portfolio/project-link
git commit -qm repaired
git remote add origin "$remote"
if git push -q origin main broken; then echo 'Push accepted invalid second branch' >&2; exit 1; fi
test -z "$(git ls-remote "$remote" refs/heads/main refs/heads/broken)"
echo '/projects/unstaged-broken' > my-portfolio/project-link
git push -q origin main
test "$(git --git-dir="$remote" rev-parse refs/heads/main)" = "$(git rev-parse HEAD)"
echo 'Git hooks passed staged-only checks, blocked invalid commits and multi-ref pushes, and accepted valid commits and pushes.'
