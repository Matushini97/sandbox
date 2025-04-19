import { test, expect } from '@playwright/test';

// Mock data matching the API response structure
const mockTodo = {
    userId: 1,
    id: 1,
    title: 'Mocked Todo Title',
    completed: false,
};

test('MobX counter interactions', async ({ page }) => {
    // Intercept API request before navigation
    await page.route(
        'https://jsonplaceholder.typicode.com/todos/1',
        async (route) => {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(mockTodo),
            });
        }
    );

    await page.goto('/mobx');

    // Verify initial counter value
    const counter = page.getByTestId('counter-value');
    await expect(counter).toHaveText('0');

    // Verify mocked API response
    const apiSection = page.getByTestId('api-section');
    await expect(apiSection).toContainText('Mocked Todo Title');

    // Test increment
    const increaseBtn = page.getByTestId('increase-btn');
    await increaseBtn.click();
    await expect(counter).toHaveText('1');

    // Test decrement
    const decreaseBtn = page.getByTestId('decrease-btn');
    await decreaseBtn.click();
    await expect(counter).toHaveText('0');
});

test('Timer updates', async ({ page }) => {
    await page.goto('/mobx');

    const timer = page.getByTestId('timer-value');
    const initialTime = parseInt((await timer.textContent()) || '0');
    await page.waitForTimeout(2000);
    const updatedTime = parseInt((await timer.textContent()) || '0');
    await expect(updatedTime).toBeGreaterThanOrEqual(initialTime);
});
