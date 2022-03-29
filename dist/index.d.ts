/// <reference types="node" />
import { Readable, Writable } from "stream";
/**
 * Takes a Readable that contains a valid JSON file, and outputs JSON Lines to
 * the Writable.
 * @param input Readable stream with JSON contents
 * @param output Writable stream that will recieve JSON Lines
 * @param filter The JSONStream filter to use
 */
export default function read(input: Readable, output: Writable, filter: string): Promise<void>;
