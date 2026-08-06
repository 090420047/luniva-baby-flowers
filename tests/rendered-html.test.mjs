import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const root = new URL("../", import.meta.url);

function readProjectFile(path) {
  return readFileSync(new URL(path, root), "utf8");
}

test("launch categories and featured product images are wired", () => {
  const content = readProjectFile("app/site-content.ts");

  for (const slug of [
    "hos-geldin-bebek-hediyeleri",
    "bebek-buketleri",
    "isme-ozel-tasarimlar",
    "kiz-bebek-modelleri",
    "erkek-bebek-modelleri",
    "hediyelik-ve-ozel-gun",
  ]) {
    assert.match(content, new RegExp(`slug: "${slug}"`));
  }

  for (const image of [
    "/luniva/welcome-blue-boat.png",
    "/luniva/welcome-pink-cloud.png",
    "/luniva/welcome-pink-cottage.png",
    "/luniva/welcome-baby-bottle-pink.png",
    "/luniva/welcome-blue-basket.png",
    "/luniva/welcome-cream-cradle.png",
    "/luniva/blue-swan-lake.png",
    "/luniva/purple-swan-nursery.png",
    "/luniva/blue-yellow-swan.png",
  ]) {
    assert.match(content, new RegExp(`image: "${image.replaceAll("/", "\\/")}"`));
  }
});

test("favicon assets and metadata use the current logo set", () => {
  const layout = readProjectFile("app/layout.tsx");

  for (const asset of [
    "public/favicon.ico",
    "public/favicon.png",
    "public/apple-touch-icon.png",
    "public/icon-192.png",
    "public/icon-512.png",
    "public/luniva/moon-bear-favicon.png",
  ]) {
    assert.ok(existsSync(new URL(asset, root)), `${asset} should exist`);
  }

  assert.match(layout, /\/favicon\.ico\?v=6/);
  assert.match(layout, /\/favicon\.png\?v=6/);
  assert.match(layout, /\/icon-192\.png\?v=6/);
  assert.match(layout, /\/apple-touch-icon\.png\?v=6/);
  assert.doesNotMatch(layout, /\/favicon\.svg\?v=6/);
});
