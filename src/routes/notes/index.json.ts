import fs from 'fs';
import path from 'path';
import util from 'util';
import _ from 'lodash'

const readdir = util.promisify(fs.readdir)
export async function get(req, res, next) {
    const noteDir = path.join('notes')
    try {
        const notes = await readdir(noteDir)

        const readablePaths = notes.map(n => ({
            path: n.replace('.md', ''),
            display: _.chain(n).replace('-', ' ').replace('.md', '').capitalize().value()
        }))
        res.end(JSON.stringify(readablePaths))
    } catch (error) {
        console.log(error)
        res.end()
    }
}