const db = require("../db");
const { NotFoundError } = require("../utils/errors");

class Category {
  static async getAll() {
    const result = await db.query("SELECT id, title FROM categories");
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query(
      `
      SELECT c.title, a.answer_text, a.id
        FROM categories AS c
        JOIN answers AS a
          ON c.id = a.category_id
        WHERE c.id = $1
        ORDER BY a.answer_text;
    `,
      [id]
    );
    if (result.rows.length === 0) throw new NotFoundError();
    return {
      title: result.rows[0].title,
      answers: result.rows.map(row => ({ text: row.answer_text, id: row.id }))
    };
  }
}

module.exports = Category;
