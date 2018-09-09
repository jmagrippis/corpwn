describe('App', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:8080')
  })

  it('should load the app', async () => {
    const title = await page.title()
    await expect(title).toMatch('Corpwn')
  })
})
