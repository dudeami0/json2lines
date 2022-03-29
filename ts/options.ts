import { program } from "commander";

program
    .version("1.0.0", "-v, --version")
    .usage("[OPTIONS]...")
    .option("--input <string>", "JSON file to read from, or - for STDIN")
    .option("--output <string>", "JSONL file to write, or - for STDOUT")
    .option("--filter <string>", "A filter matching the JSON file")
    .parse(process.argv);

export default program.opts();
