import fs from 'fs'
import util from 'util'
import path from 'path';
import marked from 'marked';

const readFile = util.promisify(fs.readFile)

export async function get(req, res, next) {
    const { slug } = req.params
    const filePath = path.join(`notes/${slug}.md`)
    try {
        const file = await readFile(filePath)
        const html = marked(file.toString('utf-8'))
        res.end(html)
    } catch (error) {
        res.statusCode = 404;
        res.end()
    }
}
