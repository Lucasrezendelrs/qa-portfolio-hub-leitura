const { defineConfig } = require('cypress')
const Database = require('better-sqlite3')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1366,
    viewportHeight: 900,
    fixturesFolder: false,
    video: false,
    fixturesFolder: 'cypress/e2e/fixtures',
    setupNodeEvents(on, config) {
      const db = new Database('C:\\Users\\Lucas\\Documents\\Estudos\\QA\\hub-de-leitura\\database\\biblioteca.db', { verbose: console.log })
      on('task', {
        removeUser(email) {
          try {
            const stmt = db.prepare('DELETE FROM Users WHERE email = ?')
            const result = stmt.run(email)
            return { success: result.changes > 0 }
          } catch (error) {
            throw error
          }
        },
        
        removeBook({ title, author }) {
          try {
            const stmt = db.prepare('DELETE FROM Books WHERE title = ? AND author = ?')
            const result = stmt.run(title, author)
            return { success: result.changes > 0 }
          } catch (error) {
            throw error
          }
        }
      })
      
    }
  }
})
