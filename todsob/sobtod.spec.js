import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/home/authen');
  await page.getByRole('link', { name: 'Create a New Post' }).click();
  await page.getByLabel('Title').click();
  await page.getByLabel('Title').fill('name');
  await page.getByLabel('Title').press('Tab');
  await page.locator('#post_body').fill('title');
  await page.getByRole('button', { name: 'Create Post' }).click();
  await page.getByRole('link', { name: 'Back to Home' }).click();
  await page.getByRole('link', { name: 'name' }).click();
  await page.getByRole('button', { name: 'Like' }).click();
  await page.getByLabel('Comment').click();
  await page.getByLabel('Comment').fill('comment');
  await page.getByRole('button', { name: 'Create Comment' }).click();
  await page.getByRole('link', { name: 'Back to Home' }).click();
});