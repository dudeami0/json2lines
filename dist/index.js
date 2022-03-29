import es from "event-stream";
import fs from "fs";
import { parse } from "JSONStream";
import { pipeline } from "stream/promises";
import options from "./options.js";
/**
 * Processes a single Object from the upstream JSONStream, stringifying it.
 * @param this
 * @param data A single JSON object
 * @param callback
 */
function processLine(data, callback) {
    callback(null, JSON.stringify(data));
}
/**
 * Takes a Readable that contains a valid JSON file, and outputs JSON Lines to
 * the Writable.
 * @param input Readable stream with JSON contents
 * @param output Writable stream that will recieve JSON Lines
 * @param filter The JSONStream filter to use
 */
export default async function read(input, output, filter) {
    await pipeline(input, parse(filter), es.map(processLine), output);
}
/**
 * Gets the input stream source
 * @returns Either a fail stream
 */
function getInputStream() {
    if (options.input === "-") {
        return process.stdin;
    }
    else {
        return fs.createReadStream(options.input);
    }
}
/**
 * Gets the output stream source
 * @returns
 */
function getOutputStream() {
    if (options.output === "-") {
        return process.stdout;
    }
    else {
        return fs.createWriteStream(options.output);
    }
}
// Bootstrap code for CLI usage
const { input, output, filter } = options;
if (input && output && filter) {
    read(getInputStream(), getOutputStream(), filter);
}
//# sourceMappingURL=index.js.map