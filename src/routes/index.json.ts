import fs from 'fs';
import { parse } from 'path';
import util from 'util';

const read = util.promisify(fs.readFile)
export async function get(req, res) {
    try {
        const raw = await read('data/landingPage.json', {encoding: 'utf-8'})
        const {services, features} = JSON.parse(raw)
        res.end(JSON.stringify({services, features}))
    } catch (error) {
        console.error(error)
        res.status = 500
        res.end
    }
}